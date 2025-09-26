import {getIconColor, IconName} from "@/util/icon-utils";

export const CAROUSEL_DATA: TechAnecdoteData[] = [
  {
    iconName: IconName.TYPESCRIPT,
    color: getIconColor(IconName.TYPESCRIPT),
    title: 'TypeScript',
    anecdote: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam."
  },
  {
    iconName: IconName.ANGULAR,
    color: getIconColor(IconName.ANGULAR),
    title: 'Angular',
    anecdote: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam."
  },
  {
    iconName: IconName.POSTGRES,
    color: getIconColor(IconName.POSTGRES),
    title: 'PostgreSQL',
    anecdote: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam."
  },
  {
    iconName: IconName.PYTHON,
    color: getIconColor(IconName.PYTHON),
    title: 'Python',
    anecdote: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam."
  },
]

export interface TechAnecdoteData {
  iconName: IconName;
  color: string;
  title: string;
  anecdote: string;
}