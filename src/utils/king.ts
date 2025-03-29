// KING - Core Utility Functions
import axios, { AxiosInstance, AxiosError } from 'axios';

interface KingConfig {
  apiKey: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
  baseURL?: string;
  maxRetries?: number;
  retryDelay?: number;
}

interface ProcessingResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  suggestions?: string[];
}

interface VideoAnalysis {
  title: string;
  description: string;
  tags: string[];
  thumbnailTimestamps: number[];
  highlights: Array<{
    startTime: number;
    endTime: number;
    description: string;
    confidence: number;
    mood?: string;
    engagement?: number;
  }>;
  engagement: {
    score: number;
    factors: Array<{
      name: string;
      impact: number;
      suggestion?: string;
    }>;
  };
  seoOptimization: {
    title: string;
    description: string;
    tags: string[];
    recommendations: string[];
  };
  contentWarnings?: string[];
  targetAudience?: string[];
}

interface AIPrompt {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export class King {
  private config: Required<KingConfig>;
  private axiosInstance: AxiosInstance;
  private conversationHistory: AIPrompt[] = [];
  private rateLimitDelay = 1000; // 1 second between requests
  private lastRequestTime = 0;

  constructor(config: KingConfig) {
    if (!config.apiKey) {
      throw new Error('API key is required');
    }

    this.config = {
      model: 'gpt-4',
      temperature: 0.7,
      maxTokens: 2000,
      baseURL: 'https://api.openai.com/v1',
      maxRetries: 3,
      retryDelay: 1000,
      ...config,
    };

    this.axiosInstance = axios.create({
      baseURL: this.config.baseURL,
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    });

    this.conversationHistory = [{
      role: 'system',
      content: 'You are KING, an AI assistant specialized in video content optimization and viral short-form video creation. Your goal is to help creators maximize engagement and reach while maintaining content quality and authenticity.',
    }];
  }

  private async waitForRateLimit(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    
    if (timeSinceLastRequest < this.rateLimitDelay) {
      await new Promise(resolve => 
        setTimeout(resolve, this.rateLimitDelay - timeSinceLastRequest)
      );
    }
    
    this.lastRequestTime = Date.now();
  }

  private async retryOperation<T>(
    operation: () => Promise<T>,
    retryCount = 0
  ): Promise<T> {
    try {
      await this.waitForRateLimit();
      return await operation();
    } catch (error) {
      if (
        retryCount < this.config.maxRetries &&
        error instanceof AxiosError &&
        (error.response?.status === 429 || (error.response?.status ?? 0) >= 500)
      ) {
        console.warn(`Retrying operation due to ${error.response?.status} error. Attempt ${retryCount + 1} of ${this.config.maxRetries}`);
        const delay = this.config.retryDelay * Math.pow(2, retryCount);
        await new Promise(resolve => setTimeout(resolve, delay));
        return this.retryOperation(operation, retryCount + 1);
      }
      throw error;
    }
  }

  async processCommand(command: string, context?: string): Promise<ProcessingResult> {
    try {
      const messages = [...this.conversationHistory];
      
      if (context) {
        messages.push({
          role: 'system',
          content: `Context: ${context}`,
        });
      }

      messages.push({
        role: 'user',
        content: command,
      });

      const response = await this.retryOperation(async () => {
        const result = await this.axiosInstance.post('/chat/completions', {
          model: this.config.model,
          messages,
          temperature: this.config.temperature,
          max_tokens: this.config.maxTokens,
        });

        return result.data;
      });

      const assistantMessage = response.choices[0].message;
      this.conversationHistory.push({
        role: 'user',
        content: command,
      }, {
        role: 'assistant',
        content: assistantMessage.content,
      });

      // Trim conversation history if it gets too long
      if (this.conversationHistory.length > 10) {
        this.conversationHistory = [
          this.conversationHistory[0], // Keep system prompt
          ...this.conversationHistory.slice(-9), // Keep last 9 messages
        ];
      }

      return {
        success: true,
        data: this.formatResponse(assistantMessage.content),
      };

    } catch (error) {
      console.error('Error processing command:', error);
      return {
        success: false,
        error: this.formatError(error),
        suggestions: [
          'Try rephrasing your command',
          'Check your internet connection',
          'Verify your API key is valid',
        ],
      };
    }
  }

  async analyzeVideo(videoContext: string): Promise<ProcessingResult<VideoAnalysis>> {
    try {
      const prompt = `Analyze the following video content and provide detailed insights:
${videoContext}

Please provide analysis in the following areas:
1. Title and description optimization
2. Key moments and highlights
3. Audience engagement factors
4. SEO recommendations
5. Content warnings (if any)
6. Target audience identification`;

      const response = await this.processCommand(prompt);
      
      if (!response.success) {
        throw new Error(response.error);
      }

      // Parse and validate the response
      const analysis = this.parseVideoAnalysis(response.data as string);

      return {
        success: true,
        data: analysis,
      };

    } catch (error) {
      console.error('Error analyzing video:', error);
      return {
        success: false,
        error: this.formatError(error),
        suggestions: [
          'Provide more detailed video context',
          'Try with a shorter video segment',
          'Check if the video content is clear and understandable',
        ],
      };
    }
  }

  clearConversation(): void {
    this.conversationHistory = [this.conversationHistory[0]]; // Keep only the system prompt
  }

  private parseVideoAnalysis(response: string): VideoAnalysis {
    try {
      // Attempt to parse JSON response
      if (response.startsWith('{') && response.endsWith('}')) {
        return JSON.parse(response);
      }

      // If not JSON, parse structured text response
      const analysis: VideoAnalysis = {
        title: '',
        description: '',
        tags: [],
        thumbnailTimestamps: [],
        highlights: [],
        engagement: {
          score: 0,
          factors: [],
        },
        seoOptimization: {
          title: '',
          description: '',
          tags: [],
          recommendations: [],
        },
      };

      // Parse the response text and populate the analysis object
      // This is a simplified version - expand based on your needs
      const sections = response.split('\n\n');
      for (const section of sections) {
        if (section.includes('Title:')) {
          analysis.title = section.split('Title:')[1].trim();
        } else if (section.includes('Description:')) {
          analysis.description = section.split('Description:')[1].trim();
        } else if (section.includes('Tags:')) {
          analysis.tags = section
            .split('Tags:')[1]
            .trim()
            .split(',')
            .map(tag => tag.trim());
        }
        // Add more parsing logic as needed
      }

      return analysis;
    } catch (error) {
      console.error('Error parsing video analysis:', error);
      throw new Error('Failed to parse video analysis response');
    }
  }

  private formatResponse(response: string): string {
    return response.trim();
  }

  private formatError(error: unknown): string {
    if (error instanceof AxiosError) {
      if (error.response?.status === 429) {
        return 'Rate limit exceeded. Please try again later.';
      }
      return error.response?.data?.error?.message || error.message;
    }
    return error instanceof Error ? error.message : 'An unknown error occurred';
  }
}

// Helper functions
export const formatResponse = (response: unknown): string => {
  return typeof response === 'string' ? response : JSON.stringify(response, null, 2);
};

export const validateInput = (input: string): boolean => {
  return input.length > 0 && input.length < 4000;
};