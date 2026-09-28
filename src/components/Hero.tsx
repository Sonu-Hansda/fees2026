import { useState, useEffect } from 'react';

function Countdown() {
    const target = new Date('2027-08-05T09:00:00+05:30').getTime();
    const calc = () => {
        const d = target - Date.now();
        if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            days: Math.floor(d / 86400000),
            hours: Math.floor((d % 86400000) / 3600000),
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
                        className="w-16 sm:w-20 md:w-24 py-3 sm:py-4 rounded-lg shadow-sm"
                        style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.1)' }}
                    >
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 tabular-nums">
                            {String(val).padStart(2, '0')}
                        </div>
                    </div>
                    <div className="text-slate-500 font-semibold text-[10px] sm:text-xs mt-1 uppercase tracking-widest">{label}</div>
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
            <div className="absolute inset-0 overflow-hidden bg-slate-50">
                <img
                    src="/bg.png"
                    alt="Conference Background"
                    className="absolute w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative flex-1 flex flex-col items-center justify-center text-slate-900 px-4 py-20 md:py-0 text-center">

                {/* Organizer logos */}
                <div className="flex items-center justify-center gap-5 sm:gap-8 mb-8 sm:mb-10">
                    <img src="/nitjsr.png" alt="NIT Jamshedpur" className="h-12 sm:h-14 md:h-16 w-auto object-contain bg-white rounded p-1 shadow-sm" />
                    <div className="w-px h-10 bg-slate-300"></div>
                    <img src="/fees_logo.png" alt="FEES-2027" className="h-14 sm:h-16 md:h-20 w-auto object-contain" />
                    {/* <div className="w-px h-10 bg-white/30"></div>
                    <img src="/ieee.png" alt="IEEE" className="h-8 sm:h-10 md:h-12 w-auto object-contain brightness-0 invert" /> */}
                </div>

                {/* Conference name */}
                <div className="max-w-5xl mx-auto mb-8 sm:mb-12 px-2">
                    <p className="text-slate-600 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] mb-4 sm:mb-6 font-semibold">
                        National Institute of Technology Jamshedpur presents
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-tight md:leading-tight lg:leading-[1.1] mb-8">
                        <span className="block text-xl sm:text-2xl md:text-3xl font-medium text-slate-700 mb-2 sm:mb-3">
                            International Conference on
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600 drop-shadow-sm">
                            Frontiers in Energy Engineering
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600 drop-shadow-sm">
                            and Sustainability
                        </span>
                    </h1>

                    <div
                        className="inline-flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm sm:text-base font-medium sm:px-6 sm:py-3 sm:rounded-full sm:backdrop-blur-md sm:shadow-sm sm:bg-white/60 sm:border sm:border-slate-200"
                    >
                        <span className="text-slate-800">August 5–7, 2027</span>
                        <span className="text-slate-400 hidden sm:inline">•</span>
                        <span className="text-slate-800">NIT Jamshedpur, India</span>
                        <span className="text-slate-400 hidden sm:inline">•</span>
                        <span className="text-slate-800">Hybrid Mode</span>
                    </div>
                </div>

                {/* Countdown */}
                <div className="mb-8 sm:mb-10">
                    <p className="text-slate-500 font-semibold text-xs uppercase tracking-widest mb-3">Conference begins in</p>
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
                        className="btn-outline text-sm sm:text-base px-8 py-3 shadow-sm"
                        style={{ color: '#1e293b', borderColor: '#cbd5e1' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = '#94a3b8'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = '#cbd5e1'; }}
                    >
                        Submit Paper
                    </a>
                </div>

                <p className="text-slate-500 font-medium text-xs">
                    Accepted papers submitted for inclusion in IEEE Xplore Digital Library
                </p>
            </div>

            {/* Marquee */}
            {/* <div className="relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
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
            </div> */}
        </section>
    );
}

export default Hero;
