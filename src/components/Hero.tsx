import { useState, useEffect } from 'react';

function Countdown() {
    const target = new Date('2027-04-01T09:00:00+05:30').getTime();
    const calc = () => {
        const d = target - Date.now();
        if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            days:    Math.floor(d / 86400000),
            hours:   Math.floor((d % 86400000) / 3600000),
            minutes: Math.floor((d % 3600000) / 60000),
            seconds: Math.floor((d % 60000) / 1000),
        };
    };
    const [t, setT] = useState(calc());
    useEffect(() => {
        const id = setInterval(() => setT(calc()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="flex gap-3 sm:gap-4 justify-center">
            {([['Days', t.days], ['Hours', t.hours], ['Min', t.minutes], ['Sec', t.seconds]] as [string, number][]).map(([label, val]) => (
                <div key={label} className="text-center">
                    <div
                        className="w-16 sm:w-20 md:w-24 py-3 sm:py-4"
                        style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}
                    >
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tabular-nums">
                            {String(val).padStart(2, '0')}
                        </div>
                    </div>
                    <div className="text-white/60 text-[10px] sm:text-xs mt-1 uppercase tracking-widest">{label}</div>
                </div>
            ))}
        </div>
    );
}

function Hero() {
    const scrollTo = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex flex-col">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    autoPlay loop muted playsInline
                    className="absolute w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
                >
                    <source src="https://videos.pexels.com/video-files/855428/855428-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0" style={{ background: 'rgba(27,54,93,0.82)' }}></div>
            </div>

            {/* Content */}
            <div className="relative flex-1 flex flex-col items-center justify-center text-white px-4 py-20 md:py-0 text-center">

                {/* Organizer logos */}
                <div className="flex items-center justify-center gap-5 sm:gap-8 mb-8 sm:mb-10">
                    <img src="/nitjsr.png" alt="NIT Jamshedpur" className="h-12 sm:h-14 md:h-16 w-auto object-contain bg-white rounded p-1" />
                    <div className="w-px h-10 bg-white/30"></div>
                    <img src="/fees_logo.png" alt="FEES-2027" className="h-14 sm:h-16 md:h-20 w-auto object-contain" />
                    {/* <div className="w-px h-10 bg-white/30"></div>
                    <img src="/ieee.png" alt="IEEE" className="h-8 sm:h-10 md:h-12 w-auto object-contain brightness-0 invert" /> */}
                </div>

                {/* Conference name */}
                <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
                    <p className="text-white/70 text-xs sm:text-sm uppercase tracking-widest mb-3 font-medium">
                        National Institute of Technology Jamshedpur presents
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3">
                        International Conference on<br />
                        <span className="text-white">Frontiers in Energy Engineering</span><br />
                        <span className="text-white">and Sustainability</span>
                    </h1>
                    <div className="text-xl sm:text-2xl font-bold text-white/80 mb-4">FEES-2027</div>
                    <div
                        className="inline-flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm sm:text-base font-medium px-4 py-2"
                        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                        <span>April 1–3, 2027</span>
                        <span className="text-white/40 hidden sm:inline">|</span>
                        <span>NIT Jamshedpur, India</span>
                        <span className="text-white/40 hidden sm:inline">|</span>
                        <span>Hybrid Mode</span>
                        {/* <span className="text-white/40 hidden sm:inline">|</span>
                        <span>IEEE Xplore Indexed</span> */}
                    </div>
                </div>

                {/* Countdown */}
                <div className="mb-8 sm:mb-10">
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Conference begins in</p>
                    <Countdown />
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6">
                    <a
                        href="#registration"
                        onClick={e => { e.preventDefault(); scrollTo('#registration'); }}
                        className="btn-primary text-sm sm:text-base px-8 py-3"
                    >
                        Register Now
                    </a>
                    <a
                        href="#papers"
                        onClick={e => { e.preventDefault(); scrollTo('#papers'); }}
                        className="btn-outline text-sm sm:text-base px-8 py-3"
                        style={{ color: 'white', borderColor: 'white' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                    >
                        Submit Paper
                    </a>
                </div>

                <p className="text-white/40 text-xs">
                    Accepted papers submitted for inclusion in IEEE Xplore Digital Library
                </p>
            </div>

            {/* Marquee */}
            <div className="relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="flex">
                    <div className="animate-marquee py-2.5 whitespace-nowrap text-white/70 text-xs sm:text-sm tracking-wide">
                        {[
                            'Track 1: Renewable Energy Technologies',
                            'Track 2: Smart Grids & Power Systems',
                            'Track 3: Energy Storage & Battery Technologies',
                            'Track 4: Hydrogen Energy & Fuel Cells',
                            'Track 5: Power Electronics & Drives',
                            'Track 6: Thermal & Mechanical Systems',
                            'Track 7: Electric Mobility & Transport',
                            'Track 8: AI & IoT for Energy Systems',
                            'Track 9: Advanced Materials & Manufacturing',
                            'Track 10: Carbon Management',
                            'Track 11: Smart Buildings & Cities',
                            'Track 12: Policy & Energy Transition',
                        ].map(t => (
                            <span key={t} className="mx-8">{t}</span>
                        ))}
                    </div>
                    <div className="animate-marquee2 absolute top-0 py-2.5 whitespace-nowrap text-white/70 text-xs sm:text-sm tracking-wide">
                        {[
                            'Track 1: Renewable Energy Technologies',
                            'Track 2: Smart Grids & Power Systems',
                            'Track 3: Energy Storage & Battery Technologies',
                            'Track 4: Hydrogen Energy & Fuel Cells',
                            'Track 5: Power Electronics & Drives',
                            'Track 6: Thermal & Mechanical Systems',
                            'Track 7: Electric Mobility & Transport',
                            'Track 8: AI & IoT for Energy Systems',
                            'Track 9: Advanced Materials & Manufacturing',
                            'Track 10: Carbon Management',
                            'Track 11: Smart Buildings & Cities',
                            'Track 12: Policy & Energy Transition',
                        ].map(t => (
                            <span key={t} className="mx-8">{t}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
