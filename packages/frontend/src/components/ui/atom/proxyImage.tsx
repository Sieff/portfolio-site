import * as React from "react"
import {useState} from "react";
import {cn} from "@/lib/utils";
import styles from "./proxyImage.module.scss";
import Image, {StaticImageData} from "next/image";

interface ProxyImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

function ProxyImage({src, alt, className, width, height}: ProxyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative", className)}>
      {!loaded && <div className={cn("absolute inset-0", styles.shimmer)} />}
      <Image src={src} alt={alt} width={width} height={height} onLoadingComplete={() => setLoaded(true)} />
    </div>
  )
}

export default ProxyImage;