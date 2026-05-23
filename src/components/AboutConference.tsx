function AboutConference() {
    return (
        <section id="about" className="section-white py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Two-column: Description + Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 md:mb-16">

                    {/* Left: Description */}
                    <div>
                        <h2 className="section-title">About the Conference</h2>
                        <span className="section-rule"></span>
                        <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text)' }}>
                            <p>
                                The International Conference on Frontiers in Energy Engineering and
                                Sustainability (FEES-2027) brings together leading researchers, industry
                                professionals, and academicians from mechanical and electrical engineering
                                domains to address critical challenges in sustainable energy systems.
                            </p>
                            <p>
                                This premier conference focuses on advancing renewable energy technologies,
                                power systems, and sustainable engineering practices through technical
                                sessions, workshops, and collaborative discussions among experts from
                                across the globe.
                            </p>
                            <p>
                                Organized by the Department of Mechanical Engineering,{" "}
                                <strong>National Institute of Technology Jamshedpur</strong>, FEES-2027
                                aims to bridge the gap between academic research and industrial
                                applications in the energy sector, fostering innovation and knowledge
                                exchange for a sustainable future.
                            </p>
                        </div>
                    </div>

                    {/* Right: 2x2 Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Stat 1 */}
                        <div className="conf-card p-5 text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                                500+
                            </div>
                            <div className="font-semibold text-sm md:text-base" style={{ color: 'var(--color-text)' }}>
                                Expected Submissions
                            </div>
                            <div className="text-xs mt-1" style={{ color: 'var(--color-text-light)' }}>
                                25% Acceptance Rate
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="conf-card p-5 text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                                12
                            </div>
                            <div className="font-semibold text-sm md:text-base" style={{ color: 'var(--color-text)' }}>
                                Technical Tracks
                            </div>
                            <div className="text-xs mt-1" style={{ color: 'var(--color-text-light)' }}>
                                IEEE Xplore Indexed
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="conf-card p-5 text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                                300+
                            </div>
                            <div className="font-semibold text-sm md:text-base" style={{ color: 'var(--color-text)' }}>
                                Expert Reviewers
                            </div>
                            <div className="text-xs mt-1" style={{ color: 'var(--color-text-light)' }}>
                                Min 3 Reviews/Paper
                            </div>
                        </div>

                        {/* Stat 4 */}
                        <div className="conf-card p-5 text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                                3
                            </div>
                            <div className="font-semibold text-sm md:text-base" style={{ color: 'var(--color-text)' }}>
                                Conference Days
                            </div>
                            <div className="text-xs mt-1" style={{ color: 'var(--color-text-light)' }}>
                                April 1–3, 2027
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo Strip */}
                <div
                    className="border-t border-b py-6 mb-12 md:mb-16 flex flex-wrap items-center justify-center gap-10 md:gap-16"
                    style={{ borderColor: 'var(--color-border)' }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <img
                            src="/nitjsr.png"
                            alt="NIT Jamshedpur"
                            className="h-16 object-contain"
                        />
                        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-text-mid)' }}>
                            Organized by
                        </span>
                    </div>
                    {/* <div
                        className="w-px h-14 hidden sm:block"
                        style={{ background: 'var(--color-border)' }}
                    ></div> */}
                    {/* <div className="flex flex-col items-center gap-2">
                        <img
                            src="/ieee.png"
                            alt="IEEE"
                            className="h-16 object-contain"
                        />
                        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-text-mid)' }}>
                            Technical Co-Sponsorship Sought
                        </span>
                    </div> */}
                </div>

                {/* About NIT Jamshedpur */}
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Photo */}
                        <div className="overflow-hidden border" style={{ borderColor: 'var(--color-border)' }}>
                            <img
                                src="/djlhc.png"
                                alt="NIT Jamshedpur Main Building"
                                className="w-full h-64 md:h-80 object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div>
                            <h3 className="section-title">About NIT Jamshedpur</h3>
                            <span className="section-rule"></span>
                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-justify" style={{ color: 'var(--color-text)' }}>
                                <p>
                                    National Institute of Technology Jamshedpur is an Institution of
                                    National Importance under the Ministry of Education, Government of
                                    India. Established in 1960 as the Regional Institute of Technology
                                    (RIT), it was upgraded to a National Institute of Technology on
                                    27th December 2002.
                                </p>
                                <p>
                                    Situated in the heart of the industrial city of Jamshedpur, the
                                    institute has been a beacon of technical excellence for over six
                                    decades. With 12 departments, excellent research facilities, and a
                                    lush green campus spanning 341 acres, NIT Jamshedpur continues to
                                    nurture young minds with technical knowledge and ethical values.
                                </p>
                                <p>
                                    The{" "}
                                    <strong>Department of Mechanical Engineering</strong>, one of the
                                    oldest and most prestigious departments, is organizing FEES-2027 in
                                    collaboration with the Department of Electrical Engineering, to
                                    foster research and innovation in energy systems.
                                </p>
                            </div>
                            <div className="mt-6">
                                <a
                                    href="https://www.nitjsr.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline"
                                >
                                    Visit Institute Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutConference;
