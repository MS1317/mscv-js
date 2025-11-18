export default function ContactInformation() {
    const contactData = {
        location: {
            country: 'India',
        },
        communication: {
            email: 'carter.inbox@mail.com',
        },
        phone: {
            personal: '+91 (161) 123 45 678',
        }
    };

    return (
        <>  
            <div className="bg-dark-custom py-5">
                <div className="container">
                    <h2 className="text-white fw-bold mb-5 title-spacing">
                        Contact <span className="gradient-text">information</span>
                    </h2>

                    <div className="row g-4">
                        {/* Location Card */}
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-card position-relative overflow-hidden">
                                <div className="card-glow"></div>
                                
                                <div className="d-inline-block mb-4 icon-badge">
                                    <span className="fs-4">📍</span>
                                </div>

                                <div className="position-relative card-content">
                                    <div className="mb-4">
                                        <div className="text-uppercase mb-2 label-text">Country</div>
                                        <div className="text-white fw-semibold value-text">
                                            {contactData.location.country}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Communication Card */}
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-card position-relative overflow-hidden">
                                <div className="card-glow"></div>
                                
                                <div className="d-inline-block mb-4 icon-badge">
                                    <span className="fs-4">💬</span>
                                </div>

                                <div className="position-relative card-content">
                                    <div className="mb-4">
                                        <div className="text-uppercase mb-2 label-text">Email</div>
                                        <div className="text-white fw-semibold text-break value-text-small">
                                            {contactData.communication.email}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phone Numbers Card */}
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-card position-relative overflow-hidden">
                                <div className="card-glow"></div>
                                
                                <div className="d-inline-block mb-4 icon-badge">
                                    <span className="fs-4">📞</span>
                                </div>

                                <div className="position-relative card-content">
                                    <div>
                                        <div className="text-uppercase mb-2 label-text">Personal</div>
                                        <div className="text-white fw-semibold value-text-medium">
                                            {contactData.phone.personal}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}