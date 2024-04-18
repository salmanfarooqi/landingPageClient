import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
    </div>
  );
}
