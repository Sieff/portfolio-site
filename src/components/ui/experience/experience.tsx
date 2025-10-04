import * as React from "react";
import {JSX} from "react";
import ExperienceNode from "@/components/ui/experience/experienceNode";
import {IconName} from "@/util/icon-utils";

export interface ExperienceNodeData {
  label: string;
  supporter: string;
  icon: IconName;
  sideTrack?: Omit<ExperienceNodeData, "sideTrack">[];
}

interface ExperienceProps {
  experience: ExperienceNodeData[];
}

function Experience({experience}: ExperienceProps): JSX.Element {
  return (
    <div className="w-full">
      {experience.map((node: ExperienceNodeData, i) => (
        <div key={`${i}_mainTrack`} className="w-full">
          {node.sideTrack?.map((node, j, sideTrack) => (
            <ExperienceNode key={`${j}_sideTrack`} data={node} isFirst={j === 0}
                            isLast={j === sideTrack.length - 1} isSideTrack={true} mainFirst={i === 0}/>
          ))}
          <ExperienceNode data={node} isFirst={i === 0}
                          isLast={i === experience.length - 1} isSideTrack={false}/>
        </div>
      ))}
    </div>
  )
}

export default Experience;