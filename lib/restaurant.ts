// Public sources verified on 2026-10-20. See docs/SOURCES.md.
export const restaurant = {
 name: 'Brooklyn Pizzaria', city: 'Votuporanga', state: 'SP',
 instagram: 'https://www.instagram.com/brooklynpizzaria/',
 menuUrl: 'https://chefgourmet.app/brooklynpizzaria',
 mapsUrl: 'https://www.google.com/maps/search/?api=1&query=-20.4205242%2C-49.9788676&query_place_id=ChIJ9Y0Ra99YvZQRc6DWxZ1VwvE',
 address: 'Rua Padre Isidóro Cordeiro Paranhos, 2973', neighborhood: 'Chácara das Paineiras', postalCode: '15502-225',
 whatsapp: '5517997228294',
 whatsappUrl: 'https://wa.me/5517997228294?text=' + encodeURIComponent('Olá! Vi o site da Brooklyn Pizzaria e gostaria de fazer um pedido.'),
 phone: '+5517997228294',
 phoneDisplay: '(17) 99722-8294',
 rating: { value: '4,7', count: 16, source: 'Google Maps', checkedAt: '20/10/2026' },
 reviewExcerpts: [
  'Experiência incrível em todos quesitos.',
  'Primeira vez que comprei e, com certeza, comprarei novamente.',
  'A pizza é incrível… massa leve, ingredientes de qualidade e muito sabor!'
 ],
 openingHours: 'Terça a domingo, das 18h às 23h30. Segunda-feira fechado.',
 delivery: true, pickup: true, contactlessDelivery: true,
 formats: [
  { name: 'Grande', detail: '8 pedaços', number: '01', text: 'Uma pizza inteira para reunir a turma.', image: '/images/pizzas.jpg' },
  { name: 'Grande · 2 sabores', detail: '8 pedaços', number: '02', text: 'Duas escolhas. A mesma vontade de repetir.', image: '/images/galeria.jpg' },
  { name: 'Broto', detail: '4 pedaços', number: '03', text: 'Seu momento Brooklyn, no tamanho broto.', image: '/images/fatia.jpg' }
 ],
 gallery: [
  { image:'/images/pizzas.jpg', label:'De perto é ainda melhor.', url:'https://www.instagram.com/brooklynpizzaria/p/DecD6D0xo0w/' },
  { image:'/images/fatia.jpg', label:'A próxima fatia pode ser sua.', url:'https://www.instagram.com/brooklynpizzaria/p/DepLbOfxEe3/' },
  { image:'/images/galeria.jpg', label:'Direto do nosso Instagram.', url:'https://www.instagram.com/brooklynpizzaria/p/DeFmCMMRpX-/' }
 ]
};
