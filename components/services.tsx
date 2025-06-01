"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Palette, Code, Smartphone, TrendingUp } from "lucide-react"

const services = [
    {
        icon: Palette,
        title: "Brand Identity Design",
        description:
            "Creating memorable brand identities that resonate with your target audience and stand out in the market.",
        features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    },
    {
        icon: Code,
        title: "Web Development",
        description: "Building responsive, fast, and scalable websites using the latest technologies and best practices.",
        features: ["Frontend Development", "Backend Systems", "E-commerce", "CMS Integration"],
    },
    {
        icon: Smartphone,
        title: "UI/UX Design",
        description: "Designing intuitive and engaging user experiences that convert visitors into loyal customers.",
        features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
    },
    {
        icon: TrendingUp,
        title: "Digital Marketing",
        description: "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
        features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"],
    },
]

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    

    return (
        <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
            <div className="container mx-auto max-w-7xl">
                <h2
                    ref={titleRef}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-14 lg:mb-16"
                >
                    Our <span className="text-blue-400">Services</span>
                </h2>

                <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-6 sm:p-8 bg-gray-800/50 rounded-2xl backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="mb-6">
                                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                            <ul className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="text-xs sm:text-sm text-gray-400 flex items-center">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
