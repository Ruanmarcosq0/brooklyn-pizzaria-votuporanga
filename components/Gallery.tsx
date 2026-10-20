'use client';
import Image from 'next/image';
import {useEffect,useRef,useState} from 'react';
import {restaurant as r} from '@/lib/restaurant';
export default function Gallery(){
 const [selected,setSelected]=useState<number|null>(null); const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{if(selected!==null)dialog.current?.showModal();},[selected]);
 function close(){dialog.current?.close();setSelected(null)}
 return <><p className="gallery-hint">Toque em uma foto para ampliar.</p><div className="gallery-grid" aria-label="Fotos da Brooklyn">{r.gallery.map((item,i)=><button key={item.image} className="gallery-item" onClick={()=>setSelected(i)} aria-label={'Ampliar foto: '+item.label}><span className="gallery-photo"><Image src={item.image} alt={item.label+' Foto real da Brooklyn Pizzaria.'} fill sizes="(max-width: 760px) 90vw, 33vw"/></span><span className="gallery-caption">{item.label}<b aria-hidden>↗</b></span></button>)}</div><dialog ref={dialog} onCancel={()=>setSelected(null)} onClose={()=>setSelected(null)} onClick={e=>{if(e.target===e.currentTarget)close()}} className="lightbox"><button className="close" onClick={close} aria-label="Fechar foto">×</button>{selected!==null?<><Image src={r.gallery[selected].image} alt={r.gallery[selected].label} width={640} height={selected===0?482:640} className="lightbox-image"/><a href={r.gallery[selected].url} target="_blank" rel="noopener noreferrer">Ver publicação original ↗</a></>:null}</dialog></>
}
