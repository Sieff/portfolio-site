import * as React from "react";
import styles from "./hero.module.scss";
import {cn} from "@/lib/utils";
import portrait from "../../../public/assets/portrait.jpg";
import ProxyImage from "@/components/ui/atom/proxyImage";

function Hero() {
  return (
    <div className={cn(styles.hero, "min-w-screen min-h-screen flex flex-col md:flex-row justify-center items-center relative gap-4 p-12")}>
      <div className={cn("flex-[61.8] flex flex-col justify-end md:justify-center items-center md:items-end", styles.greeting)}>
        <h3 className="text-right mb-4">Hey <span className={styles.wave}>👋</span>, ich bin</h3>
        <h1 className="text-center md:text-right">Steffen Schubert</h1>
        <h2 className="text-center md:text-right">Software Entwickler</h2>
      </div>
      <div className="flex-[38.2] flex justify-center items-center">
        <div className={"w-64 md:w-auto"}>
          <ProxyImage className={"rounded-[100%] overflow-hidden"} src={portrait} alt="Portrait von mir" width={512} height={512}/>
        </div>
      </div>
    </div>
  )
}

export default Hero;