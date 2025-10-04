import * as React from "react";
import Experience, {ExperienceNodeData} from "@/components/ui/experience/experience";
import {IconName} from "@/util/icon-utils";

function ExperienceSection() {

  const experienceData: ExperienceNodeData[] = [
    {
      label: "Software Entwickler bei Folge3",
      supporter: "2020 - heute",
      icon: IconName.FOLGE3,
    },
    {
      label: "M.Sc. Informatik an der Universität Hamburg",
      supporter: "2022 - 2025",
      icon: IconName.UHH,
      sideTrack: [
        {
          label: "ChefTreff Hackathon Teilnehmer",
          supporter: "2024",
          icon: IconName.CHEFTREFF,
        },
        {
          label: "Master Projekt 'Speechalyze'",
          supporter: "2023",
          icon: IconName.SPEECHALYZE,
        },
      ],
    },
    {
      label: "B.Sc. Informatik an der Universität Hamburg",
      supporter: "2018 - 2022",
      icon: IconName.UHH,
      sideTrack: [
        {
          label: "Bachelor Projekt für die Bucerius Law School",
          supporter: "2021",
          icon: IconName.BUCERIUS,
        },
      ],
    },
    {
      label: "Herkunft O'Beck City 😎 (Osterholz-Scharmbeck)",
      supporter: "2000 - 2018",
      icon: IconName.OHZ,
    }
  ]

  return (
    <div className="w-full flex flex-col gap-3">
      <h3>Erfahrungen</h3>
      <Experience experience={experienceData} />
    </div>
  )
}

export default ExperienceSection;