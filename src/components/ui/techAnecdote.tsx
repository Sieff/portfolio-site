import * as React from "react"
import {TechIcon} from "@/components/ui/techIcon";
import {getIconTailwindClass, IconName} from "@/util/icon-utils";
import {cn} from "@/lib/utils";
import { useHover } from "@uidotdev/usehooks";

interface Props {
  icon: IconName;
  color: string;
  title: string;
  anecdote: string;
}

function TechAnecdote({icon, title, anecdote}: Props) {
  const [ref, hovering] = useHover();
  const colorClass = getIconTailwindClass(icon);

  return (
    <div ref={ref} className={cn("flex shadow-xs rounded-md overflow-hidden")}>
      <div className={cn(`basis-3 grow-0 p-4`, colorClass)}>
        <TechIcon icon={icon}/>
      </div>
      <div className={cn("transition-[width, height] duration-1000 flex content-start items-start overflow-hidden", colorClass, hovering ? "w-48 max-h-50" : "max-h-20 w-0")}>
        <div className={""}>
          <p className={cn("text-primary p-4 w-48")}>{anecdote}</p>
        </div>
      </div>
      <div className={cn(`bg-primary flex transition-all duration-1000 overflow-hidden`, hovering ? "max-w-0 min-w-0" : "min-w-32 max-w-48")}>
        <div className={"p-4 w-32"}>
          <p className={cn("text-primary-foreground")}>{title}</p>
        </div>
      </div>
    </div>
  )
}

export { TechAnecdote }
