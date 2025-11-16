import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: "https://i.pravatar.cc/150?img=1",
      text: "Working with this team was an absolute pleasure. They delivered our project on time and exceeded all expectations. Their attention to detail and technical expertise is unmatched.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager, Digital Solutions",
      image: "https://i.pravatar.cc/150?img=13",
      text: "The level of professionalism and creativity brought to our project was outstanding. They understood our vision and transformed it into a beautiful, functional reality.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, Creative Studio",
      image: "https://i.pravatar.cc/150?img=5",
      text: "Exceptional work! The communication throughout the project was clear and consistent. I highly recommend their services to anyone looking for top-tier development work.",
      rating: 5
    },
    {
      id: 4,
      name: "David Kumar",
      role: "CTO, InnovateTech",
      image: "https://i.pravatar.cc/150?img=12",
      text: "Amazing experience from start to finish. The code quality is excellent and the final product performs flawlessly. Will definitely work together again on future projects.",
      rating: 5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
  };

  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="testimonial-title">What Clients Say</h3>
          <p className="testimonial-subtitle">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-left">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="testimonial-image"
                      />
                      
                      <div className="testimonial-rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="star">★</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="testimonial-right">
                      <p className="testimonial-text">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="testimonial-author">
                        <h4 className="testimonial-name">
                          {testimonial.name}
                        </h4>
                        
                        <p className="testimonial-role">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}