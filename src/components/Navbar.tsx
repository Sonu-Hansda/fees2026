import { useState, useEffect } from 'react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Important Dates", href: "#dates" },
        { label: "Call for Papers", href: "#papers" },
        { label: "Schedule", href: "#schedule" },
        {
            label: "People",
            dropdown: [
                { label: "Speakers", href: "#speakers" },
                { label: "Committee", href: "#committee" },
            ]
        },
        {
            label: "Venue",
            dropdown: [
                { label: "How to Reach Us", href: "#how-to-reach" },
                { label: "Places Nearby", href: "#places-to-visit" },
            ]
        }
    ];

    const scrollTo = (href: string) => {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
        const el = document.querySelector(href);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <>
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
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden lg:flex items-center gap-5 xl:gap-8">
                        {navLinks.map((item, idx) => (
                            <li key={idx} className="relative group">
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        onClick={e => { e.preventDefault(); scrollTo(item.href as string); }}
                                        className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide py-5 transition-colors duration-150"
                                        style={{ color: 'var(--color-text-mid)' }}
                                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-mid)')}
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide cursor-pointer py-5 transition-colors duration-150" style={{ color: 'var(--color-text-mid)' }}>
                                        {item.label}
                                        <svg className="w-3 h-3 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        {/* Dropdown Menu */}
                                        <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                                            {item.dropdown?.map(dropItem => (
                                                <a
                                                    key={dropItem.href}
                                                    href={dropItem.href}
                                                    onClick={e => { e.preventDefault(); scrollTo(dropItem.href); }}
                                                    className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                                                >
                                                    {dropItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                        <li>
                            <a
                                href="#registration"
                                onClick={e => { e.preventDefault(); scrollTo('#registration'); }}
                                className="btn-primary text-xs"
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
                    className={`lg:hidden border-t overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen pb-4' : 'max-h-0'}`}
                    style={{ borderColor: 'var(--color-border)', background: 'var(--color-off-white)' }}
                >
                    <div className="px-4 py-2 space-y-1">
                        {navLinks.map((item, idx) => (
                            <div key={idx} className="border-b" style={{ borderColor: 'var(--color-border)' }}>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        onClick={e => { e.preventDefault(); scrollTo(item.href as string); }}
                                        className="block py-3 px-3 text-sm font-medium"
                                        style={{ color: 'var(--color-text)' }}
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <>
                                        <button 
                                            onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
                                            className="w-full flex items-center justify-between py-3 px-3 text-sm font-medium"
                                            style={{ color: 'var(--color-text)' }}
                                        >
                                            {item.label}
                                            <svg className={`w-4 h-4 transition-transform ${openMobileDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                        <div className={`pl-6 overflow-hidden transition-all duration-200 ${openMobileDropdown === item.label ? 'max-h-48' : 'max-h-0'}`}>
                                            {item.dropdown?.map(dropItem => (
                                                <a
                                                    key={dropItem.href}
                                                    href={dropItem.href}
                                                    onClick={e => { e.preventDefault(); scrollTo(dropItem.href); }}
                                                    className="block py-2 text-sm text-gray-500 hover:text-blue-600"
                                                >
                                                    {dropItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 px-2">
                            <a
                                href="#registration"
                                onClick={e => { e.preventDefault(); scrollTo('#registration'); }}
                                className="btn-primary block text-center py-2"
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
