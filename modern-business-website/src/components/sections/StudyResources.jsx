import { useEffect, useRef } from "react";
import "../../styles/components.css";

export default function StudyResources() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = section.querySelectorAll(".study-card");
    const title = section.querySelector(".study-title");
    const subtitle = section.querySelector(".study-subtitle");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            title.classList.add("show");
            subtitle.classList.add("show");

            cards.forEach((card, index) => {
              card.style.transitionDelay = `${index * 0.15}s`;
              card.classList.add("show");
            });
          } else {
            title.classList.remove("show");
            subtitle.classList.remove("show");

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
    <section className="study-section" ref={sectionRef}>
      <h2 className="study-title fade-title">Study Resources</h2>
      <p className="study-subtitle fade-subtitle">
        A diverse array of learning materials to enhance your educational journey.
      </p>

      <div className="study-grid">
        <div className="study-card blue fade-card">
          <h3>Reference Books</h3>
          <p>
            Our experts have created thorough study materials that break down
            complicated concepts into easily understandable content.
          </p>
          <button>Explore</button>
        </div>

        <div className="study-card yellow fade-card">
          <div className="card-header">
            <h3>NCERT Solutions</h3>
            <span>→</span>
          </div>
          <p>
            Unlock academic excellence with Physics Wallah’s NCERT Solutions
            which provides you step-by-step solutions.
          </p>
        </div>

        <div className="study-card green fade-card">
          <h3>Notes</h3>
          <p>
            Use Physics Wallah’s detailed study materials that simplify complex
            ideas into easily understandable language.
          </p>
        </div>
      </div>
    </section>
  );
}
