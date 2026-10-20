'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { restaurant as r } from '@/lib/restaurant';
export default function Navigation(){
 const [open,setOpen]=useState(false);
 const toggle=useRef<HTMLButtonElement>(null);
 useEffect(()=>{
  if(!open)return;
  const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);toggle.current?.focus()}};
  document.addEventListener('keydown',onKey);
  return ()=>document.removeEventListener('keydown',onKey);
 },[open]);
 return <>
  {open?<button className="menu-backdrop" aria-label="Fechar navegação" onClick={()=>setOpen(false)} tabIndex={-1}/>:null}
  <header className="site-header">
   <a className="brand" href="#inicio" aria-label="Brooklyn Pizzaria — início" onClick={()=>setOpen(false)}><Image src="/images/logo.jpg" alt="Logotipo Brooklyn Pizzaria" width={64} height={64}/><span>BROOKLYN<small>PIZZARIA · VOTUPORANGA</small></span></a>
   <nav id="site-navigation" aria-label="Navegação principal" className={open?'nav is-open':'nav'}>
    <a href="#cardapio" onClick={()=>setOpen(false)}>Cardápio <span className="mobile-only" aria-hidden>↓</span></a>
    <a href="#brooklyn" onClick={()=>setOpen(false)}>A Brooklyn <span className="mobile-only" aria-hidden>↓</span></a>
    <a href="#galeria" onClick={()=>setOpen(false)}>Fotos das pizzas <span className="mobile-only" aria-hidden>↓</span></a>
    <a href="#localizacao" onClick={()=>setOpen(false)}>Endereço e horários <span className="mobile-only" aria-hidden>↓</span></a>
    <a className="mobile-only nav-order" href={r.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>Pedir pelo WhatsApp ↗</a>
   </nav>
   <a className="button compact" href={r.whatsappUrl} target="_blank" rel="noopener noreferrer">Pedir no WhatsApp <span aria-hidden>↗</span></a>
   <button ref={toggle} className="menu-toggle" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="site-navigation" onClick={()=>setOpen(!open)}><span>{open?'Fechar':'Menu'}</span><b aria-hidden>{open?'×':'☰'}</b></button>
  </header>
 </>
}
