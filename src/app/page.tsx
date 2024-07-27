import Image from "next/image";
import CreitAi from "../components/CreitAl.jsx";
import Navbar from "../components/Navbar.jsx";
import HeroSection from '../components/HeroSection.jsx';
import  Trading from '../components/Trading.jsx';
import CreitMeet from '../components/CreitMeet.jsx';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Trading />
      <CreitAi />
      <CreitMeet />
    </div>

  );
}
