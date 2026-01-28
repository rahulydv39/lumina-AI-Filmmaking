import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../components/Button';

const plans = [
    {
        name: "Creator",
        price: "$29",
        features: ["1080p Rendering", "5GB Cloud Storage", "Basic Motion Tools", "Community Support"],
        highlight: false
    },
    {
        name: "Pro",
        price: "$79",
        features: ["4K Rendering", "100GB Cloud Storage", "Advanced Physics Engine", "Priority Rendering", "Commercial License"],
        highlight: true
    },
    {
        name: "Studio",
        price: "$199",
        features: ["8K Rendering", "Unlimited Storage", "API Access", "Dedicated Support", "Custom Models"],
        highlight: false
    }
];

export const PricingSection: React.FC = () => {
    return (
        <section id="pricing" className="py-32 container mx-auto px-6 border-t border-white/5">
            <div className="text-center mb-20">
                <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
                    Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-cyan to-lumina-magenta">Power.</span>
                </h2>
                <p className="text-white/50 text-xl font-light">
                    Flexible plans for independent artists and full-scale studios.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                {plans.map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative p-8 rounded-3xl border backdrop-blur-md ${plan.highlight
                                ? "bg-white/10 border-lumina-cyan/50 shadow-[0_0_50px_rgba(34,211,238,0.1)] scale-105 z-10"
                                : "bg-white/5 border-white/10 opacity-80 hover:opacity-100 transition-opacity"
                            }`}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-lumina-cyan text-black text-xs font-bold uppercase tracking-widest rounded-full">
                                Most Popular
                            </div>
                        )}

                        <h3 className="font-display text-2xl font-bold uppercase mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            <span className="text-white/50 text-sm">/month</span>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-white/80">
                                    <div className={`p-1 rounded-full ${plan.highlight ? "bg-lumina-cyan/20 text-lumina-cyan" : "bg-white/10 text-white"}`}>
                                        <Check className="w-3 h-3" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button
                            className={`w-full ${plan.highlight ? "bg-lumina-cyan text-black hover:bg-lumina-cyan/90 border-transparent" : ""}`}
                            variant={plan.highlight ? 'primary' : 'outline'}
                        >
                            Select Plan
                        </Button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
