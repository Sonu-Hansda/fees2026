function PlacesNearby() {
    const places = [
        {
            title: "Tribal Culture Centre",
            distance: "7 km from NIT Jamshedpur",
            description: "Showcases Jharkhand's indigenous tribal heritage[cite: 1], featuring sculptures of freedom fighters like Birsa Munda and intricate tribal art galleries.",
            image: "/tribal.webp", 
        },
        {
            title: "Sir Dorabji Tata Park",
            distance: "6 km from NIT Jamshedpur",
            description: "A peaceful retreat featuring manicured lawns, illuminated fountains, a statue of Sir Dorabji Tata, and a vibrant annual December flower show.",
            image: "/dorabji-tata.jpg",
        },
        {
            title: "Dalma Wildlife Sanctuary",
            distance: "15 km from NIT Jamshedpur",
            description: "Rich in biodiversity along the Subarnarekha River within the Dalma Hills[cite: 3]. Offers wildlife safaris, dense green forests, and close encounters with elephants and deer.",
            image: "/dalma.jpg",
        },
        {
            title: "Bhuvaneshwari Temple",
            distance: "12 km from NIT Jamshedpur",
            description: "Perched 500 feet high on Bhuvaneshwari Hill[cite: 3]. Dedicated to Goddess Bhuvaneshwari, it showcases South Indian architecture and offers panoramic city views.",
            image: "/bhuvaneshwari.jpg",
        },
        {
            title: "Dimna Lake",
            distance: "13 km from NIT Jamshedpur",
            description: "A peaceful getaway nestled amid rolling hills[cite: 4]. Ideal for picnics, nature photography, and water sports like boating and rowing.",
            image: "/dimna.jpg",
        },
    ];

    return (
        <section id="places-to-visit" className="section-white py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <h2 className="section-title">Places to Visit</h2>
                <span className="section-rule"></span>

                {/* Intro note */}
                <p className="text-sm md:text-base mb-10 leading-relaxed" style={{ color: 'var(--color-text-mid)' }}>
                    Explore the vibrant culture, scenic landscapes, and landmark attractions around Jamshedpur during your stay for FEES-2027.
                </p>

                {/* Places Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {places.map((place, i) => (
                        <div key={i} className="conf-card overflow-hidden flex flex-col justify-between">
                            <div>
                                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                                    <img 
                                        src={place.image} 
                                        alt={place.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex flex-col mb-2">
                                        <h3 
                                            className="font-bold text-lg md:text-xl"
                                            style={{ color: 'var(--color-text)' }}
                                        >
                                            {place.title}
                                        </h3>
                                        <span 
                                            className="text-xs font-semibold mt-1 inline-block px-2.5 py-0.5 rounded-full w-fit"
                                            style={{ backgroundColor: 'var(--color-border)', color: 'var(--color-primary)' }}
                                        >
                                            {place.distance}
                                        </span>
                                    </div>
                                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--color-text-mid)' }}>
                                        {place.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default PlacesNearby;