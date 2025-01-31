'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for content creators just getting started',
    features: [
      'Up to 10 videos per month',
      'Basic AI processing',
      'Standard quality exports',
      'Basic analytics',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'For professional creators and small teams',
    features: [
      'Up to 50 videos per month',
      'Advanced AI processing',
      'HD quality exports',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
      'Team collaboration',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large teams and organizations',
    features: [
      'Unlimited videos',
      'Premium AI processing',
      '4K quality exports',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Custom integrations',
      'API access',
      'SLA guarantee',
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-white/60">
            Choose the perfect plan for your content creation needs. All plans include our core AI features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-8 rounded-2xl overflow-hidden h-full">
                {/* Card Background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-10" />
                )}

                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium">
                      <Star className="w-3 h-3 text-[rgb(var(--premium-gold))]" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Plan Name & Price */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                      {plan.price !== 'Custom' && <span className="text-white/60">/month</span>}
                    </div>
                  </div>

                  <p className="text-white/60">{plan.description}</p>

                  {/* Features List */}
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] p-[1px] flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                        </div>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full px-6 py-3 rounded-full text-white font-medium transition-colors ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))]'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

