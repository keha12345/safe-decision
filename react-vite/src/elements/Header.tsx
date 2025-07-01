import { useEffect } from 'react'
import { useNavigate } from 'react-router';

const prefix = window.location.href.includes('github')? '/safe-decision':'';

export default function Header({}){
    let navigate = useNavigate();

    const nav = (e: React.MouseEvent) =>{
        e.preventDefault();        
        navigate(prefix+(e.currentTarget as HTMLAnchorElement).href.replace(window.location.origin,''))
    }

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    })

    return <>
    <header className="py-2 md:py-6 fixed top-0 left-0 w-screen z-20">
        <div className="mx-auto flex justify-evenly md:justify-between items-center pl-2">
        <div className="logo text-lg" style={{lineHeight: '25px'}}>
            <a onClick={nav} href="/" style={{color: 'white'}}>
            <span style={{fontWeight: 700}}>Safe</span> Decision
            </a>
        </div>
        <div style={{width: '80%', maxWidth: '700px'}}>
            <nav>
            <ul className="flex flex-wrap justify-start md:items-center gap-4 gap-y-2 md:gap-8 text-sm md:text-base px-6">
                {/* <li className="hidden md:block"><a onClick={nav} href="#about" className="text-white hover:text-gray-400">{{header_about}}</a></li> */}
                <li className="hidden md:block"><a onClick={nav} href="/" className="text-white hover:text-gray-400">Главная</a></li>
                <li><a onClick={nav} href="/delivery" className="text-white hover:text-gray-400">Услуги</a></li>
                <li><a onClick={nav} href="/cooperation" className="text-white hover:text-gray-400">Сотрудничество</a></li>
                {/* <li><a onClick={nav} href="/additional" className="text-white hover:text-gray-400">Доп услуги</a></li>e */}
                {/* <li><a onClick={nav} href="/faq" className="text-white hover:text-gray-400">F.A.Q.</a></li> */}
                <li><a onClick={nav} href="/#Faq" className="text-white hover:text-gray-400">F.A.Q.</a></li>
                <li><a onClick={nav} href="/info" className="text-white hover:text-gray-400">О нас</a></li>
                <li><a onClick={nav} href="/contacts" className="text-white hover:text-gray-400">Контакты</a></li>
            </ul>
            </nav>
        </div>
        <a href="tel: +74955653845" style={{width: '45px'}}> 
            <img src="media/phone_ico.png" alt="" style={{width: '100%'}} /> 
        </a>
        </div>
    </header>
    <div style={{
        height: '78px', 
        width: '100vw',
    }}></div>
    </>
}