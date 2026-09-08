'use client';
import {useState} from 'react';
import Image from 'next/image';
import {Dialog,DialogContent,DialogTitle,DialogDescription} from '@/components/ui/dialog';
import {plantedRoofPhotos} from '@/lib/planted-roof-photos';
export default function PlantedRoofGallery(){
 const [selected,setSelected]=useState<(typeof plantedRoofPhotos)[number]|null>(null);
 return <section className="roof-gallery" id="roof-photographs"><div className="section-title"><div><p className="eyebrow">A CLOSER LOOK</p><h2>A living layer.<br/><em>Part of the architecture.</em></h2></div></div><div className="roof-photo-grid">{plantedRoofPhotos.slice(1).map(photo=><figure key={photo.src} className={photo.src.endsWith("/planting-detail.webp")?"roof-photo-feature":undefined}><button onClick={()=>setSelected(photo)} aria-label={'Enlarge '+photo.title}><Image unoptimized src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}/><span aria-hidden="true">↗</span></button><figcaption><h3>{photo.title}</h3><p>{photo.alt}</p></figcaption></figure>)}</div><Dialog open={!!selected} onOpenChange={open=>{if(!open)setSelected(null)}}><DialogContent className="roof-photo-dialog"><DialogTitle>{selected?.title}</DialogTitle><DialogDescription>{selected?.alt}</DialogDescription>{selected&&<Image unoptimized src={selected.src} alt={selected.alt} width={selected.width} height={selected.height}/>}</DialogContent></Dialog></section>;
}
