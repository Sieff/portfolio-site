import * as React from "react"
import {
  CAROUSEL_DATA_BOTTOM,
  CAROUSEL_DATA_MIDDLE,
  CAROUSEL_DATA_TOP
} from "@/components/ui/anecdotes/anecdoteCarouselItems";
import {AnecdoteCaroussel} from "@/components/ui/anecdotes/anecdoteCaroussel";
import styles from './anecdoteCaroussel.module.scss';
import {cn} from "@/lib/utils";

function AnecdoteSection() {
  return (
    <div className="flex flex-col gap-3">
      <h3>Tech Stack</h3>
      <div>
        <div className={cn(styles.carousel, "bg-[#121212] h-3 w-(--width-content)")} />
        <AnecdoteCaroussel items={CAROUSEL_DATA_TOP} />
        <AnecdoteCaroussel items={CAROUSEL_DATA_MIDDLE} reverse={true} />
        <AnecdoteCaroussel items={CAROUSEL_DATA_BOTTOM} delay={true} />
        <div className={cn(styles.carousel, "bg-[#121212] h-3 w-(--width-content)")} />
      </div>
    </div>
  )
}

export { AnecdoteSection }
