import {Header,Footer} from '@/components/shell';import ProjectIndex from '@/components/project-index';
export const metadata={title:'Projects'};
export default function Projects(){return <main id="top"><Header/><section className="page-intro"><p className="eyebrow">THE PORTFOLIO</p><h1>Every landscape.<br/><em>Its own story.</em></h1><p>Explore the photographs, then go deeper into the design intent, materials, ecological strategies, and original working documents.</p></section><section className="projects-section"><ProjectIndex/></section><Footer/></main>}
