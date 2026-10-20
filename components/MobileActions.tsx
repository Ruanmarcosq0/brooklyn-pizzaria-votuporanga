import { restaurant as r } from '@/lib/restaurant';
export default function MobileActions(){
 return <nav className="mobile-actions" aria-label="Acesso rápido no celular">
  <a href="#cardapio"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg><span>Cardápio</span></a>
  <a href="#localizacao"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/></svg><span>Onde estamos</span></a>
  <a className="quick-order" href={r.menuUrl} target="_blank" rel="noopener noreferrer"><span>Pedir agora</span><span aria-hidden>↗</span></a>
 </nav>
}
