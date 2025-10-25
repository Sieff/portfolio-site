import * as React from "react";
import {Icon} from "@/components/ui/atom/icon";
import {IconName} from "@/util/icon-utils";
import {cn} from "@/lib/utils";

interface Props {
  heroVisible: boolean;
}

interface Social {
  icon: IconName;
  href: string;
}

function Socials({heroVisible}: Props) {
  const socials: Social[] = [
    {
      icon: IconName.LINKEDIN,
      href: "https://www.linkedin.com/in/steffen-schubert-82ba49266/"
    },
    {
      icon: IconName.INSTAGRAM,
      href: "https://www.instagram.com/steff4d/"
    },
    {
      icon: IconName.EMAIL,
      href: "mailto:steffen4d@gmail.com"
    },
    {
      icon: IconName.GITHUB,
      href: "https://github.com/Sieff/"
    },
  ]

  return (
    <div className={cn("fixed z-99 transition-all duration-500 m-4 h-12 w-12", heroVisible ? "top-0 right-0" : "top-[40%] right-0")}>
      {socials.map((social: Social, idx) => (
        <div className={"absolute transition-all duration-500"}
             key={idx}
             style={heroVisible ? {
               top: 0,
               right: `${idx}00%`
             } : {
               top: `${socials.length - idx - 1}00%`,
               right: 0
             }}>
          <a className={cn("hover:opacity-70")}
             href={social.href}
             target={"_blank"}>
            <Icon icon={social.icon} size={32} />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Socials