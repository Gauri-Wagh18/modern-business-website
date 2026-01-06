import HeroSlider from "../components/sections/HeroSlider";
import Courses from "./Courses";
import Testimonials from "../components/sections/Testimonials";
import StudyResources from "../components/sections/StudyResources";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Courses />
      <StudyResources />
      <Testimonials />
    </>
  );
}
