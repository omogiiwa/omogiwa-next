import AboutMotionLab from "./AboutMotionLab";
import "./about-test.css";

export const metadata = {
  title: "About Animation Test Lab",
  description: "Interactive animation concepts for the Omogbolahan Giwa About page.",
  robots: { index: false, follow: false },
};

export default function AboutTestPage() {
  return <AboutMotionLab />;
}
