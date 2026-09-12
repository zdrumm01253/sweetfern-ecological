import type {Project} from '@/lib/projects';
import {Header,Footer} from '@/components/shell';
import Gallery from '@/components/gallery';

export default function PlantedRoofProject({project:p}:{project:Project}){
return <main id="top" className="roof-mini-project"><Header/><section className="roof-project-intro"><a className="eyebrow" href="/projects/?category=Planted+Roofs">← ALL PLANTED ROOFS</a><p className="eyebrow">PLANTED ROOFS / PHOTO STUDY</p><h1>A garden<br/><em>at roof level.</em></h1></section><div className="roof-project-cover-frame"><img className="roof-project-cover" src={p.hero} alt="Overhead view of a planted roof with paving and a seating area."/></div><section id="details" className="roof-project-summary"><h2>Project summary</h2><div className="roof-summary-copy">{/* Add the owner's summary to this project's description in lib/projects.ts. */}{p.description&&<p>{p.description}</p>}</div></section><Gallery images={p.images} captions={p.captions} title={p.title} allowContactSheet={false}/><Footer/></main>
}
