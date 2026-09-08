import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:{default:'Sweetfern — Ecological Design',template:'%s | Sweetfern'},icons:{icon:'/favicon.svg'},description:'Landscapes rooted in place. Explore Sweetfern ecological design, natural stone, native planting, and living landscapes.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
