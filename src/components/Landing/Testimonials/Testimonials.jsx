import { useState } from "react";
import "./Testimonials.scss";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      comment:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: "",
    },
    {
      name: "Bob Johnson",
      role: "Developer",
      comment:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: "",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    };

    const currentTestimonial = testimonials[currentIndex];


  return (
    <section className="testimonials">
      <h2 className="testimonials__title">What Our Users Say</h2>
          <div className="testimonials__carousel">
              {testimonials.map((currentTestimonial, index) => (
                  <div
                      key={index}
                      className={
                          index === currentIndex
                                  ? "testimonials__item active "
                                  : "testimonials__item preview"
                      }
                  >
                   <img src={currentTestimonial.icon} alt="icon" />
          <h3>{currentTestimonial.name}</h3>
          <p>{currentTestimonial.role}</p>
          <p>{currentTestimonial.comment}</p>
                  </div>
              ))}
      </div>
      <div className="testimonials__buttons">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={
              index === currentIndex
                ? "testimonials__dot active"
                : "testimonials__dot"
            }
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};


export default Testimonials;
