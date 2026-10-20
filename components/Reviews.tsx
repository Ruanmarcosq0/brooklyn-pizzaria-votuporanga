import { restaurant as r } from '@/lib/restaurant';
export default function Reviews(){
 return <section id="avaliacoes" className="section reviews-section">
  <div className="section-heading"><div><p className="eyebrow">QUEM JÁ PEDIU CONTA</p><h2>Boas fatias.<br/><em>Boas experiências.</em></h2></div>
   <a className="rating-summary" href={r.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver avaliações da Brooklyn no Google Maps"><strong>{r.rating.value}<span>/5</span></strong><span className="rating-stars" aria-hidden>★★★★★</span><span>{r.rating.count} avaliações no {r.rating.source} ↗</span></a>
  </div>
  <div className="review-grid">{r.reviewExcerpts.map(text=><figure key={text} className="review-excerpt"><span className="quote-mark" aria-hidden>“</span><blockquote>{text}</blockquote><figcaption>Trecho de avaliação no Google Maps</figcaption></figure>)}</div>
  <p className="review-note">Nota e resumo de avaliações informados em {r.rating.checkedAt}. Consulte as avaliações completas no Google Maps.</p>
 </section>
}
