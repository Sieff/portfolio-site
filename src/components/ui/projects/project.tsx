import * as React from "react";
import {Card} from "@/components/ui/card";
import Image, {StaticImageData} from "next/image";
import {useHover} from "@uidotdev/usehooks";
import {IframeHTMLAttributes, useCallback, useEffect, useRef, useState} from "react";
import {cn} from "@/lib/utils";
import styles from "./project.module.scss";


export interface ProjectProps {
  thumbnail?: StaticImageData;
  iframeUrl?: string;
  showcase: StaticImageData[];
  title: string;
  description: string;
}

function IframeProject({iframeUrl}: Partial<ProjectProps>) {

  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onLoad = () => {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc) return;

      // stop wheel/scroll events from bubbling to parent
      doc.addEventListener("wheel", (e) => e.stopPropagation(), { passive: false });
      doc.addEventListener("scroll", (e) => e.stopPropagation(), { passive: false });
    };

    iframe.addEventListener("load", onLoad);
    return () => iframe.removeEventListener("load", onLoad);
  }, [iframeUrl]);

  return (
    <iframe ref={iframeRef} className={cn("w-full aspect-[16/9] border-0", styles.iframe)}
            src={iframeUrl}
            style={{ border: "none" }}
    />
  )
}

function Project({thumbnail, showcase, title, description, iframeUrl}: ProjectProps) {
  const [ref, hover] = useHover()

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!hover) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % showcase.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      setIndex(0);
    };
  }, [hover, showcase.length]);

  return (
    <>
      <Card ref={ref} className={cn("bg-primary p-0 gap-0 mb-4", styles.project)}>
        <div className="rounded-md overflow-hidden">
          <div className="relative w-full">
            {thumbnail && (
              <>
                <Image src={thumbnail} alt={title} />
                {hover && showcase.map((item, idx) =>
                  <Image key={idx} src={item} alt={title} className={cn("absolute inset-0 transition-opacity duration-1000", idx === index ? "opacity-100 z-1 delay-300" : "opacity-0 z-0 delay-700")}/>
                )}
              </>
            )}

            {iframeUrl && (
              <IframeProject iframeUrl={iframeUrl} />
            )}

          </div>

          <div className='p-4 bg-primary'>
            <div className="text-primary-foreground font-bold">
              {title}
            </div>
            <div className="text-primary-foreground">
              {description}
            </div>
          </div>
        </div>
        <div className={styles.projectShadow} style={{
          background: thumbnail ? `url(${thumbnail?.src}) center/cover no-repeat`: "var(--primary)"
        }}>
        </div>
      </Card>

      <div className={styles.backdrop}></div>
    </>
  )
}

export default Project;