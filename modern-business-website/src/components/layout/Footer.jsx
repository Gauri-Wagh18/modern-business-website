import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-col">
          <h3>ABC Tuition Institute</h3>
          <p>
            Empowering students with quality education, strong fundamentals,
            and expert guidance for academic success.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/results">Results</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div className="footer-col">
          <h4>Our Courses</h4>
          <ul>
            <li>Class 8–10 Foundation</li>
            <li>Class 11–12 Science</li>
            <li>IIT-JEE Preparation</li>
            <li>NEET Preparation</li>
            <li>Board Exam Crash Course</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>📍 Pune, Maharashtra</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@abctuition.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ABC Tuition Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
