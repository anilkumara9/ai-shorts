'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, SkipForward } from 'lucide-react'

import Image from 'next/image'

const AIVideoPreview = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentScene, setCurrentScene] = useState(0)
  const [highlightedAreas, setHighlightedAreas] = useState<{ x: number; y: number; width: number; height: number }[]>([])

  const scenes = [
    '/placeholder.svg?height=360&width=640',
    '/placeholder.svg?height=360&width=640',
    '/placeholder.svg?height=360&width=640',
  ]

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentScene((prev) => (prev + 1) % scenes.length)
        generateRandomHighlights()
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, scenes.length])

  useEffect(() => {
    if (currentScene >= scenes.length) {
      setCurrentScene(0);
    }
  }, [currentScene, scenes.length]);

  const generateRandomHighlights = () => {
    const newHighlights = Array(3).fill(0).map(() => ({
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      width: Math.random() * 20 + 10,
      height: Math.random() * 20 + 10,
    }))
    setHighlightedAreas(newHighlights)
  }

  const togglePlayPause = () => setIsPlaying(!isPlaying)

  const handleSkipForward = () => {
    setCurrentScene((prev) => (prev + 1) % scenes.length)
    generateRandomHighlights()
  }

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">AI-Powered Video Analysis</h3>
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
        <Image
          src={scenes[currentScene]}
          alt={`Video scene ${currentScene + 1}`}
          className="w-full h-full object-cover"
          width={640}
          height={360}
        />
        {highlightedAreas.map((area, index) => (
          <div
            key={index}
            className="absolute border-2 border-yellow-400 animate-pulse"
            style={{
              left: `${area.x}%`,
              top: `${area.y}%`,
              width: `${area.width}%`,
              height: `${area.height}%`,
            }}
          />
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={togglePlayPause}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
        <button
          onClick={handleSkipForward}
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          <SkipForward className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default AIVideoPreview

