'use client'
import { motion } from 'framer-motion'
import { Youtube, Star, TrendingUp, Users } from 'lucide-react'

const creators = [
  {
    name: 'MrBeast',
    handle: '@MrBeast',
    subscribers: '138M',
    views: '22B+',
    engagement: '+245%',
    testimonial: 'ImportTrace helps me create viral content faster and more efficiently than ever before.',
    avatar: '/creators/mrbeast.jpg',
  },
  {
    name: 'PewDiePie',
    handle: '@PewDiePie',
    subscribers: '111M',
    views: '28B+',
    engagement: '+189%',
    testimonial: 'The AI editing tools are game-changing for content creators like myself.',
    avatar: '/creators/pewdiepie.jpg',
  },
  {
    name: 'Markiplier',
    handle: '@Markiplier',
    subscribers: '34M',
    views: '18B+',
    engagement: '+176%',
    testimonial: 'ImportTrace has transformed how I repurpose my long-form content into engaging shorts.',
    avatar: '/creators/markiplier.jpg',
  },
  {
    name: 'Lilly Singh',
    handle: '@IISuperwomanII',
    subscribers: '14.9M',
    views: '3B+',
    engagement: '+212%',
    testimonial: 'Creating content has never been this smooth and intuitive.',
    avatar: '/creators/lilly.jpg',
  },
  {
    name: 'David Dobrik',
    handle: '@DavidDobrik',
    subscribers: '18M',
    views: '6B+',
    engagement: '+233%',
    testimonial: 'The AI helps me capture the most exciting moments from my vlogs instantly.',
    avatar: '/creators/david.jpg',
  },
  {
    name: 'Marques Brownlee',
    handle: '@MKBHD',
    subscribers: '17.3M',
    views: '2.5B+',
    engagement: '+198%',
    testimonial: 'Incredible AI tools that make tech content creation seamless and innovative.',
    avatar: '/creators/mkbhd.jpg',
  },
  {
    name: 'Emma Chamberlain',
    handle: '@emmachamberlain',
    subscribers: '11.8M',
    views: '1.5B+',
    engagement: '+220%',
    testimonial: 'ImportTrace understands the pulse of Gen Z content creation.',
    avatar: '/creators/emma.jpg',
  },
  {
    name: 'Casey Neistat',
    handle: '@CaseyNeistat',
    subscribers: '12.4M',
    views: '3.2B+',
    engagement: '+205%',
    testimonial: 'Revolutionizing storytelling with AI-powered editing.',
    avatar: '/creators/casey.jpg',
  }
]

export default function YouTuberShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[rgb(var(--premium-purple))/5] to-black/0" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Youtube className="w-5 h-5 text-[rgb(var(--premium-gold))]" />
            <span className="text-white/60">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Top <span className="text-gradient">Creators</span>
          </h2>
          <p className="text-lg text-white/60">
            See how leading content creators are transforming their long-form content into viral shorts.
          </p>
        </motion.div>

        {/* Creator Cards with Continuous Animation */}
        <motion.div 
          className="flex overflow-hidden group"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex"
            animate={{
              x: [0, '-100%', 0],
              transition: {
                x: {
                  repeat: Infinity,
                  duration: 90, // Increased duration to make it move slower
                  ease: "linear"
                }
              }
            }}
          >
            {[...creators, ...creators, ...creators].map((creator, index) => (
              <motion.div
                key={`${creator.name}-${index}`}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 0.5
                    }
                  }
                }}
                className="group w-80 flex-shrink-0 mx-4"
              >
                <div className="relative p-6 rounded-2xl overflow-hidden h-full">
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative space-y-6">
                    {/* Creator Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] p-[1px]">
                        <div className="w-full h-full rounded-full bg-black/90 flex items-center justify-center text-xl font-bold">
                          {creator.name[0]}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{creator.name}</h3>
                        <p className="text-white/60">{creator.handle}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-white/40 text-sm mb-1">Subscribers</p>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-white/60" />
                          <span className="font-medium">{creator.subscribers}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-white/40 text-sm mb-1">Views</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-white/60" />
                          <span className="font-medium">{creator.views}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-white/40 text-sm mb-1">Growth</p>
                        <div className="flex items-center gap-1 text-[rgb(var(--premium-gold))]">
                          <TrendingUp className="w-4 h-4" />
                          <span className="font-medium">{creator.engagement}</span>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="text-white/80 italic">
                      "{creator.testimonial}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
