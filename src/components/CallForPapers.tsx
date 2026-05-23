function CallForPapers() {
    const tracks = [
        { num: "01", title: "Renewable Energy Technologies & Integration" },
        { num: "02", title: "Smart Grids, Power Systems & Energy Management" },
        { num: "03", title: "Energy Storage & Battery Technologies" },
        { num: "04", title: "Hydrogen Energy & Fuel Cell Technologies" },
        { num: "05", title: "Power Electronics, Electrical Machines & Drives" },
        { num: "06", title: "Sustainable Thermal & Mechanical Systems" },
        { num: "07", title: "Electric Mobility & Sustainable Transportation" },
        { num: "08", title: "AI, IoT & Digitalization for Energy Systems" },
        { num: "09", title: "Advanced Materials & Sustainable Manufacturing" },
        { num: "10", title: "Carbon Management & Environmental Sustainability" },
        { num: "11", title: "Sustainable Buildings & Smart Cities" },
        { num: "12", title: "Policy, Economics & Energy Transition" },
    ];

    return (
        <section id="papers" className="py-12 md:py-16" style={{ background: 'var(--color-off-white)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <h2 className="section-title">Call for Papers</h2>
                <span className="section-rule"></span>

                {/* Scope */}
                <div className="max-w-3xl mb-8 md:mb-10">
                    <p style={{ color: 'var(--color-text-mid)' }} className="text-sm sm:text-base leading-relaxed mb-4">
                        FEES-2027 invites original, unpublished full-length papers from academia and industry.
                        Papers must be written in English and formatted according to the IEEE conference template.
                        All accepted and presented papers will be submitted for inclusion in the{' '}
                        <strong style={{ color: 'var(--color-text)' }}>IEEE Xplore Digital Library</strong>.
                        Selected papers will be invited for publication in high-impact SCI-indexed journals.
                    </p>
                    <p style={{ color: 'var(--color-text-mid)' }} className="text-sm sm:text-base leading-relaxed">
                        The paper submission and review process will be managed via{' '}
                        <strong style={{ color: 'var(--color-text)' }}>Microsoft Conference Management Toolkit (Microsoft CMT)</strong>.
                        The conference follows a <strong style={{ color: 'var(--color-text)' }}>single-blind peer review</strong> process,
                        with a minimum of three expert reviewers per submission. Targeted acceptance rate is approximately 25%.
                    </p>
                </div>

                {/* Submission guidelines as a clean list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
                    <div className="conf-card p-5 md:p-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--color-primary)' }}>
                            Submission Guidelines
                        </h3>
                        <table className="w-full text-sm" style={{ color: 'var(--color-text)' }}>
                            <tbody>
                                {[
                                    ['Paper Length', 'Maximum 6 pages (incl. references & figures)'],
                                    ['Format', 'IEEE Xplore-compliant conference template'],
                                    ['Language', 'English only'],
                                    ['Review Type', 'Single-blind peer review'],
                                    ['Reviews per Paper', 'Minimum 3 independent reviewers'],
                                    ['Acceptance Rate', '~25% (targeted)'],
                                    ['Submission Portal', 'Microsoft CMT'],
                                    ['Copyright', 'IEEE (transfer form after acceptance)'],
                                ].map(([k, v]) => (
                                    <tr key={k} className="border-b" style={{ borderColor: 'var(--color-border)' }}>
                                        <td className="py-2 pr-4 font-medium w-1/2" style={{ color: 'var(--color-text-mid)' }}>{k}</td>
                                        <td className="py-2">{v}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="conf-card p-5 md:p-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--color-primary)' }}>
                            Publication Opportunities
                        </h3>
                        <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-mid)' }}>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--color-primary)' }}></span>
                                All accepted and presented papers will be submitted for inclusion in the <strong style={{ color: 'var(--color-text)' }}>IEEE Xplore Digital Library</strong>.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--color-primary)' }}></span>
                                Selected high-quality papers will be invited for extended versions in <strong style={{ color: 'var(--color-text)' }}>high-impact SCI-indexed journals</strong>.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--color-primary)' }}></span>
                                IEEE holds copyright for all published papers. Authors must submit the IEEE copyright transfer form after acceptance.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--color-primary)' }}></span>
                                Post-acceptance modifications are limited to formatting and minor clarity edits only.
                            </li>
                        </ul>

                        <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                            <p className="text-xs mb-3" style={{ color: 'var(--color-text-mid)' }}>
                                <strong style={{ color: 'var(--color-text)' }}>Paper Submission Deadline:</strong> December 31, 2026
                            </p>
                            <a
                                href="https://cmt3.research.microsoft.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-sm"
                            >
                                Submit via Microsoft CMT
                            </a>
                        </div>
                    </div>
                </div>

                {/* Tracks */}
                <h3 className="text-base font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--color-primary)' }}>
                    Conference Tracks
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--color-border)' }}>
                    {tracks.map((track) => (
                        <div
                            key={track.num}
                            className="flex items-start gap-3 p-4"
                            style={{ background: 'var(--color-white)' }}
                        >
                            <span
                                className="text-xs font-bold w-6 pt-0.5 flex-shrink-0"
                                style={{ color: 'var(--color-primary)' }}
                            >
                                T{track.num}
                            </span>
                            <span className="text-sm leading-snug" style={{ color: 'var(--color-text)' }}>
                                {track.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Ethics note */}
                <div className="mt-6 p-4 text-sm border-l-4" style={{ borderColor: 'var(--color-primary)', background: 'rgba(27,54,93,0.04)', color: 'var(--color-text-mid)' }}>
                    <strong style={{ color: 'var(--color-text)' }}>Publication Ethics:</strong> Submissions must be original and not under review elsewhere.
                    All papers are screened for plagiarism. Conflicts of interest are managed via the Microsoft CMT system.
                    The conference strictly adheres to IEEE publication ethics guidelines.
                </div>
            </div>
        </section>
    );
}

export default CallForPapers;
