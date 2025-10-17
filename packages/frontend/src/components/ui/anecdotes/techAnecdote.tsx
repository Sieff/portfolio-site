import * as React from "react"
import {Icon} from "@/components/ui/atom/icon";
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
    <div ref={ref} className={cn("rounded-md overflow-hidden")}>
      <div className={cn("flex rounded-l-md")}>
        <div className={cn("flex rounded-l-md", colorClass)}>
          <div className={cn(`p-4 rounded-l-md`)}>
            <Icon icon={icon}/>
          </div>
          <div className={cn("transition-[width, height] ease-in-out duration-1000 flex content-start items-start overflow-hidden", hovering ? "w-70 max-h-65" : "max-h-20 w-0")}>
            <div className={""}>
              <p className={cn("text-(--text-dark) p-4 w-70")}>{anecdote}</p>
            </div>
          </div>
        </div>
        <div className={cn(`bg-foreground flex rounded-r-md transition-all ease-in-out duration-1000 overflow-hidden`, hovering ? "max-w-0 min-w-0" : "min-w-32 max-w-48")}>
          <div className={"p-4 w-32 h-20 flex items-center"}>
            <p className={cn("text-primary-foreground")}>{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { TechAnecdote }
