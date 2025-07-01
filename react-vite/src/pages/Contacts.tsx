
import QuestionBlock from '../elements/QuestionBlock'
import Hero from '../elements/Hero'
import { useEffect } from 'react';
import AOS from 'aos';
import useContent from '../hooks/useContent';

const defaultContent = {
    title: 'safedecision@mail.ru',
    subtitle: 'Россия, г.Москва, ул. Научный проезд д.17',
    btn: 'WhatsApp',
    btnLink: "https://wa.me/79999999999"
}

export default function Contacts({}){
    const content = useContent()
    const res = {...defaultContent, ...content.contactsPage}
    useEffect(() => {
        AOS.init({
              duration: 800, // длительность анимации в мс
              once: true,    // анимация только при первом скролле
            });
          }, []);
    return <>

    <Hero title={res.title} subtitle={res.subtitle} buttons={ <>
        <a href="tel: +7 (495) 565-38-45" className="block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold mb-2 p-2 md:py-3 px-6 rounded-lg transition text-center md:text-start" >
        {'+7 (495) 565-38-45'}
        </a>
        <a href={res.btnLink} className="block bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold p-2 md:py-3 px-6 rounded-lg transition text-center md:text-start" >
            {res.btn}
        </a>
    </>}/>

    <section className="my-16 md:my-32">
        {/* <div className="p-8 md:py-24 mx-auto text-black text-4xl md:text-6xl font-bold text-center bg-white">
        <p>
            +7 (495) 565-38-45 <br/>
            safedecision@mail.ru
        </p>
        <p className="text-3xl font-light my-8">
            Россия, г.Москва, ул. Научный проезд д.17
        </p>
        </div> */}
    </section>

    <QuestionBlock />
</>
}