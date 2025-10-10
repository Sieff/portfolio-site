import * as React from "react"
import {TechAnecdote} from "@/components/ui/anecdotes/techAnecdote";
import styles from './anecdoteCaroussel.module.scss';
import {cn} from "@/lib/utils";
import {TechAnecdoteData} from "@/components/ui/anecdotes/anecdoteCarouselItems";


interface Props {
  items: TechAnecdoteData[],
  reverse?: boolean,
  delay?: boolean,
}

function AnecdoteCaroussel({items, reverse = false, delay = false}: Props) {
  const minNumberItems = 4;
  const repeats = Math.max(2, Math.ceil(2 * minNumberItems / items.length));

  return (
    <div className={cn(styles.carousel, "bg-[#121212] py-2 flex justify-start w-(--width-content) overflow-hidden")}>
      <div className={cn(styles.group, reverse && styles.reverse, delay && styles.delay, "flex gap-5")}>
        {[...Array(repeats)].map((_, i) => (
          items.map((item, j) => (
            <TechAnecdote key={`${i};${j}`} icon={item.iconName} color={item.color} title={item.title} anecdote={item.anecdote}/>
          ))
        ))}
      </div>
    </div>
  )
}

export { AnecdoteCaroussel }
