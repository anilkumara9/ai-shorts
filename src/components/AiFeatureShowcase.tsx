'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'

const features = [
  "Content Analysis",
  "Emotion Detection",
  "Trending Topic Identification",
  "Audience Engagement Prediction",
  "Auto-Generated Captions",
  "Music Recommendation"
]

const AIFeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center glow">AI-Powered Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <Sparkles className="inline-block mr-2" />
                {feature}
              </button>
            ))}
          </div>
          <div className="bg-black rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">{features[activeFeature]}</h3>
            <p className="text-gray-300">
              Our advanced AI algorithms power {features[activeFeature].toLowerCase()} to enhance your video content and maximize engagement. This cutting-edge technology analyzes your videos in real-time, providing insights and optimizations that give your content the edge it needs to go viral.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIFeatureShowcase

