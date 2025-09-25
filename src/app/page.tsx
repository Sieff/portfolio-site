'use client';
import {Button} from "@/components/ui/button";
import {useCallback} from "react";
import {TechAnecdote} from "@/components/ui/tech-anecdote";

export default function Home() {
  const sayHello = useCallback(() => {
    window.alert("du hurensohn");
  }, [])

  return (
    <main>
      <div className="bg-primary min-h-screen min-w-screen flex flex-col justify-center items-center gap-1">
        <p className="text-primary-foreground">Moin</p>
        <Button onClick={sayHello} variant={"secondary"}>Drück mich nicht</Button>
        <TechAnecdote />
      </div>
    </main>
  );
}
