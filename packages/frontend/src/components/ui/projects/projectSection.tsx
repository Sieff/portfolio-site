import * as React from 'react'
import Project, {ProjectProps} from "@/components/ui/projects/project";
import Agent from '../../../../public/assets/projects/agent.jpg';
import BlsList from '../../../../public/assets/projects/bls_list.png';
import DonerDashboard from '../../../../public/assets/projects/doner_dashboard.jpg';
import DonerPie from '../../../../public/assets/projects/doner_pie.jpg';
import DonerPredict from '../../../../public/assets/projects/doner_predict.jpg';
import PodzolsDeco from '../../../../public/assets/projects/podzols_deco.jpg';
import PodzolsImperfect from '../../../../public/assets/projects/podzols_imperfect.jpg';
import PodzolsPerfect from '../../../../public/assets/projects/podzols_perfect.jpg';
import PodzolsPillar from '../../../../public/assets/projects/podzols_pillar.jpg';
import PongGame from '../../../../public/assets/projects/pong_game.jpg';
import PongMain from '../../../../public/assets/projects/pong_main.jpg';
import PongHealth from '../../../../public/assets/projects/pong_health.jpg';
import PongRocket from '../../../../public/assets/projects/pong_rocket.jpg';
import SpeechalyzeAuswertung from '../../../../public/assets/projects/speechalyze_auswertung.jpg';
import SpeechalyzeSelect from '../../../../public/assets/projects/speechalyze_select.jpg';
import SpeechalyzeProgress from '../../../../public/assets/projects/speechalyze_progress.jpg';
import SpeechalyzeSpeak from '../../../../public/assets/projects/speechalyze_speak.jpg';
import SpeechalyzeTest from '../../../../public/assets/projects/speechalyze_test.jpg';
import WeekplannerEditor from '../../../../public/assets/projects/weekplanner_editor.jpg';
import WeekplannerFilled from '../../../../public/assets/projects/weekplanner_filled.jpg';
import WeekplannerModules from '../../../../public/assets/projects/weekplanner_modules.jpg';
import WeekplannerPlanned from '../../../../public/assets/projects/weekplanner_planned.jpg';

const backend_uri = process.env.NEXT_PUBLIC_BACKEND_URI || '';
const api_path = process.env.NEXT_PUBLIC_API_PATH || '';

