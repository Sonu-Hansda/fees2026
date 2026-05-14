function Speakers() {
    const speakers = [
        {
            name: "Dr. ABC Sharma",
            title: "Chief Engineer",
            company: "National Thermal Power Corporation",
            image: "https://placehold.co/600x400",
            topic: "Advancements in Thermal Power Generation",
            experience: "35+ years in power sector"
        },
         {
            name: "Dr. ABC Sharma",
            title: "Chief Engineer",
            company: "National Thermal Power Corporation",
            image: "https://placehold.co/600x400",
            topic: "Advancements in Thermal Power Generation",
            experience: "35+ years in power sector"
        },
         {
            name: "Dr. ABC Sharma",
            title: "Chief Engineer",
            company: "National Thermal Power Corporation",
            image: "https://placehold.co/600x400",
            topic: "Advancements in Thermal Power Generation",
            experience: "35+ years in power sector"
        },
         {
            name: "Dr. ABC Sharma",
            title: "Chief Engineer",
            company: "National Thermal Power Corporation",
            image: "https://placehold.co/600x400",
            topic: "Advancements in Thermal Power Generation",
            experience: "35+ years in power sector"
        },
    ];

    return (
        <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl font-bold text-energy-gray mb-3 sm:mb-4">
                        Distinguished Speakers
                    </h2>
                    <div className="section-divider max-w-2xl mx-auto"></div>
                    <p className="text-energy-gray text-sm sm:text-base md:text-lg mt-3 sm:mt-4 md:mt-6 max-w-3xl mx-auto leading-relaxed px-2">
                        Learn from seasoned energy sector leaders and renowned researchers with decades of experience
                        in mechanical and electrical engineering domains
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    {speakers.map((speaker, index) => (
                        <div key={index} className="energy-card group">
                            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-energy-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-4 md:left-4 md:right-4">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-2.5 md:p-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="text-xs sm:text-sm font-semibold text-energy-blue">Expertise</div>
                                        <div className="text-xs text-energy-gray">{speaker.experience}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-energy-gray mb-1.5 sm:mb-2">{speaker.name}</h3>
                                <div className="flex items-center mb-1.5 sm:mb-2 md:mb-3">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-energy-green rounded-full mr-1.5 sm:mr-2"></div>
                                    <p className="text-energy-blue font-medium text-xs sm:text-sm md:text-base">{speaker.title}</p>
                                </div>
                                <p className="text-energy-gray text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4">{speaker.company}</p>
                                <div className="border-t border-gray-100 pt-2 sm:pt-3 md:pt-4">
                                    <div className="text-xs sm:text-sm font-semibold text-energy-amber mb-1 sm:mb-1.5 md:mb-2">Presentation Topic</div>
                                    <p className="text-energy-gray text-xs sm:text-sm md:text-base">{speaker.topic}</p>
                                </div>
                                <div className="mt-2 sm:mt-3 md:mt-4 flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                                    <div className="text-xs px-2 py-1 bg-energy-blue/10 text-energy-blue rounded-full">
                                        Energy Sector
                                    </div>
                                    <div className="text-xs px-2 py-1 bg-energy-green/10 text-energy-green rounded-full">
                                        Engineering
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
                    <button className="btn-energy-outline px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg">
                        View Complete Speaker List
                    </button>
                    <p className="text-energy-gray mt-3 sm:mt-4 md:mt-6 text-xs sm:text-sm">
                        40+ additional speakers from leading energy organizations and academic institutions
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Speakers
