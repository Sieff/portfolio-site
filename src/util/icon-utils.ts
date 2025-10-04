export enum IconName {
  TYPESCRIPT = "typescript",
  POSTGRES = "postgres",
  ANGULAR = "angular",
  PYTHON = "python",
  UHH = "uhh",
  OHZ = "ohz",
  FOLGE3 = "folge3",
  CHEFTREFF = "cheftreff",
  BUCERIUS = "bucerius",
  SPEECHALYZE = "speechalyze",
  NEST = "nest",
  REACT = "react",
  SPRING_BOOT = "spring-boot",
  UNITY = "unity",
  JAVA  = "java",
  TERRAFORM = "terraform",
  KOTLIN = "kotlin",
  C_SHARP = "c#",
  RACKET = "racket",
  DBT = "dbt",
  SQL = "sql",
  DOCKER = "docker",
}

export function getIconTailwindClass(iconName: IconName) {
  switch (iconName) {
    case IconName.TYPESCRIPT:
      return 'bg-[#3178c6]'
    case IconName.POSTGRES:
      return 'bg-[#336791]'
    case IconName.ANGULAR:
      return 'bg-[#DD0031]'
    case IconName.PYTHON:
      return 'bg-[#FFCD38]'
    case IconName.NEST:
      return 'bg-[#ea2845]'
    case IconName.REACT:
      return 'bg-[#087EA4]'
    case IconName.SPRING_BOOT:
      return 'bg-[#6DB33F]'
    case IconName.UNITY:
      return 'bg-[#FFFFFF]'
    case IconName.JAVA:
      return 'bg-[#4e7896]'
    case IconName.TERRAFORM:
      return 'bg-[#5c4ee5]'
    case IconName.KOTLIN:
      return 'bg-[#C757BC]'
    case IconName.C_SHARP:
      return 'bg-[#A179DC]'
    case IconName.RACKET:
      return 'bg-[#3E5BA9]'
    case IconName.DBT:
      return 'bg-[#ff694a]'
    case IconName.SQL:
      return 'bg-[#df6c20]'
    case IconName.DOCKER:
      return 'bg-[#1d63ed]'
    default: return 'bg-[var(--primary)]'
  }
}

export function getIconColor(iconName: IconName) {
  switch (iconName) {
    case IconName.TYPESCRIPT:
      return '#3178c6'
    case IconName.POSTGRES:
      return '#336791'
    case IconName.ANGULAR:
      return '#DD0031'
    case IconName.PYTHON:
      return '#FFCD38'
    case IconName.NEST:
      return '#ea2845'
    case IconName.REACT:
      return '#087EA4'
    case IconName.SPRING_BOOT:
      return '#6DB33F'
    case IconName.UNITY:
      return '#FFFFFF'
    case IconName.JAVA:
      return '#4e7896'
    case IconName.TERRAFORM:
      return '#5c4ee5'
    case IconName.KOTLIN:
      return '#C757BC'
    case IconName.C_SHARP:
      return '#A179DC'
    case IconName.RACKET:
      return '#3E5BA9'
    case IconName.DBT:
      return '#ff694a'
    case IconName.SQL:
      return '#df6c20'
    case IconName.DOCKER:
      return '#1d63ed'
    default:
      return 'var(--primary)'
  }
}