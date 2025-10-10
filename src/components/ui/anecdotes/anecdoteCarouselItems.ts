import {getIconColor, IconName} from "@/util/icon-utils";

export const CAROUSEL_DATA_TOP: TechAnecdoteData[] = [
  {
    iconName: IconName.ANGULAR,
    color: getIconColor(IconName.ANGULAR),
    title: 'Angular',
    anecdote: 'Auf der Arbeit benutzen wir für fast jedes Projekt Angular. Ich mag Angular sehr gerne für die Struktur, die es mit sich bringt.'
  },
  {
    iconName: IconName.NEST,
    color: getIconColor(IconName.NEST),
    title: 'NestJS',
    anecdote: 'JavaScript im Backend? Eigentlich bin ich da auch kein Fan von, aber die Angular-Nest-Kombi lässt schon sehr elegant mit sich arbeiten.',
  },
  {
    iconName: IconName.REACT,
    color: getIconColor(IconName.REACT),
    title: 'React',
    anecdote: 'Gerade für Sideprojects nutze ich immer gerne React für die UI, schnell installiert und einfach drauflos.',
  },
  {
    iconName: IconName.SPRING_BOOT,
    color: getIconColor(IconName.SPRING_BOOT),
    title: 'SpringBoot',
    anecdote: 'Nach einer der nervenaufreibendsten Migrationen von Spring nach SpringBoot habe ich so einiges gelernt. SpringBoot ist für mich dabei immer noch eines der besten Backend-Frameworks.',
  },
  {
    iconName: IconName.UNITY,
    color: getIconColor(IconName.UNITY),
    title: 'Unity',
    anecdote: 'Als Videospiel-Enjoyer ist die Spieleentwicklung ein Hobby von mir. Unity ist dabei meine Go-to-Engine.',
  },
]

export const CAROUSEL_DATA_MIDDLE: TechAnecdoteData[] = [
  {
    iconName: IconName.TYPESCRIPT,
    color: getIconColor(IconName.TYPESCRIPT),
    title: 'TypeScript',
    anecdote: 'Als Daily-Driver in verschiedenen Frameworks komme ich sehr gut mit TypeScript zurecht. Auch wenn es manchmal seine JavaScript-Tücken hat, mag ich den Mix aus objektorientierten und funktionalen Elementen.'
  },
  {
    iconName: IconName.JAVA,
    color: getIconColor(IconName.JAVA),
    title: 'Java',
    anecdote: 'Als erste richtige Programmiersprache, die uns in der Uni gelehrt wurde, hat Java für mich immer einen besonderen Platz. Auch wenn viele die Verbosität von Java verfluchen, ich mag die Explizitheit.'
  },
  {
    iconName: IconName.TERRAFORM,
    color: getIconColor(IconName.TERRAFORM),
    title: 'Terraform',
    anecdote: 'Ich hatte immer großen Respekt vor der Cloud. Als ich dann auf der Arbeit eine CloudFormation in Terraform umschreiben sollte, war ich mir erst unsicher, aber Terraform zu benutzen hat dann doch sehr viel mehr Spaß gemacht als die endlosen Templates.'
  },
  {
    iconName: IconName.PYTHON,
    color: getIconColor(IconName.PYTHON),
    title: 'Python',
    anecdote: 'Ob Advent-of-Code oder LeetCode-Probleme: Um schnell mal ein algorithmisches Problem zu bearbeiten, greife ich gerne zu Python.'
  },
  {
    iconName: IconName.KOTLIN,
    color: getIconColor(IconName.KOTLIN),
    title: 'Kotlin',
    anecdote: 'Für meine Masterarbeit habe ich ein IntelliJ-Plugin mit Kotlin geschrieben. Vielleicht ist ja die Verbosität von Java doch zu viel des Guten…'
  },
  {
    iconName: IconName.C_SHARP,
    color: getIconColor(IconName.C_SHARP),
    title: 'C#',
    anecdote: 'Für die Spieleentwicklung in Unity komme ich um C# nicht herum. Als Bruder von Java finde ich auch C# eine sehr angenehme Sprache.'
  },
  {
    iconName: IconName.RACKET,
    color: getIconColor(IconName.RACKET),
    title: 'Racket',
    anecdote: 'Im Modul der funktionalen Programmierung an der Uni haben wir Racket genutzt. Ich mag zwar immer noch keine Lisp-Sprachen, aber Rekursion und Higher-Order-Functions habe ich durchgespielt.'
  },
]

export const CAROUSEL_DATA_BOTTOM: TechAnecdoteData[] = [
  {
    iconName: IconName.POSTGRES,
    color: getIconColor(IconName.POSTGRES),
    title: 'PostgreSQL',
    anecdote: 'Mein Lieblings-RDBMS. Open Source, performant, alle Features, die man sich im day-to-day life erträumen kann. Von mir aus können wir jede Anwendung mit Postgres bauen 😅'
  },
  {
    iconName: IconName.DBT,
    color: getIconColor(IconName.DBT),
    title: 'DBT',
    anecdote: 'Während einer Data-Warehousing-Aufgabe auf der Arbeit durfte ich DBT kennenlernen. Ein echt cooles Tool, mit dem man viel anstellen kann. Fast schon zu viel.'
  },
  {
    iconName: IconName.SQL,
    color: getIconColor(IconName.SQL),
    title: 'SQL',
    anecdote: 'Während meiner Data-Warehousing-Aufgabe auf der Arbeit musste ich sehr viel SQL schreiben. Ich kann dir jetzt wahrscheinlich alles aus einer DB querien.'
  },
  {
    iconName: IconName.DOCKER,
    color: getIconColor(IconName.DOCKER),
    title: 'Docker',
    anecdote: 'Frisch im Werkstudentenjob angekommen, war meine erste Aufgabe, die Website zu dockern. Ob schnell mal eine DB aufsetzen oder App containerisieren, Docker ist mir echt ans Herz gewachsen.',
  },
]

export interface TechAnecdoteData {
  iconName: IconName;
  color: string;
  title: string;
  anecdote: string;
}