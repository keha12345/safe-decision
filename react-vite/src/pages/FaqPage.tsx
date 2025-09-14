import { useEffect } from 'react'
import Hero from '../elements/Hero'
import QuestionBlock from '../elements/QuestionBlock'
import AOS from 'aos'
import Faq from '../elements/Faq'


export default function FaqPage(){


    useEffect(() => {
        AOS.init({
          duration: 800, // длительность анимации в мс
          once: true,    // анимация только при первом скролле
        });
    }, []);

    return <>
        <Hero title='Часто задаваемые вопросы'  subtitle='' buttons={<></>}/>
        <Faq title=' ' />
        <QuestionBlock />
    </>
}