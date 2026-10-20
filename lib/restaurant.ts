// Public sources verified on 2026-10-20. See docs/SOURCES.md.
export const restaurant = {
 name: 'Brooklyn Pizzaria', city: 'Votuporanga', state: 'SP',
 instagram: 'https://www.instagram.com/brooklynpizzaria/',
 menuUrl: 'https://chefgourmet.app/brooklynpizzaria',
 mapsUrl: 'https://www.google.com/maps/search/?api=1&query=-20.4205242%2C-49.9788676&query_place_id=ChIJ9Y0Ra99YvZQRc6DWxZ1VwvE',
 address: 'Rua Padre Isidóro Cordeiro Paranhos, 2973', neighborhood: 'Chácara das Paineiras', postalCode: '15502-225',
 whatsapp: null as string | null,
 phone: null as string | null,
 openingHours: 'Terça a domingo, das 18h às 23h30. Segunda-feira fechado.',
 delivery: true, pickup: true,
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
