function Footer() {
  return (
    <footer className="bg-energy-gray text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="text-2xl sm:text-3xl font-bold">
                <span className="text-energy-amber">FEES</span>
                <span className="text-energy-light">-2027</span>
              </div>
            </div>
            <p className="text-energy-light/80 text-base sm:text-lg leading-relaxed">
              International Conference on Frontiers in Energy Engineering and Sustainability
            </p>
            <p className="text-energy-amber font-medium mt-4">
              April 1-3, 2027
            </p>
            <p className="text-energy-light/70 mt-2">
              National Institute of Technology, Jamshedpur (Jharkhand - 831014)
            </p>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 pb-2 border-b border-energy-blue/30">Conference Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className="text-energy-light/80 hover:text-energy-amber transition-colors flex items-center">
                <div className="w-2 h-2 bg-energy-green rounded-full mr-3"></div>
                Conference Schedule
              </a></li>
              <li><a href="#" className="text-energy-light/80 hover:text-energy-amber transition-colors flex items-center">
                <div className="w-2 h-2 bg-energy-green rounded-full mr-3"></div>
                Speaker Profiles
              </a></li>
              <li><a href="#" className="text-energy-light/80 hover:text-energy-amber transition-colors flex items-center">
                <div className="w-2 h-2 bg-energy-green rounded-full mr-3"></div>
                Registration & Fees
              </a></li>
              <li><a href="#" className="text-energy-light/80 hover:text-energy-amber transition-colors flex items-center">
                <div className="w-2 h-2 bg-energy-green rounded-full mr-3"></div>
                Call for Papers
              </a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 pb-2 border-b border-energy-green/30">Important Dates</h4>
            <ul className="space-y-3 sm:space-y-4 text-energy-light/80">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-energy-amber rounded-full mt-2 mr-3"></div>
                <div>
                  <div className="font-medium">Paper Submission</div>
                  <div className="text-sm text-energy-light/60">December 31, 2025</div>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-energy-amber rounded-full mt-2 mr-3"></div>
                <div>
                  <div className="font-medium">Acceptance Notification</div>
                  <div className="text-sm text-energy-light/60">January 15, 2026</div>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-energy-amber rounded-full mt-2 mr-3"></div>
                <div>
                  <div className="font-medium">Early Bird Registration</div>
                  <div className="text-sm text-energy-light/60">January 31, 2027</div>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-energy-amber rounded-full mt-2 mr-3"></div>
                <div>
                  <div className="font-medium">Conference Dates</div>
                  <div className="text-sm text-energy-light/60">April 1-3, 2027</div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 pb-2 border-b border-energy-amber/30">Contact Information</h4>
            <ul className="space-y-3 sm:space-y-4 text-energy-light/80">
              <li className="flex items-start">
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm">conference@nitjsr.ac.in</div>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-sm">+91 1234567890</div>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <div className="font-medium">Venue</div>
                  <div className="text-sm">DJLHC</div>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-sm">Adityapur, Jamshedpur, Jharkhand - 831014</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-energy-blue/30 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8">
          <p className="text-energy-light/70 text-center mb-4 md:mb-0 text-sm sm:text-base">© 2027 International Conference on Frontiers in Energy Engineering and Sustainability. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
