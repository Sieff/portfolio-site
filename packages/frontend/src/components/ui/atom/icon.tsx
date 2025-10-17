import * as React from "react"
import Typescript from '../../../../public/icons/typescript.svg';
import Postgres from '../../../../public/icons/postgres.svg';
import Python from '../../../../public/icons/python.svg';
import Angular from '../../../../public/icons/angular.svg';
import Uhh from '../../../../public/icons/uhh.svg';
import Bucerius from '../../../../public/icons/bucerius.jpg';
import Folge3 from '../../../../public/icons/folge3.png';
import ChefTreff from '../../../../public/icons/cheftreff.png';
import Ohz from '../../../../public/icons/ohz.png';
import Speechalyze from '../../../../public/icons/speechalyze.png';
import Nest from '../../../../public/icons/nest.svg';
import ReactLogo from '../../../../public/icons/react.svg';
import SpringBoot from '../../../../public/icons/spring-boot.svg';
import Unity from '../../../../public/icons/unity.svg';
import Java from '../../../../public/icons/java.svg';
import Terraform from '../../../../public/icons/terraform.svg';
import Kotlin from '../../../../public/icons/kotlin.svg';
import CSharp from '../../../../public/icons/c#.svg';
import Racket from '../../../../public/icons/racket.svg';
import Dbt from '../../../../public/icons/dbt.svg';
import Sql from '../../../../public/icons/sql.svg';
import Docker from '../../../../public/icons/docker.svg';
import GitHub from '../../../../public/icons/github-mark.svg';
import LinkedIn from '../../../../public/icons/linkedin.svg';
import SQLite from '../../../../public/icons/sqlite.svg';
import Instagram from '../../../../public/icons/instagram.svg';
import Email from '../../../../public/icons/email.svg';
import {IconName} from "@/util/icon-utils";
import Image from "next/image";


interface Props {
  icon: IconName;
  size?: number;
}

function Icon({icon, size = 48}: Props) {

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
    case IconName.BUCERIUS:
      return <Image src={Bucerius} height={size} width={size} alt={'Bucerius Law School'} className="rounded-sm" />;
    case IconName.UHH:
      return <Uhh height={`${size}px`} width={`${size}px`} className="rounded-sm" />;
    case IconName.FOLGE3:
      return <Image src={Folge3} height={size} width={size} alt={'Folge3'} className="rounded-sm" />;
    case IconName.CHEFTREFF:
      return <Image src={ChefTreff} height={size} width={size} alt={'ChefTreff'} className="rounded-sm" />;
    case IconName.OHZ:
      return <Image src={Ohz} height={size} width={size} alt={'Osterholz-Scharmbeck'} className="rounded-sm" />;
    case IconName.SPEECHALYZE:
      return <Image src={Speechalyze} height={size} width={size} alt={'Speechalyze'} className="rounded-sm" />;
    case IconName.NEST:
      return <Nest height={`${size}px`} width={`${size}px`} />;
    case IconName.REACT:
      return <ReactLogo height={`${size}px`} width={`${size}px`} />;
    case IconName.SPRING_BOOT:
      return <SpringBoot height={`${size}px`} width={`${size}px`} />;
    case IconName.UNITY:
      return <Unity height={`${size}px`} width={`${size}px`} />;
    case IconName.JAVA:
      return <Java height={`${size}px`} width={`${size}px`} />;
    case IconName.TERRAFORM:
      return <Terraform height={`${size}px`} width={`${size}px`} />;
    case IconName.KOTLIN:
      return <Kotlin height={`${size}px`} width={`${size}px`} />;
    case IconName.C_SHARP:
      return <CSharp height={`${size}px`} width={`${size}px`} />;
    case IconName.RACKET:
      return <Racket height={`${size}px`} width={`${size}px`} />;
    case IconName.DBT:
      return <Dbt height={`${size}px`} width={`${size}px`} />;
    case IconName.SQL:
      return <Sql height={`${size}px`} width={`${size}px`} />;
    case IconName.DOCKER:
      return <Docker height={`${size}px`} width={`${size}px`} />;
    case IconName.GITHUB:
      return <GitHub height={`${size}px`} width={`${size}px`} />;
    case IconName.LINKEDIN:
      return <LinkedIn height={`${size}px`} width={`${size}px`} />;
    case IconName.SQLITE:
      return <SQLite height={`${size}px`} width={`${size}px`} />;
    case IconName.INSTAGRAM:
      return <Instagram height={`${size}px`} width={`${size}px`} />;
    case IconName.EMAIL:
      return <Email height={`${size}px`} width={`${size}px`} />;
    default:
      return <Typescript height={`${size}px`} width={`${size}px`} />;
  }
}

export { Icon }
