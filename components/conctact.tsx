"use client"

import {useRef} from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLDivElement>(null)
    const infoRef = useRef<HTMLDivElement>(null)

    return (
        <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
            <div className="container mx-auto max-w-6xl">
                <h2
                    ref={titleRef}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-14 lg:mb-16"
                >
                    Let's <span className="text-blue-400">Connect</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div ref={formRef} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Project Type</label>
                            <select className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base">
                                <option>Brand Identity Design</option>
                                <option>Web Development</option>
                                <option>UI/UX Design</option>
                                <option>Digital Marketing</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                rows={5}
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300 resize-none text-sm sm:text-base"
                                placeholder="Tell us about your project..."
                            />
                        </div>

                        <button className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                            Send Message
                        </button>
                    </div>

                    <div ref={infoRef} className="space-y-8">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-6">Get in Touch</h3>
                            <p className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base">
                                Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as
                                soon as possible.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                                </div>
                                <div>
                                    <div className="font-medium text-sm sm:text-base">Email</div>
                                    <div className="text-gray-400 text-xs sm:text-sm">hello@nexusagency.com</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                                </div>
                                <div>
                                    <div className="font-medium text-sm sm:text-base">Phone</div>
                                    <div className="text-gray-400 text-xs sm:text-sm">+1 (555) 123-4567</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                                </div>
                                <div>
                                    <div className="font-medium text-sm sm:text-base">Office</div>
                                    <div className="text-gray-400 text-xs sm:text-sm">123 Design Street, Creative City, CC 12345</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
