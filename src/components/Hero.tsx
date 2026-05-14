function Hero() {
    return (
        <section className="relative min-h-screen">
            {/* Background Video */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
                >
                    <source src="https://videos.pexels.com/video-files/855428/855428-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/60"></div>
                {/* Geometric Pattern Overlay (Subtle Texture) */}
                <div className="absolute inset-0 geometric-pattern opacity-30"></div>
            </div>

            <div className="relative min-h-screen flex flex-col justify-center items-center text-white px-4 py-16 sm:py-20 md:py-0">
                <div className="text-center max-w-5xl w-full">
                    <div className="mb-6 sm:mb-8 md:mb-12">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
                            <span className="block">International Conference on</span>
                            <span className="block text-energy-amber mt-2 sm:mt-3 md:mt-4">Frontiers in Energy Engineering</span>
                            <span className="block">and Sustainability 2027</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-energy-light/90 max-w-3xl mx-auto px-4 leading-relaxed font-medium">
                            Advancing Sustainable Energy Solutions through Mechanical & Electrical Engineering Innovation
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center px-4">
                        <button className="bg-white text-energy-blue hover:bg-energy-light font-bold text-sm sm:text-base md:text-lg w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-md shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            Register Now
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-sm sm:text-base md:text-lg w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-md transition-all hover:-translate-y-1 backdrop-blur-sm">
                            View Schedule
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10">
                    <div className="relative flex overflow-x-hidden bg-energy-blue/90 backdrop-blur-md text-white border-t border-white/10">
                        <div className="animate-marquee py-2 sm:py-3 md:py-4 whitespace-nowrap">
                            <span className="mx-3 sm:mx-4 md:mx-8 text-xs sm:text-sm md:text-base lg:text-xl font-medium">Keynote Speakers from Energy Leaders</span>
                            <span className="mx-3 sm:mx-4 md:mx-8 text-xs sm:text-sm md:text-base lg:text-xl font-medium">Technical Sessions on Renewables</span>
                            <span className="mx-3 sm:mx-4 md:mx-8 text-xs sm:text-sm md:text-base lg:text-xl font-medium">Workshops on Power Systems</span>
                            <span className="mx-3 sm:mx-4 md:mx-8 text-xs sm:text-sm md:text-base lg:text-xl font-medium">Research on Sustainable Engineering</span>
                            <span className="mx-3 sm:mx-4 md:mx-8 text-xs sm:text-sm md:text-base lg:text-xl font-medium">Networking with Engineering Experts</span>
                        </div>
                        <div className="absolute top-0 animate-marquee2 py-2 sm:py-3 md:py-4 whitespace-nowrap">
                            <span className="mx-3 sm:mx-4 md:mx-8 text-xs sm:text-sm md:text-base lg:text-xl font-medium">Keynote Speakers from Energy Leaders</span>
                            <span className="mx-3 sm:mx-4 md:mx-8 text-xs sm:text-sm md:text-base lg:text-xl font-medium">Technical Sessions on Renewables</span>
                            <span className="mx-3 sm:mx-4 md:mx-8 text-xs sm:text-sm md:text-base lg:text-xl font-medium">Workshops on Power Systems</span>
                            <span className="mx-3 sm:mx-4 md:mx-8 text-xs sm:text-sm md:text-base lg:text-xl font-medium">Research on Sustainable Engineering</span>
                            <span className="mx-3 sm:mx-4 md:mx-8 text-xs sm:text-sm md:text-base lg:text-xl font-medium">Networking with Engineering Experts</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
