import "../styles/Courses.css";



const courses = [
  {
    title: "NEET",
    tags: ["Class 11", "Class 12", "Dropper"],
    bg: "pink",
    icon: "🧬",
  },
  {
    title: "IIT JEE",
    tags: ["Class 11", "Class 12", "Dropper"],
    bg: "yellow",
    icon: "⚛️",
  },
  {
    title: "Pre Foundation",
    tags: [],
    bg: "cream",
    icon: "🎒",
  },
  {
    title: "School Boards",
    tags: ["CBSE", "ICSE", "State Board"],
    bg: "lavender",
    icon: "📘",
  },
  {
    title: "UPSC",
    tags: [],
    bg: "blue",
    icon: "👥",
  },
  {
    title: "Govt Job Exams",
    tags: ["SSC", "Banking", "Judiciary"],
    bg: "gray",
    icon: "🏛️",
  },
];

export default function Courses() {
  return (
    <section className="courses-section">
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className={`course-card ${course.bg}`}>
            <div className="card-content">
              <h3>{course.title}</h3>

              <div className="tags">
                {course.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <button className="explore-btn">
                Explore Category →
              </button>
            </div>

            <div className="card-icon">{course.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
