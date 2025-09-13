import { useEffect } from 'react'
import Hero from '../elements/Hero'
// import Accardion from '../elements/Accardion'
// import Modal from '../elements/Modal'
// import useForm from '../hooks/useForm'
import Advantages from '../elements/Advantages'
// import Delivery from './Delivery'
import DeliverySlider from '../elements/DeliverySlider'
// import { Link } from 'react-router'
// import { ArrowRight } from 'lucide-react'
// import Faq from '../elements/Faq'
import RoadMap from '../elements/RoadMap'
import QuestionBlock from '../elements/QuestionBlock'
import Quiz from '../elements/Quz'
import AOS from 'aos'
// import useContent from '../hooks/useContent'

// const prefix = window.location.href.includes('github')? '/safe-decision':'';


// const defaultContent = {
//     info: {
//         title: 'Мы российско-китайская логистическая компания',
//         points: [
//         'Склады по всему Китаю',
//         'У нас проверенные партнеры',
//         'Все сотрудники отдела закупок - китайцы',
//         ],
//         highlighted: ['Самые', 'выгодные', 'цены'],
//         moreLinkText: 'Подробнее',
//     }
// }


export default function Index({}){

    // const content = useContent();
    // const res = {...defaultContent, ...content.infoPage.info}

    // const [modal, setModal] = useState(false)
    // const [h,send] = useForm({phone: '', name: '', text: ''})
    const isPhoneScreen = (typeof window !== 'undefined' && window.innerWidth < 768);

    useEffect(() => {
        AOS.init({
          duration: 800, // длительность анимации в мс
          once: true,    // анимация только при первом скролле
        });
    }, []);

    return <>
        <Hero />
        {isPhoneScreen? <>
            <DeliverySlider />
            <Advantages />
        </>:<>
            <Advantages />
            <DeliverySlider />
        </>}
        <RoadMap />
        <Quiz />

        


        {/* <Faq /> */}
        <QuestionBlock />

        

        
        {/* <a className="btn blue block text-center font-semibold my-16 mx-auto" onClick={()=>setModal(true)}>Больше информации</a>

        <Modal 
            content={<>
                <h5 className="text-center text-4xl my-6 font-bold">
                    Оставить заявку
                </h5>
                <div>
                    <input onChange={h} aria-label="name" type="text" name="name" placeholder="Ваше имя" className="input blacki boldi" />
                    <input onChange={h} aria-label="phone" type="tel" name="phone" placeholder="+7(999)999-9999" className="input blacki boldi" />
                    <textarea onChange={h} aria-label="text" name="text" placeholder="Коротко опишите запрос" rows={3} className="input blacki boldi" style={{height: '102px'}}></textarea>
                    <button onClick={send} type="submit" className="btn blue font-semibold w-full" >
                    Отправить
                    </button>
                </div>
            </>} 
            close={!modal} 
            onClose={()=> setModal(false)}
        /> */}
    </>
}