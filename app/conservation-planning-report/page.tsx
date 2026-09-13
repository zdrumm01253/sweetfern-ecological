import Link from 'next/link';
import {Header,Footer} from '@/components/shell';
import SheetFlipbook from '@/components/sheet-flipbook';
export const metadata={title:'Conservation Planning Concept Report'};
export default function ConceptReport(){return <main id="top"><Header/><section className="report-reader"><Link className="line-link" href="/projects/conservation-planning/">Back to the project</Link><h1>Conservation planning<br/>concept report</h1><p>The supporting planting strategy for buffers, slopes, wetlands, and meadows.</p><a className="line-link" href="/conservation-planning/conservation-planning-report.pdf" download>Download the PDF</a><SheetFlipbook label="Conservation planning concept report" documents={Array.from({length:16},(_,i)=>({page:i+1,title:`Report page ${i+1}`,description:'',image:`/conservation-planning/report-pages/page-${i+1}.webp`}))}/></section><Footer/></main>}
