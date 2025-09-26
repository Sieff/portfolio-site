export enum IconName {
  TYPESCRIPT = "typescript",
  POSTGRES = "postgres",
  ANGULAR = "angular",
  PYTHON = "python",
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
  }
}