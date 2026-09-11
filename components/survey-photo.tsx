
import {watermarkedPlan} from "@/lib/plan-watermarks";
import Image from 'next/image';
export default function SurveyPhoto({kind='vegetation'}:{kind?:'vegetation'|'drainage'}){const portrait=kind==='drainage';return <figure className={'survey-field-photo'+(portrait?' survey-field-portrait':'')}><div className="survey-crop"><Image src={watermarkedPlan('/images/survey-'+kind+'.webp')} alt={portrait?'Recording a drainage structure with GNSS surveying equipment':'Collecting georeferenced field observations among meadow-edge vegetation'} width={portrait?1350:1800} height={portrait?1800:1350} unoptimized loading="lazy"/></div><figcaption>{portrait?'Site surveying · Recording drainage infrastructure.':'Site surveying · Grounding the plan in field observations.'}</figcaption></figure>}
