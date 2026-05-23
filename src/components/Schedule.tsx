function Schedule() {
    const schedule = [
        {
            day: "Day 1", date: "April 1, 2027", theme: "Renewable Energy & Power Systems",
            events: [
                { time: "08:30 – 09:30", title: "Registration & Welcome", type: "admin" },
                { time: "09:30 – 10:30", title: "Inauguration & Opening Keynote: Future of Energy", type: "keynote" },
                { time: "10:30 – 12:30", title: "Technical Session: Solar PV & Wind Energy (Track 1)", type: "technical" },
                { time: "12:30 – 14:00", title: "Lunch & Industry Exhibition", type: "break" },
                { time: "14:00 – 15:30", title: "Workshop: Grid Integration of Renewables (Track 2)", type: "workshop" },
                { time: "15:30 – 17:00", title: "Panel Discussion: Energy Policy & Regulatory Framework (Track 12)", type: "panel" },
                { time: "17:00 – 18:30", title: "Networking Reception", type: "admin" },
            ]
        },
        {
            day: "Day 2", date: "April 2, 2027", theme: "Electrical & Mechanical Engineering",
            events: [
                { time: "09:00 – 10:30", title: "Keynote: Smart Grid Technologies (Track 2)", type: "keynote" },
                { time: "10:30 – 12:30", title: "Technical Session: Power Electronics & Drives (Track 5)", type: "technical" },
                { time: "12:30 – 14:00", title: "Lunch & Poster Presentations", type: "break" },
                { time: "14:00 – 15:30", title: "Workshop: Energy Storage Systems (Tracks 3, 4)", type: "workshop" },
                { time: "15:30 – 17:00", title: "Technical Session: Thermal Systems (Track 6)", type: "technical" },
                { time: "17:00 – 18:00", title: "Industry Case Studies: Electric Mobility (Track 7)", type: "panel" },
            ]
        },
        {
            day: "Day 3", date: "April 3, 2027", theme: "Sustainability & Future Technologies",
            events: [
                { time: "09:00 – 10:30", title: "Keynote: AI & Digitalization in Energy (Track 8)", type: "keynote" },
                { time: "10:30 – 12:30", title: "Technical Session: Advanced Materials (Track 9)", type: "technical" },
                { time: "12:30 – 14:00", title: "Lunch & Networking", type: "break" },
                { time: "14:00 – 15:30", title: "Workshop: Carbon Management & Smart Cities (Tracks 10, 11)", type: "workshop" },
                { time: "15:30 – 16:30", title: "Panel: Policy, Economics & Energy Transition (Track 12)", type: "panel" },
                { time: "16:30 – 17:30", title: "Best Paper Awards & Valedictory Session", type: "keynote" },
            ]
        },
    ];

    const typeLabel: Record<string, string> = {
        keynote:  'Keynote',
        technical: 'Technical Session',
        workshop: 'Workshop',
        panel:    'Panel Discussion',
        admin:    'General',
        break:    'Break',
    };

    const typeStyle: Record<string, string> = {
        keynote:   'var(--color-primary)',
        technical: 'var(--color-primary)',
        workshop:  'var(--color-primary)',
        panel:     'var(--color-primary)',
        admin:     '#718096',
        break:     '#718096',
    };

    return (
        <section id="schedule" className="py-12 md:py-16" style={{ background: 'var(--color-off-white)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="section-title">Conference Schedule</h2>
                <span className="section-rule"></span>

                <p className="text-sm mb-8 md:mb-10 max-w-2xl" style={{ color: 'var(--color-text-mid)' }}>
                    Three days of keynote addresses, technical sessions, workshops, and panel discussions.
                    Schedule is tentative and subject to revision.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
                    {schedule.map((day, di) => (
                        <div key={di} className="conf-card">
                            {/* Day header */}
                            <div className="px-4 py-3" style={{ background: 'var(--color-primary)', color: 'white' }}>
                                <div className="font-bold text-lg">{day.day}</div>
                                <div className="text-white/80 text-sm">{day.date}</div>
                                <div className="text-white/60 text-xs mt-1 uppercase tracking-wider">{day.theme}</div>
                            </div>
                            {/* Events */}
                            <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
                                {day.events.map((ev, ei) => (
                                    <div key={ei} className="px-4 py-3">
                                        <div className="flex items-start justify-between gap-2 mb-1">
                                            <span
                                                className="text-[10px] font-bold uppercase tracking-wider"
                                                style={{ color: typeStyle[ev.type] }}
                                            >
                                                {typeLabel[ev.type]}
                                            </span>
                                            <span
                                                className="text-[10px] font-medium whitespace-nowrap flex-shrink-0"
                                                style={{ color: 'var(--color-text-light)' }}
                                            >
                                                {ev.time}
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm leading-snug" style={{ color: 'var(--color-text)' }}>
                                            {ev.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <button className="btn-primary text-sm">
                        Download Schedule (PDF)
                    </button>
                    <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
                        Detailed session abstracts available in conference proceedings
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Schedule;
