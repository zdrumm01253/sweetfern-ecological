"use client";
import {useState} from "react";
import Image from "next/image";
import {Dialog,DialogContent,DialogTitle,DialogDescription} from "@/components/ui/dialog";
const drawing="/sketches/sweetfern-driveway-plan.webp";
export default function ManagementDrivewayPlan(){
 const [open,setOpen]=useState(false);
 const [zoom,setZoom]=useState(100);
 return <><figure className="management-driveway"><button onClick={()=>{setZoom(100);setOpen(true)}} aria-label="Enlarge driveway plan"><Image src="/sketches/sweetfern-driveway-plan-thumb.webp" alt="Driveway plan showing grading, drainage, stonework, and planting" width={900} height={630} unoptimized/><span>Enlarge plan ↗</span></button><figcaption>Driveway plan</figcaption></figure><Dialog open={open} onOpenChange={setOpen}><DialogContent className="art-dialog" showCloseButton={false}><button className="art-close" onClick={()=>setOpen(false)}>Close ×</button><DialogTitle>Driveway plan</DialogTitle><DialogDescription>Zoom to explore grading, drainage, stonework, and planting.</DialogDescription><div className="art-zoom-controls"><label htmlFor="driveway-zoom">Zoom {zoom}%</label><input id="driveway-zoom" type="range" min={100} max={300} step={25} value={zoom} onChange={e=>setZoom(Number(e.target.value))}/><button onClick={()=>setZoom(100)}>Fit</button></div><div className="art-zoom-viewport"><Image src={drawing} alt="Sweetfern Ecological Design driveway plan" width={2600} height={1821} unoptimized style={{width:zoom+"%",maxWidth:"none",height:"auto",maxHeight:"none"}}/></div><a className="art-full-image" href={drawing} target="_blank" rel="noreferrer">Open full drawing ↗</a></DialogContent></Dialog></>;
}
