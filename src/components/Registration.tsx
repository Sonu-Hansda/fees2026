function Registration() {
    const pricingTiers = [
        {
            name: "Student",
            price: "$99",
            period: "Early Bird",
            features: [
                "Full Conference Access",
                "Workshop Participation (1)",
                "Conference Kit",
                "Lunch & Coffee Breaks",
                "Digital Proceedings",
                "Certificate of Participation"
            ],
            highlighted: false
        },
        {
            name: "Academic",
            price: "$199",
            period: "Early Bird",
            features: [
                "Full Conference Access",
                "Workshop Participation (2)",
                "Conference Kit",
                "Lunch & Coffee Breaks",
                "Printed Proceedings",
                "Certificate of Participation",
                "Networking Dinner"
            ],
            highlighted: true
        },
        {
            name: "Industry",
            price: "$299",
            period: "Early Bird",
            features: [
                "Full Conference Access",
                "All Workshops",
                "Premium Conference Kit",
                "Lunch & Coffee Breaks",
                "Printed Proceedings",
                "Certificate of Participation",
                "Networking Dinner",
                "Exhibition Booth Access"
            ],
            highlighted: false
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Registration</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Secure your spot at the premier technology conference of the year
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {pricingTiers.map((tier, index) => (
                        <div 
                            key={index} 
                            className={`rounded-lg overflow-hidden border-2 ${tier.highlighted ? 'border-blue-500 shadow-xl transform scale-105' : 'border-gray-200'}`}
                        >
                            {tier.highlighted && (
                                <div className="bg-blue-500 text-white text-center py-2 font-semibold">
                                    Most Popular
                                </div>
                            )}
                            <div className="bg-white p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                                    <span className="text-gray-600 ml-2">{tier.period}</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg font-semibold ${tier.highlighted ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Registration Dates</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center p-4 border border-gray-200 rounded-lg">
                            <div className="text-sm text-gray-600 mb-1">Early Bird Registration</div>
                            <div className="text-lg font-bold text-gray-900">Until Jan 31, 2026</div>
                        </div>
                        <div className="text-center p-4 border border-gray-200 rounded-lg">
                            <div className="text-sm text-gray-600 mb-1">Regular Registration</div>
                            <div className="text-lg font-bold text-gray-900">Feb 1 - Feb 14, 2026</div>
                        </div>
                        <div className="text-center p-4 border border-gray-200 rounded-lg">
                            <div className="text-sm text-gray-600 mb-1">On-site Registration</div>
                            <div className="text-lg font-bold text-gray-900">Feb 15-17, 2026</div>
                        </div>
                        <div className="text-center p-4 border border-gray-200 rounded-lg">
                            <div className="text-sm text-gray-600 mb-1">Paper Submission Deadline</div>
                            <div className="text-lg font-bold text-gray-900">Dec 31, 2025</div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Registration?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-700 mb-4">
                                For any questions regarding registration, payment, or special requirements, 
                                please contact our registration team.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span className="text-gray-700">registration@icet2026.edu</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span className="text-gray-700">+91 1234567890</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Payment Methods Accepted</h4>
                            <div className="flex space-x-4">
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <div className="text-gray-700 font-semibold">Credit/Debit Card</div>
                                </div>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <div className="text-gray-700 font-semibold">Bank Transfer</div>
                                </div>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <div className="text-gray-700 font-semibold">UPI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Registration