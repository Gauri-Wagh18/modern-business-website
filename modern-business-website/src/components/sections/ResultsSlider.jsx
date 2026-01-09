import { useState } from "react";
import "../../styles/results.css";

const slides = [
  {
    title: "CTET JAN 2024",
    subtitle: "FINAL RESULT",
    description: "100+ Students Cleared CTET Jan 2024 And Still Counting...",
    students: [
      { name: "Suman Mishra", score: 89, roll: "234006823" },
      { name: "Amrit Raj", score: 85, roll: "11900882" },
    ],
    bg: "purple",
  },
  {
    title: "UPSC CSE 2023",
    subtitle: "TOP RESULTS",
    description: "Multiple students secured Top 100 ranks",
    students: [
      { name: "Anmol Rathore", score: "AIR 7", roll: "UPSC2023" },
      { name: "Raja Majhi", score: "AIR 1", roll: "GATE2024" },
    ],
    bg: "blue",
  },
];

export default function ResultsSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  const slide = slides[index];

  return (
    <section className="results-section">
      <h2 className="results-title">Academic Excellence : Results</h2>
      <p className="results-subtitle">
        Giving wings to a million dreams, a million more to go
      </p>

      <div className={`results-slider ${slide.bg}`}>
        {/* LEFT */}
        <div className="results-left">
          <h3>{slide.title}</h3>
          <span className="badge">{slide.subtitle}</span>
          <p className="congrats">⭐⭐⭐ Congratulations ⭐⭐⭐</p>
        </div>

        {/* RIGHT */}
        <div className="results-right">
          {slide.students.map((s, i) => (
            <div className="student-card" key={i}>
              <div className="score">{s.score}</div>
              <h4>{s.name}</h4>
              <span>Roll No: {s.roll}</span>
            </div>
          ))}
        </div>

        <p className="results-footer">{slide.description}</p>

        {/* Controls */}
        <button className="nav left" onClick={prevSlide}>‹</button>
        <button className="nav right" onClick={nextSlide}>›</button>
      </div>
    </section>
  );
}
