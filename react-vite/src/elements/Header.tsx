import React, { useEffect } from 'react'
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
    <header className="relative py-2 md:py-6 fixed top-0 left-0 w-screen z-20">
        <div className="mx-auto flex flex-wrap justify-between items-center pl-2">
            <div className="logo md:text-lg text-base w-full md:w-auto px-6 py-4 md:py-auto" style={{lineHeight: '25px'}}>
                <a onClick={nav} href="/" style={{color: 'white'}}>
                    <img src="media/logo.png" alt="logo" className='w-12 h-7 md:w-18 md:h-11 invert mr-2 md:mx-2 md:ms-auto mx-auto inline'/>
                    <span style={{fontWeight: 700}}>Безопасное</span>  Решение
                </a>
            </div>
            <div className='w-full max-w-[700px] md:w-4/5'>
                <nav>
                <ul className="flex flex-wrap justify-center items-center gap-4 gap-y-2 md:gap-8 text-sm md:text-base px-6">
                    {/* <li className="hidden md:block"><a onClick={nav} href="#about" className="text-white hover:text-gray-400">{{header_about}}</a></li> */}
                    <li className="hidden md:block"><a onClick={nav} href="/" className="text-white hover:text-gray-400">Главная</a></li>
                    <li><a onClick={nav} href="/delivery" className="text-white hover:text-gray-400">Маршруты</a></li>
                    <li><a onClick={nav} href="/cooperation" className="text-white hover:text-gray-400">Услуги</a></li>
                    {/* <li><a onClick={nav} href="/additional" className="text-white hover:text-gray-400">Доп услуги</a></li>e */}
                    {/* <li><a onClick={nav} href="/faq" className="text-white hover:text-gray-400">F.A.Q.</a></li> */}
                    <li><a onClick={nav} href="/reviews" className="text-white hover:text-gray-400">Кейсы</a></li>
                    <li><a onClick={nav} href="/info" className="text-white hover:text-gray-400">О нас</a></li>
                    <li><a onClick={nav} href="/contacts" className="text-white hover:text-gray-400">Контакты</a></li>
                </ul>
                </nav>
            </div>
            <a href="tel: +74955653845" className='absolute top-5 right-4 md:static w-[30px] md:w-[45px]'> 
                <img src="media/phone_ico.png" alt="" style={{width: '100%'}} /> 
            </a>
        </div>
    </header>
    <div className='w-[100vh] h-[78px] hidden md:block'></div>
    </>
}