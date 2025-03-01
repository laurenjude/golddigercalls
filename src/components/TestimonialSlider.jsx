import React, { useState } from "react";

const testimonials = [
  { id: 1, text: "Amazing service! Highly recommend.", author: "John Doe" },
  { id: 2, text: "The best team for digital solutions.", author: "Jane Smith" },
  { id: 3, text: "Professional and reliable!", author: "Michael Brown" },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-slider">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="testimonial">
        <p>"{testimonials[currentIndex].text}"</p>
        <h4>- {testimonials[currentIndex].author}</h4>
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default TestimonialSlider;
