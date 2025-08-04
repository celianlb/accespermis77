"use client";

import { About } from "@/components/Home/About";
import { Certification } from "@/components/Home/Certification";
import { CodeRousseau } from "@/components/Home/CodeRousseau";
import { CPF } from "@/components/Home/CPF";
import { FAQ } from "@/components/Home/FAQ";
import { Formules } from "@/components/Home/Formules";
import { HeroSection } from "@/components/Home/HeroSection";
import { Localisation } from "@/components/Home/Localisation";
import { Review } from "@/components/Home/Review";
export default function Home() {
  return (
    <main className="flex justify-center flex-col">
      <HeroSection />
      <About />
      <Certification />
      <CPF />
      <Review />
      <CodeRousseau />
      <Formules />
      <Localisation />
      <FAQ />
    </main>
  );
}
