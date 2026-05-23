function Speakers() {
    const expertiseAreas = [
        { area: "Renewable Energy Systems",        tracks: "Track 1, 3, 4" },
        { area: "Smart Grids & Power Systems",     tracks: "Track 2, 5" },
        { area: "AI & Digitalization for Energy",  tracks: "Track 8" },
        { area: "Mechanical & Thermal Systems",    tracks: "Track 6, 9" },
        { area: "Carbon Management & Sustainability", tracks: "Track 10, 11, 12" },
        { area: "Electric Mobility & Transport",   tracks: "Track 7" },
    ];

    return (
        <section id="speakers" className="section-gray py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <h2 className="section-title">Keynote Speakers</h2>
                <span className="section-rule"></span>

                {/* TBA Notice */}
                <div className="conf-card p-6 md:p-8 mb-8">
                    <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--color-text)' }}>
                        Keynote speakers will be announced upon confirmation. We are in the process of
                        inviting distinguished researchers and industry leaders from premier institutions
                        worldwide.
                    </p>
                    <a
                        href="mailto:dhansdah.me@nitjsr.ac.in?subject=Speaker Nomination for FEES-2027"
                        className="btn-outline"
                    >
                        Nominate a Speaker
                    </a>
                </div>

                {/* Expertise Areas Table */}
                <div>
                    <h3
                        className="text-sm font-semibold uppercase tracking-widest mb-3 pb-2 border-b"
                        style={{ color: 'var(--color-primary)', borderColor: 'var(--color-border)' }}
                    >
                        Expected Areas of Expertise
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="conf-table">
                            <thead>
                                <tr>
                                    <th>Area of Expertise</th>
                                    <th>Related Tracks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expertiseAreas.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row.area}</td>
                                        <td style={{ color: 'var(--color-primary)' }}>{row.tracks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Speakers;
