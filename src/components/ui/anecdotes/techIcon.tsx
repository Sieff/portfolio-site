import * as React from "react"
import Typescript from '../../../../public/icons/typescript.svg';
import Postgres from '../../../../public/icons/postgres.svg';
import Python from '../../../../public/icons/python.svg';
import Angular from '../../../../public/icons/angular.svg';
import {IconName} from "@/util/icon-utils";


interface Props {
  icon: IconName;
  size?: number;
}

function TechIcon({icon, size = 48}: Props) {

  return (
    <>
      {getIconSrc(icon, size)}
    </>
  )
}

function getIconSrc(iconName: IconName, size: number) {
  switch (iconName) {
    case IconName.TYPESCRIPT:
      return <Typescript height={`${size}px`} width={`${size}px`} />;
    case IconName.POSTGRES:
      return <Postgres height={`${size}px`} width={`${size}px`} />;
    case IconName.ANGULAR:
      return <Angular height={`${size}px`} width={`${size}px`} />;
    case IconName.PYTHON:
      return <Python height={`${size}px`} width={`${size}px`} />;
  }
}

export { TechIcon }
