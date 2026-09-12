'use client';
import {useState} from 'react';
type Sheet={page:number;title:string;description:string;image:string};
export default function SheetFlipbook({documents}:{documents:Sheet[]}){
 const[index,setIndex]=useState(0);
 const [start,setStart]=useState<number|null>(null);
 const move=(delta:number)=>setIndex(i=>Math.max(0,Math.min(documents.length-1,i+delta)));
 const doc=documents[index];
 return <div className="sheet-flipbook" role="region" aria-label="Morningside project sheets" tabIndex={0} onKeyDown={e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowRight'?1:-1)}}}>
 <div className="sheet-flipbook-stage" onTouchStart={e=>setStart(e.touches[0].clientX)} onTouchEnd={e=>{if(start!==null){const delta=e.changedTouches[0].clientX-start;if(Math.abs(delta)>50)move(delta<0?1:-1)}setStart(null)}}><img key={doc.page} src={doc.image} alt={doc.title}/></div>
 <div className="sheet-flipbook-controls"><button disabled={index===0} onClick={()=>move(-1)} aria-label="Previous sheet">← Previous</button><span aria-live="polite">{index+1} / {documents.length}</span><button disabled={index===documents.length-1} onClick={()=>move(1)} aria-label="Next sheet">Next →</button></div>
 <div className="sheet-flipbook-caption" aria-live="polite"><h3>{doc.title}</h3><p>{doc.description}</p></div>
 </div>
}
