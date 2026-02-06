function Schedule() {
    const schedule = [
        {
            day: "Day 1",
            date: "February 15, 2026",
            theme: "Renewable Energy & Power Systems",
            events: [
                { time: "08:30 - 09:30", title: "Registration & Welcome Breakfast", type: "registration" },
                { time: "09:30 - 10:30", title: "Inauguration & Opening Keynote: Future of Energy", type: "keynote" },
                { time: "10:30 - 12:30", title: "Technical Session: Solar PV & Wind Energy Systems", type: "technical" },
                { time: "12:30 - 14:00", title: "Lunch & Industry Exhibition", type: "break" },
                { time: "14:00 - 15:30", title: "Workshop: Grid Integration of Renewables", type: "workshop" },
                { time: "15:30 - 17:00", title: "Panel: Energy Policy & Regulatory Framework", type: "panel" },
                { time: "17:00 - 18:30", title: "Networking Reception", type: "networking" }
            ]
        },
        {
            day: "Day 2",
            date: "February 16, 2026",
            theme: "Electrical & Mechanical Engineering",
            events: [
                { time: "09:00 - 10:30", title: "Keynote: Smart Grid Technologies", type: "keynote" },
                { time: "10:30 - 12:30", title: "Technical Session: Power Electronics & Drives", type: "technical" },
                { time: "12:30 - 14:00", title: "Lunch & Research Poster Presentations", type: "break" },
                { time: "14:00 - 15:30", title: "Workshop: Energy Storage Systems", type: "workshop" },
                { time: "15:30 - 17:00", title: "Technical Session: Thermal Systems & HVAC", type: "technical" },
                { time: "17:00 - 18:00", title: "Industry Case Studies", type: "industry" }
            ]
        },
        {
            day: "Day 3",
            date: "February 17, 2026",
            theme: "Sustainability & Future Technologies",
            events: [
                { time: "09:00 - 10:30", title: "Keynote: Sustainable Engineering Practices", type: "keynote" },
                { time: "10:30 - 12:30", title: "Technical Session: Green Manufacturing", type: "technical" },
                { time: "12:30 - 14:00", title: "Lunch & Networking", type: "break" },
                { time: "14:00 - 15:30", title: "Workshop: Energy Efficiency in Industries", type: "workshop" },
                { time: "15:30 - 16:30", title: "Panel: Career Opportunities in Energy Sector", type: "panel" },
                { time: "16:30 - 17:30", title: "Award Ceremony & Valedictory Session", type: "closing" }
            ]
        }
    ];

    const getEventColor = (type: string) => {
        switch (type) {
            case 'keynote': return 'bg-energy-blue/10 border-energy-blue';
            case 'technical': return 'bg-energy-green/10 border-energy-green';
            case 'workshop': return 'bg-energy-amber/10 border-energy-amber';
            case 'panel': return 'bg-purple-100 border-purple-300';
            case 'industry': return 'bg-indigo-100 border-indigo-300';
            case 'networking': return 'bg-cyan-100 border-cyan-300';
            case 'closing': return 'bg-gray-100 border-gray-300';
            default: return 'bg-gray-50 border-gray-200';
        }
    };

    const getEventTypeLabel = (type: string) => {
        switch (type) {
            case 'keynote': return 'Keynote Address';
            case 'technical': return 'Technical Session';
            case 'workshop': return 'Hands-on Workshop';
            case 'panel': return 'Panel Discussion';
            case 'industry': return 'Industry Session';
            case 'networking': return 'Networking';
            case 'closing': return 'Closing Session';
            case 'registration': return 'Registration';
            case 'break': return 'Break';
            default: return 'Conference Event';
        }
    };

    return (
        <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-energy-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl font-bold text-energy-gray mb-3 sm:mb-4">
                        Conference Schedule
                    </h2>
                    <div className="section-divider max-w-2xl mx-auto"></div>
                    <p className="text-energy-gray text-sm sm:text-base md:text-lg mt-3 sm:mt-4 md:mt-6 max-w-3xl mx-auto leading-relaxed px-2">
                        Three days of comprehensive technical sessions, workshops, and networking opportunities
                        focused on mechanical and electrical engineering in the energy sector
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    {schedule.map((daySchedule, dayIndex) => (
                        <div key={dayIndex} className="energy-card">
                            <div className="bg-energy-blue text-white p-3 sm:p-4 md:p-5 lg:p-6 border-b border-white/10">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{daySchedule.day}</h3>
                                <p className="text-energy-light/90 text-xs sm:text-sm md:text-base">{daySchedule.date}</p>
                                <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm bg-white/20 px-2 sm:px-2.5 md:px-3 py-1 rounded-full inline-block">
                                    {daySchedule.theme}
                                </div>
                            </div>
                            <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                                    {daySchedule.events.map((event, eventIndex) => (
                                        <div
                                            key={eventIndex}
                                            className={`p-3 md:p-4 border-l-4 rounded-r ${getEventColor(event.type)}`}
                                        >
                                            <div className="flex flex-col gap-2">
                                                <div className="flex-1">
                                                    <span className="inline-block px-2 sm:px-2.5 md:px-3 py-1 text-xs font-semibold rounded-full bg-white mb-1 sm:mb-1.5 md:mb-2">
                                                        {getEventTypeLabel(event.type)}
                                                    </span>
                                                    <h4 className="font-bold text-energy-gray text-xs sm:text-sm md:text-base lg:text-lg">{event.title}</h4>
                                                </div>
                                                <span className="text-xs sm:text-sm font-medium text-energy-gray bg-white px-2 sm:px-2.5 md:px-3 py-1 rounded-lg whitespace-nowrap self-start">
                                                    {event.time}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 energy-card p-4 sm:p-5 md:p-6 lg:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-energy-gray mb-3 sm:mb-4 md:mb-6">Event Type Guide</h3>
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                        <div className="flex items-center">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-energy-blue/20 border-2 border-energy-blue mr-1.5 sm:mr-2 md:mr-3 rounded"></div>
                            <span className="text-energy-gray font-medium text-xs sm:text-sm md:text-base">Keynote Addresses</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-energy-green/20 border-2 border-energy-green mr-2 md:mr-3 rounded"></div>
                            <span className="text-energy-gray font-medium text-sm md:text-base">Technical Sessions</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-energy-amber/20 border-2 border-energy-amber mr-2 md:mr-3 rounded"></div>
                            <span className="text-energy-gray font-medium text-sm md:text-base">Workshops</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-purple-100 border-2 border-purple-300 mr-2 md:mr-3 rounded"></div>
                            <span className="text-energy-gray font-medium text-sm md:text-base">Panel Discussions</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-indigo-100 border-2 border-indigo-300 mr-2 md:mr-3 rounded"></div>
                            <span className="text-energy-gray font-medium text-sm md:text-base">Industry Sessions</span>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
                    <button className="btn-energy px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg">
                        Download Complete Schedule (PDF)
                    </button>
                    <p className="text-energy-gray mt-3 sm:mt-4 md:mt-6 text-xs sm:text-sm">
                        Detailed session abstracts and speaker information available in conference proceedings
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Schedule
