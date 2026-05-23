function ImportantDates() {
    const dates = [
        {
            event:  "Paper Submission Deadline",
            date:   "December 31, 2026",
            status: "Open",
        },
        {
            event:  "Notification of Acceptance",
            date:   "February 15, 2027",
            status: "—",
        },
        {
            event:  "Camera-Ready Submission",
            date:   "March 1, 2027",
            status: "—",
        },
        {
            event:  "Early Bird Registration Closes",
            date:   "March 15, 2027",
            status: "—",
        },
        {
            event:  "Conference Day 1",
            date:   "April 1, 2027",
            status: "Conference",
        },
        {
            event:  "Conference Day 2",
            date:   "April 2, 2027",
            status: "Conference",
        },
        {
            event:  "Conference Day 3",
            date:   "April 3, 2027",
            status: "Conference",
        },
    ];

    const renderStatus = (status: string) => {
        if (status === "Open") {
            return (
                <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                    Open
                </span>
            );
        }
        if (status === "Conference") {
            return <strong>{status}</strong>;
        }
        return <span style={{ color: 'var(--color-text-light)' }}>{status}</span>;
    };

    return (
        <section id="dates" className="section-gray py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <h2 className="section-title">Important Dates</h2>
                <span className="section-rule"></span>

                {/* AoE note */}
                <p className="text-sm mb-6" style={{ color: 'var(--color-text-mid)' }}>
                    All deadlines are in{" "}
                    <strong style={{ color: 'var(--color-text)' }}>Anywhere on Earth (AoE)</strong>{" "}
                    time zone. Dates are tentative and subject to revision.
                </p>

                {/* Dates Table */}
                <div className="overflow-x-auto mb-6">
                    <table className="conf-table">
                        <thead>
                            <tr>
                                <th>Event</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dates.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.event}</td>
                                    <td style={{ color: 'var(--color-primary)', fontWeight: 500 }}>
                                        {row.date}
                                    </td>
                                    <td>{renderStatus(row.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Note box */}
                <div
                    className="conf-card p-4 text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-mid)' }}
                >
                    For queries regarding dates, contact{" "}
                    <a
                        href="mailto:dhansdah.me@nitjsr.ac.in"
                        style={{ color: 'var(--color-primary)', fontWeight: 600 }}
                    >
                        dhansdah.me@nitjsr.ac.in
                    </a>
                </div>

            </div>
        </section>
    );
}

export default ImportantDates;
