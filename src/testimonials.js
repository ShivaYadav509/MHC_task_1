import React from "react";
import "./testimonials.css";

const Testimonials = ({ testimonials = [] }) => {
  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      {testimonials.length > 0 ? (
        testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.name}</p>
          </div>
        ))
      ) : (
        <p>No testimonials available.</p>
      )}
    </div>
  );
};

export default Testimonials;
