import React from 'react';

function HowToReach() {
    const transportModes = [
        {
            title: "Airways",
            image: "/airport.jpg",
            points: [
                "Birsa Munda Airport (Ranchi): Located 140 km away; connected to Jamshedpur via NH 33 through Chandil and Bundu (~2.5 hours by road/bus).",
                "Kolkata Airport (Netaji Subhash Chandra Bose International): Located 260 km away. Best connected to Jamshedpur via train (3–4 hours) or road (~5 hours)."
            ]
        },
        {
            title: "Railways",
            image: "/tatanagar.jpg",
            points: [
                "Tatanagar Junction: A key model station on the South Eastern Railway, directly linked to major hubs like Kolkata, Mumbai, Delhi, Chennai, Bangalore, Patna, and Ranchi.",
                "Strategic Distances: Located 135 km from Kharagpur and 250 km from Howrah (Kolkata), served by numerous superfast, express, and local trains."
            ]
        }
    ];

    return (
        <section id="how-to-reach" className="bg-white py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-2">How to Reach</h2>
                <div className="w-16 h-1 mb-6 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}></div>

                {/* Intro note */}
                <p className="text-sm md:text-base text-gray-600 mb-10 leading-relaxed max-w-3xl">
                    Plan your journey to NIT Jamshedpur for FEES-2027 seamlessly via air, rail, or road networks.
                </p>

                {/* Transport Cards Grid - Matched with Places Nearby Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {transportModes.map((mode, i) => (
                        <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                            <div>
                                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                                    <img 
                                        src={mode.image} 
                                        alt={mode.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                
                                <div className="p-6">
                                    <h3 
                                        className="font-bold text-xl mb-4 pb-2 border-b border-gray-100 text-gray-900"
                                        style={{ color: 'var(--color-text)' }}
                                    >
                                        {mode.title}
                                    </h3>

                                    {/* Bullet points mapping */}
                                    <ul className="space-y-3">
                                        {mode.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start text-xs md:text-sm leading-relaxed text-gray-600">
                                                <span 
                                                    className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2.5 shrink-0" 
                                                    style={{ backgroundColor: 'var(--color-primary)' }}
                                                ></span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default HowToReach;