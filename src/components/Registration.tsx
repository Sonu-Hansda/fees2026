function Registration() {
    const tiers = [
        {
            category: "Student",
            note: "UG / PG / PhD Scholars",
            earlyBird: "INR 2,500",
            regular:   "INR 3,500",
            features: [
                "Full Conference Access (3 Days)",
                "Workshop Participation",
                "Conference Kit",
                "Lunch & Refreshments",
                "Digital Proceedings",
                "Certificate of Participation",
            ],
        },
        {
            category: "Academic / Faculty",
            note: "Faculty / Researchers / Post-Docs",
            earlyBird: "INR 5,000",
            regular:   "INR 7,000",
            features: [
                "Full Conference Access (3 Days)",
                "Workshop Participation",
                "Conference Kit",
                "Lunch & Refreshments",
                "Printed Proceedings",
                "Certificate of Participation",
                "Networking Dinner",
            ],
            highlight: true,
        },
        {
            category: "Industry / International",
            note: "Industry Professionals & Foreign Delegates",
            earlyBird: "INR 8,000 / USD 200",
            regular:   "INR 10,000 / USD 250",
            features: [
                "Full Conference Access (3 Days)",
                "All Workshops",
                "Premium Conference Kit",
                "Lunch & Refreshments",
                "Printed Proceedings",
                "Certificate of Participation",
                "Networking Dinner (All Nights)",
            ],
        },
    ];

    return (
        <section id="registration" className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="section-title">Registration</h2>
                <span className="section-rule"></span>

                {/* Tentative notice */}
                <div className="mb-8 p-3 text-sm border-l-4" style={{ borderColor: 'var(--color-primary)', background: 'rgba(27,54,93,0.04)', color: 'var(--color-text-mid)' }}>
                    <strong style={{ color: 'var(--color-text)' }}>Note:</strong> Registration fees are tentative and subject to revision upon IEEE Kolkata Section approval.
                    At least one author per accepted paper must register for inclusion in the proceedings.
                </div>

                {/* Pricing table */}
                <div className="overflow-x-auto mb-10 md:mb-12">
                    <table className="conf-table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Early Bird (Until Mar 15, 2027)</th>
                                <th>Regular</th>
                                <th>Includes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tiers.map((t, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className="font-semibold" style={{ color: t.highlight ? 'var(--color-primary)' : 'var(--color-text)' }}>
                                            {t.category}
                                        </div>
                                        <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-light)' }}>{t.note}</div>
                                    </td>
                                    <td className="font-bold" style={{ color: 'var(--color-primary)' }}>{t.earlyBird}</td>
                                    <td style={{ color: 'var(--color-text-mid)' }}>{t.regular}</td>
                                    <td>
                                        <ul className="space-y-0.5 text-xs" style={{ color: 'var(--color-text-mid)' }}>
                                            {t.features.map(f => (
                                                <li key={f} className="flex items-center gap-1.5">
                                                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--color-primary)' }}></span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Registration timeline */}
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--color-primary)' }}>
                    Registration Timeline
                </h3>
                <div className="conf-card mb-10 md:mb-12 overflow-x-auto">
                    <table className="conf-table">
                        <thead>
                            <tr>
                                <th>Phase</th>
                                <th>Period</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-medium">Paper Submission Deadline</td>
                                <td>December 31, 2026</td>
                            </tr>
                            <tr>
                                <td className="font-medium">Early Bird Registration</td>
                                <td>Until March 15, 2027</td>
                            </tr>
                            <tr>
                                <td className="font-medium">Regular Registration</td>
                                <td>March 16 – March 28, 2027</td>
                            </tr>
                            <tr>
                                <td className="font-medium">On-site Registration</td>
                                <td>April 1–3, 2027</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Contact for registration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                    <div className="conf-card p-5 md:p-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--color-primary)' }}>
                            Registration Contact
                        </h3>
                        <table className="w-full text-sm">
                            <tbody>
                                {[
                                    ['Name', 'Dr. Dulari Hansdah'],
                                    ['Email', 'dhansdah.me@nitjsr.ac.in'],
                                    ['Alternate Email', 'dhansdah@gmail.com'],
                                    ['Phone', '+91 9439844294'],
                                    ['Designation', 'General Chair, Dept. of ME, NIT Jamshedpur'],
                                ].map(([k, v]) => (
                                    <tr key={k} className="border-b" style={{ borderColor: 'var(--color-border)' }}>
                                        <td className="py-2 pr-4 font-medium" style={{ color: 'var(--color-text-mid)', width: '40%' }}>{k}</td>
                                        <td className="py-2" style={{ color: 'var(--color-text)' }}>
                                            {k === 'Email' || k === 'Alternate Email' ? (
                                                <a href={`mailto:${v}`} className="hover:underline" style={{ color: 'var(--color-primary)' }}>{v}</a>
                                            ) : k === 'Phone' ? (
                                                <a href={`tel:${v.replace(/\s/g,'')}`} className="hover:underline" style={{ color: 'var(--color-primary)' }}>{v}</a>
                                            ) : v}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="conf-card p-5 md:p-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--color-primary)' }}>
                            Payment Methods
                        </h3>
                        <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-mid)' }}>
                            {['UPI / NEFT / RTGS', 'Demand Draft', 'Online Payment Portal', 'Credit / Debit Card'].map(m => (
                                <li key={m} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--color-primary)' }}></span>
                                    {m}
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs mt-4" style={{ color: 'var(--color-text-light)' }}>
                            Bank details and payment instructions will be communicated upon registration confirmation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Registration;