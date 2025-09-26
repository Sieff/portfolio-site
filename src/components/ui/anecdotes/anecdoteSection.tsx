import * as React from "react"
import {CAROUSEL_DATA} from "@/components/ui/anecdotes/anecdoteCarouselItems";
import {AnecdoteCaroussel} from "@/components/ui/anecdotes/anecdoteCaroussel";
import styles from './anecdoteCaroussel.module.scss';
import {cn} from "@/lib/utils";

function AnecdoteSection() {
  return (
    <div>
      <div className={cn(styles.carousel, "bg-[#121212] h-3 w-(--width-content)")} />
      <AnecdoteCaroussel items={CAROUSEL_DATA} />
      <AnecdoteCaroussel items={CAROUSEL_DATA} reverse={true} />
      <AnecdoteCaroussel items={CAROUSEL_DATA} delay={true} />
      <div className={cn(styles.carousel, "bg-[#121212] h-3 w-(--width-content)")} />
    </div>
  )
}

export { AnecdoteSection }
