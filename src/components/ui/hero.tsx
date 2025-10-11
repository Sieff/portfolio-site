import * as React from "react";
import styles from "./hero.module.scss";
import {cn} from "@/lib/utils";
import portrait from "../../../public/assets/portrait.jpg";
import Image from "next/image";
import {Icon} from "@/components/ui/icon";
import {IconName} from "@/util/icon-utils";

function Hero() {
  return (
    <div className={cn(styles.hero, "min-w-screen min-h-screen flex relative")}>
      <div className={cn("flex-[0.618] flex flex-col justify-center items-end", styles.greeting)}>
        <h3 className="mb-4">Hey <span className={styles.wave}>👋</span>, ich bin</h3>
        <h1>Steffen Schubert</h1>
        <h2>Software Entwickler</h2>
      </div>
      <div className="flex-[0.382] flex flex-col justify-center items-center gap-4">
        <Image className="rounded-[100%]" src={portrait} alt="Portrait von mir" width={512} height={512}/>
      </div>

      <div className="absolute right-0 bottom-0 flex items-center gap-4 p-4">
        <a className="transition-all hover:opacity-70" href={"https://github.com/Sieff"}>
          <Icon icon={IconName.GITHUB} size={32}/>
        </a>
        <a className="transition-all hover:opacity-70" href={"https://www.linkedin.com/in/steffen-schubert-82ba49266/"}>
          <Icon icon={IconName.LINKEDIN} size={32} />
        </a>
      </div>
    </div>
  )
}

export default Hero;