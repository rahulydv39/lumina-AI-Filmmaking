import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../components/Button';

const plans = [
    {
        name: "Creator",
        price: "$29",
        features: ["15 Minutes Video Generation", "1080p Resolution", "Standard Style Transfer", "Commercial License"],
        recommended: false
    },
    {
        name: "Studio",
        price: "$99",
        features: ["Unlimited Generation", "4K Resolution", "Advanced AI Director", "Custom LoRA Models", "Priority Rendering"],
        recommended: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        features: ["Dedicated GPU Cluster", "8K Resolution", "API Access", "SSO & Security", "24/7 Support"],
        recommended: false
    }
];

export const Pricing: React.FC = () => {
    return (
        <section className="py-32 container mx-auto px-6 relative">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-4">Choose your <span className="text-lumina-cyan">Reality.</span></h2>
                <p className="text-white/40">Scale your production with plans designed for future filmmakers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative p-8 rounded-3xl border backdrop-blur-md flex flex-col ${plan.recommended
                                ? "bg-white/10 border-lumina-accent shadow-[0_0_50px_rgba(124,58,237,0.1)]"
                                : "bg-white/5 border-white/10 hover:border-white/20"
                            }`}
                    >
                        {plan.recommended && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-lumina-accent rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                Most Popular
                            </div>
                        )}

                        <h3 className="font-display text-2xl font-bold uppercase mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            {plan.price !== "Custom" && <span className="text-white/40">/mo</span>}
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-white/70">
                                    <Check className="w-4 h-4 text-lumina-cyan" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button variant={plan.recommended ? 'primary' : 'outline'} className="w-full">
                            {plan.name === "Enterprise" ? "Contact Sales" : "Get Access"}
                        </Button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
