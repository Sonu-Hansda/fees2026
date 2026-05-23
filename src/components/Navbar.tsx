import { useState, useEffect } from 'react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: "Home",         href: "#home" },
        { label: "About",        href: "#about" },
        { label: "Dates",        href: "#dates" },
        { label: "Call for Papers", href: "#papers" },
        { label: "Speakers",     href: "#speakers" },
        { label: "Committee",    href: "#committee" },
        { label: "Schedule",     href: "#schedule" },
        { label: "Registration", href: "#registration" },
    ];

    const scrollTo = (href: string) => {
        setIsMobileMenuOpen(false);
        const el = document.querySelector(href);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Announcement bar */}
            <div style={{ background: 'var(--color-primary)' }} className="text-white text-center py-2 px-4 text-xs font-medium tracking-wide">
                <span className="hidden md:inline">
                    FEES-2027 — International Conference on Frontiers in Energy Engineering and Sustainability &nbsp;|&nbsp; April 1–3, 2027 &nbsp;|&nbsp; NIT Jamshedpur, India &nbsp;|&nbsp; Hybrid Mode
                </span>
                <span className="md:hidden">FEES-2027 &nbsp;|&nbsp; April 1–3, 2027 &nbsp;|&nbsp; NIT Jamshedpur</span>
            </div>

            {/* Main nav */}
            <nav
                className={`sticky top-0 z-50 bg-white border-b transition-shadow duration-200 ${isScrolled ? 'shadow-md' : ''}`}
                style={{ borderColor: 'var(--color-border)' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
                    {/* Logo group */}
                    <a
                        href="#home"
                        onClick={e => { e.preventDefault(); scrollTo('#home'); }}
                        className="flex items-center gap-3"
                    >
                        <img src="/nitjsr.png" alt="NIT Jamshedpur" className="h-8 md:h-10 w-auto object-contain" />
                        <span className="hidden sm:block w-px h-7 bg-gray-200"></span>
                        <img src="/fees_logo.png" alt="FEES-2027" className="h-8 md:h-10 w-auto object-contain" />
                        {/* <span className="hidden sm:block w-px h-7 bg-gray-200"></span>
                        <img src="/ieee.png" alt="IEEE" className="h-6 md:h-8 w-auto object-contain" /> */}
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden lg:flex items-center gap-5 xl:gap-6">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                                    className="text-xs xl:text-sm font-medium uppercase tracking-wide transition-colors duration-150"
                                    style={{ color: 'var(--color-text-mid)' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-mid)')}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#registration"
                                onClick={e => { e.preventDefault(); scrollTo('#registration'); }}
                                className="btn-primary text-xs xl:text-sm"
                            >
                                Register
                            </a>
                        </li>
                    </ul>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2"
                        style={{ color: 'var(--color-primary)' }}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    className={`lg:hidden border-t overflow-hidden transition-all duration-200 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
                    style={{ borderColor: 'var(--color-border)', background: 'var(--color-off-white)' }}
                >
                    <div className="px-4 py-3 space-y-1">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                                className="block py-2.5 px-3 text-sm font-medium border-b"
                                style={{ color: 'var(--color-text)', borderColor: 'var(--color-border)' }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-3">
                            <a
                                href="#registration"
                                onClick={e => { e.preventDefault(); scrollTo('#registration'); }}
                                className="btn-primary block text-center"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
