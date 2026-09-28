function Footer() {
    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer style={{ background: 'var(--color-primary)', color: 'white' }}>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

                    {/* Brand */}
                    <div>
                        <div className="font-bold text-base mb-2">FEES-2027</div>
                        <p className="text-white/60 text-sm leading-relaxed mb-3">
                            International Conference on Frontiers in Energy Engineering and Sustainability
                        </p>
                        <p className="text-white/80 text-sm font-medium">August 5–7, 2027</p>
                        <p className="text-white/50 text-xs mt-1">
                            National Institute of Technology Jamshedpur<br />
                            Adityapur, Jamshedpur, Jharkhand – 831014
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <span className="text-[10px] px-2 py-1 border border-white/20 text-white/60">Hybrid Mode</span>
                            {/* <span className="text-[10px] px-2 py-1 border border-white/20 text-white/60">IEEE Xplore Indexed</span> */}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/80">Navigation</h4>
                        <ul className="space-y-2">
                            {[
                                { label: 'About Conference', href: '#about' },
                                { label: 'Important Dates', href: '#dates' },
                                { label: 'Call for Papers', href: '#papers' },
                                { label: 'Speakers', href: '#speakers' },
                                { label: 'Committee', href: '#committee' },
                                { label: 'Schedule', href: '#schedule' },
                                { label: 'Registration', href: '#registration' },
                            ].map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                                        className="text-white/50 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Key Dates */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/80">Key Dates</h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                ['Paper Submission Opening Date', 'October 20, 2026'],
                                ['Paper Submission Deadline', 'April 30, 2027'],
                                ['Acceptance intimation', 'June 15, 2027'],
                                ['Registration Deadline', 'July 20, 2027'],
                                ['Conference Dates', 'August 5–7, 2027'],
                            ].map(([k, v]) => (
                                <li key={k}>
                                    <div className="text-white/40 text-[10px] uppercase">{k}</div>
                                    <div className="text-white/70 text-xs">{v}</div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/80">Contact</h4>
                        <div className="space-y-2 text-sm">
                            <div>
                                <div className="text-white/40 text-[10px] uppercase">General Chair</div>
                                <div className="text-white/80 font-medium">Dr. Dulari Hansdah</div>
                                <div className="text-white/50 text-xs">Asst. Professor, Dept. of ME</div>
                            </div>
                            <div>
                                <div className="text-white/40 text-[10px] uppercase">Email</div>
                                <a href="mailto:dhansdah.me@nitjsr.ac.in" className="text-white/60 hover:text-white text-xs transition-colors">
                                    dhansdah.me@nitjsr.ac.in
                                </a>
                            </div>
                            <div>
                                <div className="text-white/40 text-[10px] uppercase">Phone</div>
                                <a href="tel:+919439844294" className="text-white/60 hover:text-white text-xs transition-colors">
                                    +91 9439844294
                                </a>
                            </div>
                            <div className="pt-2 flex flex-col gap-1.5">
                                <a href="https://www.nitjsr.ac.in/people/profile/ME105" target="_blank" rel="noopener noreferrer"
                                    className="text-white/50 hover:text-white text-xs transition-colors">
                                    Institute Profile &rarr;
                                </a>
                                <a href="https://scholar.google.co.in/citations?user=0Sf_mnwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"
                                    className="text-white/50 hover:text-white text-xs transition-colors">
                                    Google Scholar &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-white/30 text-xs"
                    style={{ borderColor: 'rgba(255,255,255,0.10)' }}>
                    <p>&copy; 2027 FEES-2027. All rights reserved.</p>
                    <p>
                        Organized by{' '}
                        <a href="https://www.nitjsr.ac.in" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                            NIT Jamshedpur
                        </a>
                        {/* {' | '} */}
                        {/* IEEE Kolkata Section (Technical Co-Sponsorship Pending) */}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
