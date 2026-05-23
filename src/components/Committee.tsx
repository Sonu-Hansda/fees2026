function Committee() {
    const tpcFacts = [
        { label: "Reviewer Pool",      value: "300+" },
        { label: "Min. Reviews/Paper", value: "3" },
        { label: "Submission Portal",  value: "Microsoft CMT" },
        { label: "Review Process",     value: "Single-Blind" },
        { label: "Final Authority",    value: "TPC Chair" },
        { label: "COI Handling",       value: "System Flagged" },
    ];

    return (
        <section id="committee" className="section-white py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <h2 className="section-title">Organizing Committee</h2>
                <span className="section-rule"></span>

                {/* Intro note */}
                <p className="text-sm md:text-base mb-10 leading-relaxed" style={{ color: 'var(--color-text-mid)' }}>
                    FEES-2027 is organized by the Department of Mechanical Engineering, NIT Jamshedpur,
                    with participation from the Department of Electrical Engineering.
                </p>

                {/* Chief Patron */}
                <div className="mb-10">
                    <h3
                        className="text-xs font-semibold uppercase tracking-widest mb-3 pb-2 border-b"
                        style={{ color: 'var(--color-primary)', borderColor: 'var(--color-border)' }}
                    >
                        Chief Patron
                    </h3>
                    <div className="conf-card p-5">
                        <div
                            className="font-bold text-base md:text-lg"
                            style={{ color: 'var(--color-text)' }}
                        >
                            Director
                        </div>
                        <div
                            className="text-sm mt-0.5"
                            style={{ color: 'var(--color-primary)' }}
                        >
                            National Institute of Technology Jamshedpur
                        </div>
                    </div>
                </div>

                {/* Conference Chairs */}
                <div className="mb-10">
                    <h3
                        className="text-xs font-semibold uppercase tracking-widest mb-3 pb-2 border-b"
                        style={{ color: 'var(--color-primary)', borderColor: 'var(--color-border)' }}
                    >
                        Conference Chairs
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Dr. Dulari Hansdah */}
                        <div className="conf-card p-5">
                            <div
                                className="font-bold text-base md:text-lg mb-0.5"
                                style={{ color: 'var(--color-text)' }}
                            >
                                Dr. Dulari Hansdah
                            </div>
                            <div
                                className="font-semibold text-sm mb-1"
                                style={{ color: 'var(--color-primary)' }}
                            >
                                General Chair &amp; Convener
                            </div>
                            <div className="text-xs mb-0.5" style={{ color: 'var(--color-text-mid)' }}>
                                Dept. of Mechanical Engineering, NIT Jamshedpur
                            </div>
                            <div className="text-xs mb-3" style={{ color: 'var(--color-text-light)' }}>
                                IEEE Member ID: 101369258
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <a
                                    href="mailto:dhansdah.me@nitjsr.ac.in"
                                    className="text-xs px-3 py-1 border font-medium"
                                    style={{
                                        color: 'var(--color-primary)',
                                        borderColor: 'var(--color-primary)',
                                        textDecoration: 'none',
                                    }}
                                >
                                    dhansdah.me@nitjsr.ac.in
                                </a>
                                <a
                                    href="https://www.nitjsr.ac.in/people/profile/ME105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs px-3 py-1 border font-medium"
                                    style={{
                                        color: 'var(--color-primary)',
                                        borderColor: 'var(--color-border)',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Institute Profile
                                </a>
                                <a
                                    href="https://scholar.google.co.in/citations?user=0Sf_mnwAAAAJ&hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs px-3 py-1 border font-medium"
                                    style={{
                                        color: 'var(--color-primary)',
                                        borderColor: 'var(--color-border)',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Google Scholar
                                </a>
                            </div>
                        </div>

                        {/* Dr. Veerpratap Meena */}
                        <div className="conf-card p-5">
                            <div
                                className="font-bold text-base md:text-lg mb-0.5"
                                style={{ color: 'var(--color-text)' }}
                            >
                                Dr. Veerpratap Meena
                            </div>
                            <div
                                className="font-semibold text-sm mb-1"
                                style={{ color: 'var(--color-primary)' }}
                            >
                                Technical Program Chair
                            </div>
                            <div className="text-xs mb-0.5" style={{ color: 'var(--color-text-mid)' }}>
                                Dept. of Electrical Engineering, NIT Jamshedpur
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <a
                                    href="mailto:veerpratap.ee@nitjsr.ac.in"
                                    className="text-xs px-3 py-1 border font-medium"
                                    style={{
                                        color: 'var(--color-primary)',
                                        borderColor: 'var(--color-primary)',
                                        textDecoration: 'none',
                                    }}
                                >
                                    veerpratap.ee@nitjsr.ac.in
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* TPC Key Facts */}
                <div className="mb-10">
                    <h3
                        className="text-xs font-semibold uppercase tracking-widest mb-3 pb-2 border-b"
                        style={{ color: 'var(--color-primary)', borderColor: 'var(--color-border)' }}
                    >
                        Technical Program Committee — Key Facts
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                        {tpcFacts.map((item, i) => (
                            <div
                                key={i}
                                className="conf-card p-4"
                            >
                                <div
                                    className="text-lg font-bold mb-0.5"
                                    style={{ color: 'var(--color-primary)' }}
                                >
                                    {item.value}
                                </div>
                                <div className="text-xs" style={{ color: 'var(--color-text-mid)' }}>
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* IEEE Co-Sponsorship Banner */}
                {/* <div
                    className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 md:p-8"
                    style={{ background: 'var(--color-primary)' }}
                >
                    <div className="flex-1">
                        <div className="font-bold text-base md:text-lg mb-1 text-white">
                            IEEE Technical Co-Sponsorship
                        </div>
                        <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                            FEES-2027 is seeking Technical Co-Sponsorship from the{" "}
                            <strong className="text-white">IEEE Kolkata Section</strong>. The conference
                            will strictly adhere to IEEE guidelines for publication and peer review.
                        </p>
                    </div>
                    <img
                        src="/ieee.png"
                        alt="IEEE"
                        className="h-12 object-contain shrink-0"
                        style={{ filter: 'brightness(0) invert(1)' }}
                    />
                </div> */}

            </div>
        </section>
    );
}

export default Committee;
