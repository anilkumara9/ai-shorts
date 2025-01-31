'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const initialData = [
  { name: 'Views', value: 1000 },
  { name: 'Likes', value: 500 },
  { name: 'Comments', value: 100 },
  { name: 'Shares', value: 50 },
]

const EngagementPredictor = () => {
  const [data, setData] = useState(initialData)

  const predictEngagement = () => {
    const newData = data.map(item => ({
      ...item,
      value: Math.floor(item.value * (1 + Math.random() * 0.5))
    }))
    setData(newData)
  }

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">AI Engagement Predictor</h3>
      <div className="h-64 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <button
        onClick={predictEngagement}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
      >
        Predict Engagement
      </button>
    </div>
  )
}

export default EngagementPredictor

