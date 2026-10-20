import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Brooklyn Pizzaria | Pizza artesanal em Votuporanga-SP',
 description: 'Conheça a Brooklyn Pizzaria em Votuporanga-SP. Pizza artesanal, delivery e retirada. Consulte os sabores e faça seu pedido pelo cardápio oficial.',
 robots: {index:false, follow:true},
 openGraph: { title:'Brooklyn Pizzaria · Votuporanga', description:'Sua noite pede Brooklyn. Pizza artesanal, delivery e retirada.', locale:'pt_BR',type:'website' },
 icons: {icon:'/images/logo.jpg'}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
