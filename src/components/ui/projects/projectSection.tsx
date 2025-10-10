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

const PROJECT_DATA: ProjectProps[] = [
  {
    title: 'Podzols Puzzle',
    description: 'fsa gh kjhf ds akl lhsa sdk askklfas dkasdf aks fkla kldfakl dklfasklf lkasdfkl asdfh sakfklsadklfls fkash af asksad kljfalk.',
    thumbnail: PodzolsPillar,
    showcase: [PodzolsPillar, PodzolsDeco, PodzolsImperfect, PodzolsPerfect]
  },
  {
    title: 'CPS Agent',
    description: 'fsa gh kjhf ds akl lhsa sdk askklfas dklfa slk dfkl aasdfasdfsd as sf daksdf hsa hshf aksk kashfkashd  k kasd fsd a asd hj ass jsad fhjaskdj h ha sas dsdf aks fkla kldfakl dklfasklf lkasdfkl asdfh sakfklsadklfls fkash af asksad kljfalk.',
    thumbnail: Agent,
    showcase: []
  },
  {
    title: 'Bachelor Projekt',
    description: 'fsa gh kjhf ds akl lhsa sdk askklfas dklfa slk dfkl asdf aks fkla .',
    thumbnail: BlsList,
    showcase: []
  },
  {
    title: 'Cheftreff Hackathon',
    description: 'fsa gh kjhf ds akl lhsa sdk askklfas dklfa slk dfkl asdf aks fkla kldfakl dklfasklf lkasdfkl asdfh sakfklsadklfls fkash af asksad kljfalasdfh ashfas hksd  asklfjashfkl afh ksf asfa s aasa a as akhasla fsdk.',
    thumbnail: DonerDashboard,
    showcase: [DonerDashboard, DonerPie, DonerPredict]
  },
  {
    title: 'Multiplayer Pong',
    description: 'fsa gh kjhf ds akl lhsa sdk askklfas dfasdf asdf asdf ajs fhasl haklfal aslf alk slf asl flasflldfaklsfklasdhfklasdlfasklfklasfklasfklasfklaskfhasdklf as dklfa slk dfkl asdf aks fkla kldfakl dklfasklf lkasdfkl asdfh sakfklsadklfls fkash af asksad kljfalk.',
    thumbnail: PongHealth,
    showcase: [PongHealth, PongGame, PongRocket, PongMain]
  },
  {
    title: 'Speechalyze',
    description: 'fsa gh kjhf ds akl  asdf akssd sdfa sa sd jhas asjdfgjka kjasdfh aksd fhjasdfjkh aggas jasd fjah sg asgdsa djk asfkasg jkash fjkhas g fkla kldfakl dklfasklf lkasdfkl asdfh sakfklsadklfls fkash af asksad kljfalk.',
    thumbnail: SpeechalyzeAuswertung,
    showcase: [SpeechalyzeAuswertung, SpeechalyzeTest, SpeechalyzeSpeak, SpeechalyzeSelect, SpeechalyzeProgress]
  },
  {
    title: 'Weekplanner',
    description: 'fsa gh kjhf ds akl lhsa sdk askklfas dklfa slasdf asdf asfhasj shasklf alsflasfas  lahsklfasfjhaa a klas aldjaklsd a sdf asd k dfkl asdf aks fkla kldfakl dklfasklf lkasdfkl asdfh sakfklsadklfls fkash af asksad kljfalk.',
    thumbnail: WeekplannerPlanned,
    showcase: [WeekplannerPlanned, WeekplannerModules, WeekplannerFilled, WeekplannerEditor]
  },
  {
    title: 'Portfolio Website',
    description: 'fsa gh kjhf ds akl lhsa sdk askklfas dklfa slasdf asdf asfhasj shasklf alsflasfas  lahsklfasfjhaa a klas aldjaklsd a sdf asd k dfkl asdf aks fkla kldfakl dklfasklf lkasdfkl asdfh sakfklsadklfls fkash af asksad kljfalk.',
    iframeUrl: 'http://localhost:3000',
    showcase: []
  },
]

function ProjectSection() {
  return (
    <div className="w-full flex flex-col gap-3">
      <h3>Projekte</h3>
      <div className="text-primary-foreground mb-60 columns-2 gap-4">
        {PROJECT_DATA.map((project, idx) => (
          <Project key={idx} title={project.title} description={project.description} thumbnail={project.thumbnail} showcase={project.showcase} iframeUrl={project.iframeUrl} />
        ))}
      </div>
    </div>
  )
}

export default ProjectSection;