const PROJECT_DATA: ProjectProps[] = [
  {
    title: 'Podzols Puzzle',
    description: '<strong><a href="https://www.nintendo.com/de-de/Spiele/Nintendo-3DS-Download-Software/SpeedThru-Potzol-s-Puzzle-275372.html" target="_blank">SpeedThru Potzol’s Puzzle</a></strong> ist eines dieser Spiele, die man früher auf der Konsole einfach hatte. Die Steuerung hat mir schon immer gefallen und die Mischung aus Fast-Paced und 3D-Puzzle fand ich genial, und sie erinnert mich an den Rubik’s Cube. Um ein bisschen mit der Datenstruktur des Charakters und Assets zu spielen, habe ich diese kleine Demo in Unity gebaut.',
    thumbnail: PodzolsPillar,
    showcase: [PodzolsPillar, PodzolsDeco, PodzolsImperfect, PodzolsPerfect]
  },
  {
    title: 'CPS Agent',
    description: 'In meiner <strong><a href="' + backend_uri + api_path + '/master-arbeit" target="_blank">Masterarbeit</a></strong> habe ich den kreativen Prozess beim Programmieren mit LLM-Agents untersucht. Dafür habe ich meinen eigenen Agenten entwickelt, welcher insbesondere den kreativen Problemlösungsprozess unterstützen soll. Der Agent läuft als <strong><a href="https://plugins.jetbrains.com/plugin/25434-cps-agent/" target="_blank">IntelliJ-Plugin</strong> und zeigt Features wie einen Avatar für Emotionen und proaktives Verhalten.',
    thumbnail: Agent,
    showcase: []
  },
  {
    title: 'Bachelor Projekt',
    description: 'Im Rahmen unseres Bachelorprojektes haben wir eine Software für die <strong><a href="https://www.law-school.de/" target="_blank">Bucerius Law School</a></strong> entwickelt. Dafür haben wir die öffentliche Datenbank für Rechtsprechungen gescrapet, um ein Dashboard zum Suchen von relevanten Rechtsprechungen und deren Referenzen zu erstellen.',
    thumbnail: BlsList,
    showcase: []
  },
  {
    title: 'Cheftreff Hackathon',
    description: 'Im Rahmen des Hackathon-Events der <strong><a href="https://chef-treff.de/" target="_blank">ChefTreff-Messe 2024</a></strong> haben wir eine Data-Science-Challenge von <strong><a href="https://www.doerner.de/en/homepage/" target="_blank">Otto-Dörner</a></strong> bekommen. Über eine Million Datensätze über Containerlieferungen haben wir zur Verfügung gestellt bekommen, um ein Tool beliebiger Art oder eine Voraussage zu erstellen. Wir haben uns dazu entschieden, über Timeseries-Prediction ein mögliches Budget für das Folgejahr vorherzusagen. Wir haben zwar nicht gewonnen, aber es war eine interessante Erfahrung, in ein Team hereingeworfen zu werden und eine solch überraschend schwere Aufgabe zu lösen.',
    thumbnail: DonerDashboard,
    showcase: [DonerDashboard, DonerPie, DonerPredict]
  },
  {
    title: 'Multiplayer Pong',
    description: 'Nach der Vorlesung für verteilte Systeme war dieses Projekt eine sehr coole Anwendung, um sich mal ein bisschen mit TCP, UDP, Clients und Sockets die Hände schmutzig zu machen. Die Idee von meinem Pong-Klon war es, sich nebenbei noch mit Items zu bekämpfen, während man natürlich noch den Ball jonglieren muss.',
    thumbnail: PongHealth,
    showcase: [PongHealth, PongGame, PongRocket, PongMain]
  },
  {
    title: 'Speechalyze',
    description: 'Im Masterprojekt im Zuge des <strong><a href="https://mast.informatik.uni-hamburg.de/mlab/" target="_blank">M-Lab der UHH</a></strong> haben wir für die Abteilung der Erziehungswissenschaften eine Software entwickelt, um einen Test für eine Studie durchzuführen. Bis jetzt gibt es einen Test zur Aussprache und Erkennung von Wörtern, Wir haben Speechalyze dabei so modular aufgebaut, dass noch weitere Testarten hinzugefügt werden können. Es kann direkt in der Software ein Teilnehmer ausgewertet werden, sodass am Ende ein kompakter Excel export entsteht, mit dem die Wissenschaftler ihre weiteren Auswertungen anwenden können. Teilnehmer können auch mehrfach getestet werden, um einen Verlauf der Testperformance festzustellen.',
    thumbnail: SpeechalyzeAuswertung,
    showcase: [SpeechalyzeAuswertung, SpeechalyzeTest, SpeechalyzeSpeak, SpeechalyzeSelect, SpeechalyzeProgress]
  },
  {
    title: 'Weekplanner',
    description: 'Bei uns an der Uni musste man immer seinen eigenen Stundenplan planen. Dabei muss man um die 6 Module mit je 2–3 Veranstaltungen hantieren, die jeweils zum Teil bis zu 10 mögliche Termine im Verlaufe der Woche hatten. Damit man einen Überblick bekommt, habe ich <strong><a href="https://sieff.github.io/weekplanner/" target="_blank">diesen kleinen Wochenplaner</a></strong> erstellt, der einem dann im Anschluss auch gleich einen konfliktfreien Wochenplan ausgibt, sofern dieser denn existiert.',
    thumbnail: WeekplannerPlanned,
    showcase: [WeekplannerPlanned, WeekplannerModules, WeekplannerFilled, WeekplannerEditor]
  },
  {
    title: 'Portfolio Website',
    description: 'Um auf kreative Weise meine Erfahrungen und Sideprojects vorzustellen, habe ich eine kleine <strong><a href="https://steffensc.hu/bert" target="_blank">Portfolio Seite</a></strong> erstellt. Meinen RaspberryPi konnte ich dafür auch endlich mal auspacken und die Website gleich selber hosten.',
    iframeUrl: '/',
    showcase: []
  },
]

function ProjectSection() {
  return (
    <div className="w-full max-w-(--width-content) flex flex-col gap-3 p-4">
      <h3>Projekte</h3>
      <div className="text-primary-foreground lg:columns-2 gap-4">
        {PROJECT_DATA.map((project, idx) => (
          <Project key={idx} title={project.title} description={project.description} thumbnail={project.thumbnail} showcase={project.showcase} iframeUrl={project.iframeUrl} />
        ))}
      </div>
    </div>
  )
}

export default ProjectSection;