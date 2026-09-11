
import {watermarkedPlan} from "@/lib/plan-watermarks";
import {Header,Footer} from '@/components/shell';import ContactForm from '@/components/contact-form';
export const metadata={title:'Contact'};
export default function Contact(){return <main id="top"><Header/><section className="contact-layout"><div className="contact-intro"><p className="eyebrow">START A CONVERSATION</p><h1>Tell us about<br/><em>your landscape.</em></h1><p>A place you want to understand. A garden you want to create. A landscape ready for its next chapter.</p><div className="contact-direct"><p className="eyebrow">ZAVIERE DRUMM / SWEETFERN ECOLOGICAL DESIGN</p><a href={watermarkedPlan("mailto:zdrumm@sweetfernecodesign.com")}>zdrumm@sweetfernecodesign.com ↗</a><p>The Berkshires & surrounding region</p></div><img src={watermarkedPlan("/images/summer-1.webp")} alt="Stone path into a planted landscape" loading="lazy"/></div><ContactForm/></section><Footer/></main>}
