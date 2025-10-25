'use client';
import {Suspense, useEffect, useState} from "react";
import {AnecdoteSection} from "@/components/ui/anecdotes/anecdoteSection";
import Hero from "@/components/ui/hero";
import ExperienceSection from "@/components/ui/experience/experienceSection";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import ProjectSection from "@/components/ui/projects/projectSection";
import Socials from "@/components/ui/socials";
import Chat from "@/components/ui/chat";

export default function Home() {
  const [locked, setLocked] = useState(true);
  const [heroVisible, setHerovisible] = useState(true);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setLocked(true);
      setHerovisible(true);
    } else {
      setHerovisible(false);
    }
  }, [entry?.isIntersecting]);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (locked && e.deltaY > 0) {
        e.preventDefault();
        const element = document.getElementById("content");
        element?.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          setLocked(false);
        }, 300);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [locked]);


  return (
    <main className={"snap-y h-screen overflow-y-scroll overflow-x-hidden snap-mandatory min-w-screen flex flex-col items-center bg-primary"}>
      <Socials heroVisible={heroVisible} />
      <Chat />
      <div ref={ref} className={"snap-start h-screen"}>
        <Hero />
      </div>
      <div id="content" className="snap-start w-full flex flex-col gap-4 justify-center items-center">
        <AnecdoteSection />
        <ExperienceSection />
        <Suspense fallback={<div></div>}>
          <ProjectSection />
        </Suspense>
        <div className={"p-4 mt-10 text-primary-foreground"}>© 2025</div>
      </div>
    </main>
  );
}
