"use client"

import { useRef } from "react"

export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null)

   
    return (
        <footer ref={footerRef} className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
                    <div className="md:col-span-2"> 
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">BLIQ</h3>
                        <p className="text-gray-400 leading-relaxed max-w-md text-sm sm:text-base">
                            A creative design agency that pushes boundaries and creates extraordinary digital experiences for
                            forward-thinking brands.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="text-sm sm:text-base">Brand Identity</li>
                            <li className="text-sm sm:text-base">Web Development</li>
                            <li className="text-sm sm:text-base">UI/UX Design</li>
                            <li className="text-sm sm:text-base">Digital Marketing</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="text-sm sm:text-base">Instagram</li>
                            <li className="text-sm sm:text-base">Twitter</li>
                            <li className="text-sm sm:text-base">LinkedIn</li>
                            <li className="text-sm sm:text-base">Dribbble</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs sm:text-sm">© 2024 Nexus Design Agency. All rights reserved.</p>
                    <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
