import { useEffect, useRef } from "react";
import "../../styles/components.css";

const reviews = [
  {
    name: "Anmol Rathore",
    exam: "UPSC CSE 2023 – AIR 7",
    text:
      "I used to regularly follow the YouTube videos, prelims booster videos and especially editorial discussions. These helped me a lot in making important pointers.",
  },
  {
    name: "Raja Majhi",
    exam: "GATE 2024 – AIR 1 (ECE)",
    text:
      "From the very beginning, Physics Wallah stood out for its structured and comprehensive curriculum. Faculty support was excellent.",
  },
  {
    name: "Amit Kumar Mandal",
    exam: "IBPS Topper – Banking",
    text:
      "PW helped me in establishing strong basics. I was able to progress quickly and improve my speed and accuracy.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = section.querySelectorAll(".review-box");
    const title = section.querySelector(".reviews-heading");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            title.classList.add("show");

            cards.forEach((card, index) => {
              card.style.transitionDelay = `${index * 0.15}s`;
              card.classList.add("show");
            });
          } else {
            title.classList.remove("show");

            cards.forEach((card) => {
              card.style.transitionDelay = "0s";
              card.classList.remove("show");
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="reviews-section" ref={sectionRef}>
      <h2 className="reviews-heading fade-title">Student Reviews</h2>

      <div className="reviews-grid">
        {reviews.map((item, index) => (
          <div className="review-box fade-card" key={index}>
            <div className="quote-icon">“</div>
            <p className="review-text">{item.text}</p>

            <div className="review-footer">
              <strong>{item.name}</strong>
              <span>{item.exam}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
