import { useState } from 'react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className="bg-gradient-to-r from-energy-blue to-energy-green text-white text-center p-2 sm:p-3 text-xs sm:text-sm font-medium">
                <div className="hidden md:block">
                    International Conference on Frontiers in Energy Engineering and Sustainability (FEES-2026) | National Institute of Technology Jamshedpur
                </div>
                <div className="md:hidden">
                    FEES-2026 | Feb 15-17, 2026
                </div>
            </div>
            <nav className="flex justify-between items-center text-white bg-energy-gray p-3 sm:p-4 md:p-6 sticky top-0 z-50">
                <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                    <span className="text-energy-amber">FEES</span>
                    <span className="text-energy-light">-2026</span>
                </div>

                <div className="hidden lg:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        <li className="hover:text-energy-amber cursor-pointer transition-colors font-medium py-2">Home</li>
                        <li className="hover:text-energy-amber cursor-pointer transition-colors font-medium py-2">About</li>
                        <li className="hover:text-energy-amber cursor-pointer transition-colors font-medium py-2">Speakers</li>
                        <li className="hover:text-energy-amber cursor-pointer transition-colors font-medium py-2">Schedule</li>
                        <li className="hover:text-energy-amber cursor-pointer transition-colors font-medium py-2">Registration</li>
                        <li className="hover:text-energy-amber cursor-pointer transition-colors font-medium py-2">Contact</li>
                    </ul>
                    <button className="btn-energy hidden lg:block">
                        Register Now
                    </button>
                </div>

                <div className="lg:hidden flex items-center space-x-2 sm:space-x-4">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-energy-light hover:text-energy-amber focus:outline-none transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            <div className={`lg:hidden bg-energy-gray/98 text-white transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="px-4 py-3 space-y-1">
                    <a href="#" className="block py-3 px-4 hover:bg-energy-blue/20 rounded-lg transition-colors font-medium">Home</a>
                    <a href="#" className="block py-3 px-4 hover:bg-energy-blue/20 rounded-lg transition-colors font-medium">About Conference</a>
                    <a href="#" className="block py-3 px-4 hover:bg-energy-blue/20 rounded-lg transition-colors font-medium">Speakers</a>
                    <a href="#" className="block py-3 px-4 hover:bg-energy-blue/20 rounded-lg transition-colors font-medium">Schedule</a>
                    <a href="#" className="block py-3 px-4 hover:bg-energy-blue/20 rounded-lg transition-colors font-medium">Registration</a>
                    <a href="#" className="block py-3 px-4 hover:bg-energy-blue/20 rounded-lg transition-colors font-medium">Contact Us</a>
                    <div className="pt-4 border-t border-energy-blue/30">
                        <button className="btn-energy w-full py-3">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
