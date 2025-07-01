
import QuestionBlock from '../elements/QuestionBlock'
import Hero from '../elements/Hero'
import { useEffect } from 'react';
import AOS from 'aos';
import useContent from '../hooks/useContent';


// const prefix = window.location.href.includes('github')? '/safe-decision':"";

const defaultContent = {
    hero: {
      title: 'Спасибо за заявку!',
      subtitle: 'Ваша заявка была успешно отправлена. Наш сотрудник свяжется с вами в ближайшее время.',
      buttonText: 'На главную',
      buttonHref: '/',
    },
  };

export default function Grat({}){
    const content = useContent();
    const res = {...defaultContent, ...content.gratPage}
    useEffect(() => {
        AOS.init({
                  duration: 800, // длительность анимации в мс
                  once: true,    // анимация только при первом скролле
                });
        }, []);


    return <>
    
        <Hero title={res.hero.title} subtitle={res.hero.subtitle} buttons={ <>
            <a href={res.hero.buttonHref} className="block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold mb-2 p-2 md:py-3 px-6 rounded-lg transition text-center md:text-start" >
                {res.hero.buttonText}
            </a>
        </>}/>
    
        <QuestionBlock />
    </>
}



