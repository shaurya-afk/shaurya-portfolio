"use client";

import { useEffect } from 'react';
import { initScrollAnimations } from '@/lib/scrollAnimations';

export function HomePage() {
    useEffect(() => {
        const cleanup = initScrollAnimations();
        return cleanup;
    }, []);
    return (
        <div className="min-h-screen relative overflow-hidden noise-texture homepage-container touch-optimized" style={{ backgroundColor: '#F9EFE7' }}>
            {/* Same background as Experience section */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F9EFE7] via-[#F2E5D8] to-[#F9EFE7] opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-radial from-[#F2E5D8]/40 via-transparent to-transparent"></div>

            {/* Floating geometric shapes for visual interest */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100/30 rounded-full blur-xl animate-float"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-purple-100/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-green-100/25 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-orange-100/30 rounded-full blur-lg animate-float" style={{ animationDelay: '3s' }}></div>


            {/* Main content */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center items-center w-full h-full">
                {/* Hero Section */}
                <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                    {/* Main name */}
                    <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold text-center tracking-tight relative z-10 mb-4 xs:mb-6 sm:mb-8 md:mb-10 font-sf animate-fade-in-up"
                        style={{
                            textShadow: '0 4px 8px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.05)',
                            color: '#3C3C3C',
                            fontFeatureSettings: '"kern" 1, "liga" 1',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale',
                            animationDelay: '0.2s'
                        }}>
                        SHAURYA SHARMA
                    </h1>

                    {/* Subtitle */}
                    <div className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 xs:mb-3 sm:mb-4 font-sf"
                            style={{
                                color: '#1a1a1a',
                                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                fontFeatureSettings: '"kern" 1, "liga" 1',
                                WebkitFontSmoothing: 'antialiased',
                                MozOsxFontSmoothing: 'grayscale'
                            }}>
                            Full Stack Developer
                        </h2>
                        <p className="text-sm xs:text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sf"
                            style={{
                                color: '#3C3C3C',
                                textShadow: '0 1px 2px rgba(0,0,0,0.05)',
                                fontFeatureSettings: '"kern" 1, "liga" 1',
                                WebkitFontSmoothing: 'antialiased',
                                MozOsxFontSmoothing: 'grayscale'
                            }}>
                            Creating developer-centric tools and automation infrastructure for deterministic and scalable workflows.                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-5 justify-center items-center mb-12 xs:mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <a
                            href="#experience"
                            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg xs:rounded-xl px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-base font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 font-sf shadow-lg hover-lift hover-glow"
                            style={{
                                color: '#3C3C3C',
                                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                                fontFeatureSettings: '"kern" 1, "liga" 1',
                                WebkitFontSmoothing: 'antialiased',
                                MozOsxFontSmoothing: 'grayscale',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
                                scrollBehavior: 'smooth'
                            }}
                        >
                            Explore My Work
                        </a>
                        <a
                            href="#contact"
                            className="rounded-lg xs:rounded-xl px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-base font-medium hover:scale-105 transition-all duration-300 font-sf shadow-lg hover-lift hover-glow"
                            style={{
                                background: 'linear-gradient(to right, #2d2d2d, #1a1a1a)',
                                color: 'white',
                                textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                                fontFeatureSettings: '"kern" 1, "liga" 1',
                                WebkitFontSmoothing: 'antialiased',
                                MozOsxFontSmoothing: 'grayscale',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                                scrollBehavior: 'smooth'
                            }}
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-16 left-1/2 transform -translate-x-1/2 text-center animate-slide-in-bottom" style={{ animationDelay: '0.8s' }}>
                    <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl xs:rounded-2xl px-4 xs:px-6 py-2 xs:py-3 shadow-lg hover-lift"
                        style={{
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
                        }}>
                        <p className="text-xs xs:text-sm font-sf"
                            style={{
                                color: '#3C3C3C',
                                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                                fontFeatureSettings: '"kern" 1, "liga" 1',
                                WebkitFontSmoothing: 'antialiased',
                                MozOsxFontSmoothing: 'grayscale'
                            }}>
                            <span className="font-medium">KIIT University</span> • Computer Science Engineering • 2026
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
