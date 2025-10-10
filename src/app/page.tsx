'use client';
import {useEffect, useState} from "react";
import {AnecdoteSection} from "@/components/ui/anecdotes/anecdoteSection";
import Hero from "@/components/ui/hero";
import ExperienceSection from "@/components/ui/experience/experienceSection";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import ProjectSection from "@/components/ui/projects/projectSection";

export default function Home() {
  const [locked, setLocked] = useState(true);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0.9,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setLocked(true);
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
        }, 500);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [locked]);


  return (
    <main className={"snap-y h-screen overflow-y-scroll snap-mandatory min-w-screen flex flex-col items-center bg-primary"}>
      <div ref={ref} className={"snap-start h-screen"}>
        <Hero />
      </div>
      <div id="content" className="snap-start max-w-(--width-content) w-(--width-content) flex flex-col gap-5 justify-center items-center pt-10">
        <ExperienceSection />
        <AnecdoteSection />
        <ProjectSection />
      </div>
    </main>
  );
}
