'use client';
import {Button} from "@/components/ui/button";
import {useCallback} from "react";
import {AnecdoteSection} from "@/components/ui/anecdotes/anecdoteSection";
import Hero from "@/components/ui/hero";

export default function Home() {
  const sayHello = useCallback(() => {
    window.alert("du hurensohn");
  }, []);

  return (
    <main className={"snap-y h-screen overflow-y-scroll snap-mandatory min-w-screen flex flex-col items-center bg-primary"}>
      <div className={"snap-start h-screen"}>
        <Hero />
      </div>
      <div className="snap-start max-w-(--width-content) w-(--width-content) overflow-visible min-h-screen flex flex-col gap-1 items-center">
        <p className="text-primary-foreground">Moin</p>
        <Button onClick={sayHello} variant={"secondary"}>Drück mich nicht</Button>
        <AnecdoteSection />
      </div>
    </main>
  );
}
