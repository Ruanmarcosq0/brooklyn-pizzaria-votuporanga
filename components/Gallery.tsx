'use client';
import Image from 'next/image';
import {useEffect,useRef,useState} from 'react';
import {restaurant as r} from '@/lib/restaurant';
export default function Gallery(){
 const [selected,setSelected]=useState<number|null>(null); const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{if(selected!==null)dialog.current?.showModal();},[selected]);
 function close(){dialog.current?.close();setSelected(null)}
 return <><div className="gallery-grid">{r.gallery.map((item,i)=><button key={item.image} className="gallery-item" onClick={()=>setSelected(i)} aria-label={'Ampliar foto: '+item.label}><Image src={item.image} alt={item.label+' Foto real da Brooklyn Pizzaria.'} fill sizes="(max-width: 700px) 90vw, 33vw"/><span>{item.label}<b aria-hidden>↗</b></span></button>)}</div><dialog ref={dialog} onCancel={()=>setSelected(null)} onClose={()=>setSelected(null)} onClick={e=>{if(e.target===e.currentTarget)close()}} className="lightbox"><button className="close" onClick={close} aria-label="Fechar foto">×</button>{selected!==null?<><Image src={r.gallery[selected].image} alt={r.gallery[selected].label} width={640} height={640} style={{objectFit:'contain',maxHeight:'75svh',width:'auto',maxWidth:'100%'}}/><a href={r.gallery[selected].url} target="_blank" rel="noopener noreferrer">Ver publicação original ↗</a></>:null}</dialog></>
}
