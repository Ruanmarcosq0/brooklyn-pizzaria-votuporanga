'use client';
import { useState } from 'react';
import Image from 'next/image';
import { restaurant as r } from '@/lib/restaurant';
export default function Navigation(){
 const [open,setOpen]=useState(false);
 return <header className="site-header"><a className="brand" href="#inicio" aria-label="Brooklyn Pizzaria — início"><Image src="/images/logo.jpg" alt="Logotipo Brooklyn Pizzaria" width={64} height={64}/><span>BROOKLYN<small>PIZZARIA · VOTUPORANGA</small></span></a><nav aria-label="Navegação principal" className={open?'nav is-open':'nav'}><a href="#cardapio" onClick={()=>setOpen(false)}>Cardápio</a><a href="#brooklyn" onClick={()=>setOpen(false)}>A Brooklyn</a><a href="#galeria" onClick={()=>setOpen(false)}>Na sua timeline</a><a href="#localizacao" onClick={()=>setOpen(false)}>Onde estamos</a></nav><a className="button compact" href={r.menuUrl} target="_blank" rel="noopener noreferrer">Fazer pedido <span aria-hidden>↗</span></a><button className="menu-toggle" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open?'×':'☰'}</button><div id="mobile-menu" className="sr-only">{open?'Menu aberto':'Menu fechado'}</div></header>
}
