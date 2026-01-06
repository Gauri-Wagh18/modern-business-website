import { useEffect, useState } from "react";
import "../../styles/heroSlider.css";

const slides = [
  {
    id: 1,
    title: "Class 9th Project 45",
    subtitle: "45 Days Crash Course",
    description: "Live + Recorded Lectures | Doubt Support | Tests",
    price: "₹1,000/-",
    cta: "Join Now",
    image: "/src/assets/images/heroes/teacher1.jpg",
    bg: "linear-gradient(135deg, #5b1b6b, #7c2d9c)",
  },
  {
    id: 2,
    title: "Class 10th Foundation",
    subtitle: "Strong Basics for Boards",
    description: "Concept Clarity | Weekly Tests | Expert Faculty",
    price: "₹1,499/-",
    cta: "Enroll Today",
    image: "/src/assets/images/heroes/teacher2.jpg",
    bg: "linear-gradient(135deg, #1e3a8a, #2563eb)",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ background: slide.bg }}
        >
          <div className="slide-content">
            <div className="text">
              <span className="subtitle">{slide.subtitle}</span>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>

              <div className="cta-row">
                <span className="price">{slide.price}</span>
                <button className="cta-btn">{slide.cta}</button>
              </div>
            </div>

            <div className="image">
              <img src={slide.image} alt={slide.title} />
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === current ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}
