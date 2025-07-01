import { useEffect } from 'react'
import { useNavigate } from 'react-router';

const prefix = window.location.href.includes('github')? '/safe-decision':'';;

export default function Footer({}){
    let navigate = useNavigate();

    const nav = (e: React.MouseEvent) =>{
        e.preventDefault();    
        const address = (e.currentTarget as HTMLAnchorElement).href.replace(window.location.origin,'');    
        navigate(address);
        
    }

    useEffect(()=>{
        const hash = window.location.href.split('#')[1]?.split('/')[0];
        if (hash) {
            const el = document.getElementById(hash);
            if (el) {
            window.scrollTo({
                top: el.offsetTop,
                behavior: 'smooth',
            });
            }
        }
    })

    return <>
    <section style={{minHeight: '480px', background: 'rgb(0, 0, 0)'}} className="p-16 text-extralight">
        <div className="flex justify-evenly flex-wrap gap-8">
        <div className="flex flex-col items-center md:items-start gap-4 mx-auto md:mx-0">
            <img className="w-24" src="media/logo.png" alt="" />
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
            <a onClick={nav} href={`${prefix}/`} className="font-bold pb-4">Главная</a>
            <a onClick={nav} href={`${prefix}/#DeliverySlider`}>Слайдер</a>
            <a onClick={nav} href={`${prefix}/#info`}>О нас</a>
            <a onClick={nav} href={`${prefix}/#Advantages`}>Ваша выгода</a>
            <a onClick={nav} href={`${prefix}/#DeliverySlider`}>Тарифы и сроки</a>
            <a onClick={nav} href={`${prefix}/#DeliverySlider`}>Маршруты</a> 
            <a onClick={nav} href={`${prefix}/#QuestionBlock`}>Бесплатная консультация</a>
            <a onClick={nav} href={`${prefix}/#Faq`}>F.A.Q.</a>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
            <div className="font-bold pb-4">Подробная информация</div>
            <a onClick={nav} href={`${prefix}/cooperation`}>Варианты сотрудничества с нами</a>
            <a onClick={nav} href={`${prefix}/delivery`}>Тарифы и сроки</a>
            <a onClick={nav} href={`${prefix}/delivery`}>Дополнительные услуги</a>
            <a onClick={nav} href={`${prefix}/info`}>Информация о компании</a>
            <a onClick={nav} href={`${prefix}/contacts`}>Контакты</a>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 text-sm" style={{width: '216px', lineHeight: '19px'}}>
            <p><span style={{fontWeight: 600}}>ООО:</span> «Безопасное решение»</p>
            <p><span style={{fontWeight: 600}}>ОГРН:</span> 1227700895872</p>
            <p className="text-center md:text-left">Вся информация на сайте представлена для ознакомления и не является публичной офертой</p>
        </div>
        </div>
        
    </section>    
    </>
}