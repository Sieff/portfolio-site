import * as React from "react";
import styles from "./hero.module.scss";
import {cn} from "@/lib/utils";
import portrait from "../../../public/assets/portrait.jpg";
import Image from "next/image";

function Hero() {
  return (
    <div className={cn(styles.hero, "min-w-screen min-h-screen flex")}>
      <div className="flex-[0.618] flex flex-col justify-center items-end">
        <h3 className="mb-4">Hey <span className={styles.wave}>👋</span>, ich bin</h3>
        <h1>Steffen Schubert</h1>
        <h2>Software Entwickler</h2>
      </div>
      <div className="flex-[0.382] flex justify-center items-center">
        <Image className="rounded-[100%]" src={portrait} alt="Portrait von mir" width={512} height={512}/>
      </div>
    </div>
  )
}

export default Hero;