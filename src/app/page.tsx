'use client';
import {Button} from "@/components/ui/button";
import {useCallback} from "react";
import {AnecdoteCaroussel} from "@/components/ui/anecdotes/anecdoteCaroussel";
import {CAROUSEL_DATA} from "@/components/ui/anecdotes/anecdoteCarouselItems";

export default function Home() {
  const sayHello = useCallback(() => {
    window.alert("du hurensohn");
  }, []);

  return (
    <main className={"min-w-screen flex justify-center bg-primary"}>
      <div className="max-w-(--width-content) w-(--width-content) overflow-visible min-h-screen flex flex-col gap-1 items-center">
        <p className="text-primary-foreground">Moin</p>
        <Button onClick={sayHello} variant={"default"}>Drück mich nicht</Button>
        <AnecdoteCaroussel items={CAROUSEL_DATA} />
      </div>
    </main>
  );
}
