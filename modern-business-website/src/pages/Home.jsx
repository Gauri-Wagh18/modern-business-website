import HeroSlider from "../components/sections/HeroSlider";
import Courses from "./Courses"; // ✅ this is OK only if Courses.jsx is in pages
import StudyResources from "../components/sections/StudyResources";
import Testimonials from "../components/sections/Testimonials";
import ResultsSlider from "../components/sections/ResultsSlider";




export default function Home() {
  return (
    <>
      <HeroSlider />
      <Courses />
      <StudyResources />
      <Testimonials />
      <ResultsSlider />
    </>
  );
}
