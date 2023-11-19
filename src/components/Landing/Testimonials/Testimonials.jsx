import { useState } from "react";
import "./Testimonials.scss";
import avatarImage from "../../../assets/images/avatar (1).png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: avatarImage,
    },
    {
      name: "Jane Smith",
      role: "Designer",
      comment:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: avatarImage,
    },
    {
      name: "Bob Johnson",
      role: "Developer",
      comment:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: avatarImage,
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
        <div className="testimonials__item active">
          <div className="testimonials__container">
            <img src={currentTestimonial.icon} alt="icon" />
            <div className="testimonials__container--title">
              <h3>{currentTestimonial.name}</h3>
              <p>{currentTestimonial.role}</p>
            </div>
          </div>
          <p>{currentTestimonial.comment}</p>
        </div>
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
