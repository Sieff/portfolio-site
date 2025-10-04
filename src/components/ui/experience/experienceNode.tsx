import * as React from "react";
import {JSX} from "react";
import {ExperienceNodeData} from "@/components/ui/experience/experience";
import {Icon} from "@/components/ui/icon";
import {IconName} from "@/util/icon-utils";

interface ExperienceNodeProps {
  data: ExperienceNodeData;
  isSideTrack: boolean;
  isFirst: boolean;
  isLast: boolean;
  mainFirst?: boolean;
}

function ExperienceNode({data, isSideTrack, isLast, isFirst, mainFirst}: ExperienceNodeProps): JSX.Element {
  return (
    <div className="flex gap-2 w-full justify-center">
      <svg className="w-18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {!mainFirst && (isSideTrack || !isFirst) && (
          <line x1={8} y1={-1000} x2={8} y2={12} strokeWidth={1} stroke={"var(--accent)"} strokeLinecap={"round"}></line>
        )}
        {!mainFirst && (isSideTrack || !isLast) && (
          <line x1={8} y1={12} x2={8} y2={1000} strokeWidth={1} stroke={"var(--accent)"} strokeLinecap={"round"}></line>
        )}
        {isSideTrack && !isFirst && (
          <line x1={16} y1={-1000} x2={16} y2={12} strokeWidth={1} stroke={"var(--accent)"} strokeLinecap={"round"}></line>
        )}
        {isSideTrack && (
          <line x1={16} y1={12} x2={16} y2={1000} strokeWidth={1} stroke={"var(--accent)"} strokeLinecap={"round"}></line>
        )}
        {data.sideTrack && data.sideTrack.length > 0 && (
          <>
            <line x1={8} y1={12} x2={16} y2={0} strokeWidth={1} stroke={"var(--accent)"} strokeLinecap={"round"}></line>
            <line x1={16} y1={-1000} x2={16} y2={0} strokeWidth={1} stroke={"var(--accent)"} strokeLinecap={"round"}></line>
          </>
        )}
        {isSideTrack ? (
          <circle cx="16" cy="12" r="3" fill={"var(--accent)"}/>
        ) : (
          <circle cx="8" cy="12" r="3" fill={"var(--accent)"}/>
        )}
      </svg>
      <div className="flex justify-start items-center gap-2 flex-8">
        <Icon icon={data.icon}></Icon>
        <div>
          <div className="text-primary-foreground">
            {data.label}
          </div>
          <div className="text-muted-foreground">
            {data.supporter}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceNode;