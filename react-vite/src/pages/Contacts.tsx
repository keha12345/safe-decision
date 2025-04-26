
import QuestionBlock from '../elements/QuestionBlock'
import Hero from '../elements/Hero'

export default function Contacts({}){

    return <>

    <Hero slides={[{
        bg: 'media/hero_addit.png',
        title: 'Контакты'
    }]} ch={256}/>

    <section className="my-16 md:my-32">
        <div className="p-8 mx-auto text-black text-4xl md:text-6xl font-bold text-center">
        <p>
            +7 (495) 565-38-45 <br/>
            safedecision@mail.ru
        </p>
        <p className="text-3xl font-light my-8">
            Россия, г.Москва, ул. Научный проезд д.17
        </p>
        </div>
    </section>

    <QuestionBlock />
</>
}