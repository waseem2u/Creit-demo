import Image from "next/image";
import CreitAi from "../components/CreitAl";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Trading from "../components/Trading";
import CreitMeet from "../components/CreitMeet";
import CreitRevenu from "../components/CreitRevenue";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <Trading />
      <CreitAi />
      <CreitMeet />
      <CreitRevenu />
      <Footer />
    </div>
  );
}
