export enum IconName {
  TYPESCRIPT = "typescript",
}

export function getIconTailwindClass(iconName: IconName) {
  switch (iconName) {
    case IconName.TYPESCRIPT:
      return 'bg-[#3178c6]'
  }
}