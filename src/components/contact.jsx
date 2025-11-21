import { useState } from 'react';

export default function ContactForm() {
    const [focused, setFocused] = useState('');
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] =useState(null);
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true);
        setStatus(null);

        try{
            const res = await fetch("/api/send-email",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(form)
            });

            const data = await res.json();
            if(data.success){
                setStatus("Message sent successfully!");
                setForm({name:'',email:'',message:''}); // Clear the form
            }
            else{
                setStatus("Failed to send message. Please try again later.");
            }
        }
        catch (error) { console.error("Error sending message:", error); setStatus("An unexpected error occurred."); }
        finally { setLoading(false); }
    }

    return (
        <div className="d-flex align-items-center justify-content-center p-4" style={{
            background: 'linear-gradient(138deg, rgb(44 45 58) 0%, rgb(44 45 58) 50%, rgb(202 37 53) 316%)'
        }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 p-0">
                        {/* Header */}
                        <div className="text-center mb-4 animate-fade-in">
                            <h2 className=" fw-bold text-white mb-3">
                                Impressed <span style={{ color: '#dc3545' }}>?</span>
                            </h2>
                            <p className="" style={{ color: '#9ca3af' }}>
                                Let's discuss your next project or just say hello
                            </p>
                        </div>

                        {/* Form Container */}
                        <div className="position-relative">
                            {/* Animated background glow */}
                            <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4 blur-effect" style={{
                                background: 'linear-gradient(90deg, rgba(220, 53, 69, 0.2) 0%, rgba(153, 69, 255, 0.2) 100%)',
                                filter: 'blur(40px)',
                                zIndex: 0
                            }}></div>

                            <div className="position-relative rounded-4 p-4 p-md-5 shadow-lg" style={{
                                background: 'rgba(31, 41, 55, 0.5)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(75, 85, 99, 0.5)',
                                zIndex: 1
                            }}>
                                {/* Name Field */}
                                <div className="mb-4 form-group-hover">
                                    <label className="form-label d-flex align-items-center text-light mb-2">
                                        <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc3545" strokeWidth="2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        Name
                                    </label>
                                    <div className="position-relative">
                                        <input
                                            type="text"
                                            name="name"
                                            onChange={(e) =>setForm({...form,name:e.target.value})}
                                            value={form.name}   
                                            className={`form-control form-control-lg input-custom ${focused === 'name' ? 'input-focused' : ''}`}
                                            placeholder="Manpreet Singh"
                                            onFocus={() => setFocused('name')}
                                            onBlur={() => setFocused('')}
                                            style={{
                                                backgroundColor: 'rgba(17, 24, 39, 0.5)',
                                                color: '#fff',
                                                border: `2px solid ${focused === 'name' ? '#dc3545' : '#4b5563'}`,
                                                transition: 'all 0.3s ease',
                                                boxShadow: focused === 'name' ? '0 0 20px rgba(220, 53, 69, 0.2)' : 'none'
                                            }}
                                        />
                                        <div className="input-underline" style={{
                                            width: focused === 'name' ? '100%' : '0',
                                            background: 'linear-gradient(90deg, #dc3545 0%, #9945ff 100%)'
                                        }}></div>
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="mb-4 form-group-hover">
                                    <label className="form-label d-flex align-items-center text-light mb-2">
                                        <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc3545" strokeWidth="2">
                                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </svg>
                                        Email
                                    </label>
                                    <div className="position-relative">
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={(e) =>setForm({...form,email:e.target.value})}
                                            className={`form-control form-control-lg input-custom ${focused === 'email' ? 'input-focused' : ''}`}
                                            placeholder="your.email@example.com"
                                            onFocus={() => setFocused('email')}
                                            onBlur={() => setFocused('')}
                                            style={{
                                                backgroundColor: 'rgba(17, 24, 39, 0.5)',
                                                color: '#fff',
                                                border: `2px solid ${focused === 'email' ? '#dc3545' : '#4b5563'}`,
                                                transition: 'all 0.3s ease',
                                                boxShadow: focused === 'email' ? '0 0 20px rgba(220, 53, 69, 0.2)' : 'none'
                                            }}
                                        />
                                        <div className="input-underline" style={{
                                            width: focused === 'email' ? '100%' : '0',
                                            background: 'linear-gradient(90deg, #dc3545 0%, #9945ff 100%)'
                                        }}></div>
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="mb-4 form-group-hover">
                                    <label className="form-label d-flex align-items-center text-light mb-2">
                                        <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc3545" strokeWidth="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        Message
                                    </label>
                                    <div className="position-relative">
                                        <textarea
                                            name="message"
                                            rows="5"
                                            onChange={(e) =>setForm({...form,message:e.target.value})}
                                            value={form.message}
                                            className={`form-control form-control-lg input-custom ${focused === 'message' ? 'input-focused' : ''}`}
                                            placeholder="Tell me about your project..."
                                            onFocus={() => setFocused('message')}
                                            onBlur={() => setFocused('')}
                                            style={{
                                                backgroundColor: 'rgba(17, 24, 39, 0.5)',
                                                color: '#fff',
                                                border: `2px solid ${focused === 'message' ? '#dc3545' : '#4b5563'}`,
                                                transition: 'all 0.3s ease',
                                                resize: 'none',
                                                boxShadow: focused === 'message' ? '0 0 20px rgba(220, 53, 69, 0.2)' : 'none'
                                            }}
                                        ></textarea>
                                        <div className="input-underline" style={{
                                            width: focused === 'message' ? '100%' : '0',
                                            background: 'linear-gradient(90deg, #dc3545 0%, #9945ff 100%)'
                                        }}></div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" onClick={handleSubmit} disabled={loading} className="btn btn-lg w-100 d-flex align-items-center justify-content-center gap-3 position-relative overflow-hidden submit-btn">
                                    <div className="button-gradient position-absolute top-0 start-0 w-100 h-100"></div>
                                    <span className="position-relative d-flex align-items-center gap-3 send-text">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="send-icon">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                        Send Message
                                    </span>
                                    {loading && (
                                        <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
                                    )}
                                </button>
                                {status && (
                                    <div className={`mt-3 alert ${status.includes("successfully") ? "alert-success" : "alert-danger"}`} role="alert">
                                        {status}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Footer Text */}
                        <div className="text-center mt-4" style={{ color: '#6b7280' }}>
                            <p>or reach me at <span style={{ color: '#fff', fontWeight: '600' }}>Techi</span><span style={{ color: '#dc3545', fontWeight: '600' }}> Tuber</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}