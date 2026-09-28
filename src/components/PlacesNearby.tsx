function PlacesNearby() {
    const places = [
        {
            title: "Tata Steel",
            distance: "6 km from NIT Jamshedpur",
            description: "Asia’s first integrated steel plant and one of India’s largest single-location steel plants, Tata Steel’s Jamshedpur Works spans a vast industrial area with an annual crude steel capacity of 11 million tonnes.",
            image: "/tata_steel.webp"
        },
        {
            title: "Tribal Culture Centre",
            distance: "7 km from NIT Jamshedpur",
            description: "Showcases Jharkhand’s rich tribal heritage and culture, featuring traditional art, sculptures, and exhibits highlighting the history and contributions of tribal communities, including freedom fighter Birsa Munda.",
            image: "/tribal.webp", 
        },
        {
    title: "Dalma Wildlife Sanctuary",
    distance: "15 km from NIT Jamshedpur",
    description:
        "A 195 sq. km wildlife sanctuary in the Dalma Hills, known for its rich forests and significant population of Indian elephants, along with deer and other wildlife.",
    image: "/dalma.jpg",
},
{
    title: "Dimna Lake",
    distance: "13 km from NIT Jamshedpur",
    description:
        "A scenic artificial reservoir at the foothills of the Dalma Hills, surrounded by forests and greenery. It is a popular spot for boating, nature walks, and enjoying views of the surrounding hills.",
    image: "/dimna.jpg",
},
{
    title: "Sir Dorabji Tata Park",
    distance: "6 km from NIT Jamshedpur",
    description:
        "A well-maintained urban park dedicated to Sir Dorabji Tata, featuring landscaped gardens, fountains, and open spaces that offer a peaceful break within the city.",
    image: "/dorabji.webp",
},
{
    title: "Bhuvaneshwari Temple",
    distance: "12 km from NIT Jamshedpur",
    description:
        "A hilltop temple dedicated to Goddess Bhuvaneshwari, known for its elevated location and panoramic views of Jamshedpur and the surrounding landscape.",
    image: "/bhuvaneshwari.webp",
},
    ];

    return (
        <section id="places-to-visit" className="section-white py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <h2 className="section-title">Places to Visit</h2>
                <span className="section-rule"></span>

                {/* Intro note */}
                <p className="text-sm mb-12" style={{ color: 'var(--color-text-mid)' }}>
                    Explore the vibrant culture, scenic landscapes, and landmark attractions around Jamshedpur during your stay for FEES-2027.
                </p>

                {/* Places Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {places.map((place, i) => (
                        <div key={i} className="conf-card overflow-hidden flex flex-col justify-between">
                            <div>
                                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                                    <img 
                                        src={place.image} 
                                        alt={place.title}
                                        loading="lazy"
                                        className="w-full h-full object-contain object-top"
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
                                            className="text-xs"
                                        >
                                            {place.distance}
                                        </span>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-600 font-light">
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