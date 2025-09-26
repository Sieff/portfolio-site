'use client';
import {Button} from "@/components/ui/button";
import {useCallback} from "react";
import {TechAnecdote} from "@/components/ui/techAnecdote";
import {IconName} from "@/util/icon-utils";

export default function Home() {
  const sayHello = useCallback(() => {
    window.alert("du hurensohn");
  }, [])

  return (
    <main className={"min-w-screen flex justify-center bg-primary"}>
      <div className="max-w-(--width-content) w-(--width-content) overflow-visible min-h-screen flex flex-col gap-1">
        <p className="text-primary-foreground">Moin</p>
        <Button onClick={sayHello} variant={"default"}>Drück mich nicht</Button>
        <div className={"w-full bg-black p-10 flex justify-center gap-5"}>
          <TechAnecdote icon={IconName.TYPESCRIPT} color={"#3178c6"} title={"TypeScript"} anecdote={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam."}/>
          <TechAnecdote icon={IconName.TYPESCRIPT} color={"#3178c6"} title={"TypeScript"} anecdote={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam."}/>
        </div>
      </div>
    </main>
  );
}
