import React from 'react';

// Define the types for the component props
interface VenueProps {
    universityName?: string;
    addressLines?: string[];
    mapEmbedUrl?: string;
    nearbyPlacesId?: string;
}

const VenueSection: React.FC<VenueProps> = ({
    universityName = "National Institute of Technology Jamshedpur",
    addressLines = [
        "Adityapur Industrial Area",
        "Jamshedpur, Jharkhand 831014",
        "India"
    ],
    mapEmbedUrl ="https://maps.google.com/maps?q=National+Institute+of+Technology+Jamshedpur,+Adityapur,+Jharkhand&t=&z=15&ie=UTF8&iwloc=&output=embed",
    nearbyPlacesId = "#places-to-visit"
}) => {

    // Helper function for smooth scrolling to match your navbar logic
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full py-12 px-4 md:px-8 max-w-6xl mx-auto flex flex-col items-center">
            
            {/* Text Details Section */}
            <div className="text-center mb-8 flex flex-col items-center">
                <h2 
                    className="text-2xl md:text-3xl font-bold mb-3"
                    style={{ color: 'var(--color-text)' }}
                >
                    {universityName}
                </h2>
                
                <p 
                    className="text-base md:text-lg leading-relaxed text-center"
                    style={{ color: 'var(--color-text-mid)' }}
                >
                    {addressLines.map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            {index !== addressLines.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            </div>

            {/* Embedded Google Map Section */}
            <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden rounded-lg shadow-md border border-gray-100 bg-gray-50">
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Map for ${universityName}`}
                    className="absolute inset-0"
                />
            </div>

            {/* Nearby Attractions Link */}
            <div 
                className="text-center mt-8 text-base md:text-lg font-medium"
                style={{ color: 'var(--color-text)' }}
            >
                <a 
                    href={nearbyPlacesId} 
                    onClick={(e) => handleScroll(e, nearbyPlacesId)}
                    className="transition-colors duration-200 underline underline-offset-4"
                    style={{ color: 'var(--color-primary)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                >
                    click here
                </a>{' '}
                for nearby tourist attractions
            </div>
            
        </section>
    );
};

export default VenueSection;