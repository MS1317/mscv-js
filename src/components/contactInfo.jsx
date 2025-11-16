import React from 'react';

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

            <style>{`
                /* Background */
                .bg-dark-custom {
                    background-color: #1a1d29;
                    box-shadow: inset 0px 0px 5px 6px #1111177a;
                }

                /* Title */
                .title-spacing {
                    letter-spacing: -0.5px;
                }

                .gradient-text {
                    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                /* Contact Card */
                .contact-card {
                    background: linear-gradient(145deg, #2a2d3a 0%, #23262f 100%);
                    border-radius: 20px;
                    padding: 50px 35px;
                    border: 1px solid rgba(239, 68, 68, 0.1);
                    transition: all 0.4s ease;
                    height: 100%;
                }

                .contact-card:hover {
                    transform: translateY(-10px);
                    border-color: rgba(239, 68, 68, 0.3);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(239, 68, 68, 0.1);
                }

                /* Card Glow Effect */
                .card-glow {
                    position: absolute;
                    top: -50px;
                    right: -50px;
                    width: 150px;
                    height: 150px;
                    background: radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%);
                    border-radius: 50%;
                }

                /* Icon Badge */
                .icon-badge {
                    padding: 12px 20px;
                    background: rgba(239, 68, 68, 0.1);
                    border-radius: 10px;
                }

                /* Card Content */
                .card-content {
                    z-index: 1;
                }

                /* Label Text */
                .label-text {
                    color: #6b7280;
                    font-size: 0.85rem;
                    letter-spacing: 1px;
                }

                /* Value Text Sizes */
                .value-text {
                    font-size: 1.3rem;
                }

                .value-text-small {
                    font-size: 1.1rem;
                }

                .value-text-medium {
                    font-size: 1.15rem;
                }
            `}</style>
        </>
    );
}