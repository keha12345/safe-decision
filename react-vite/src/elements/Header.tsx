import { useEffect } from 'react'
import { useNavigate } from 'react-router';

export default function Header({}){
    let navigate = useNavigate();

    const nav = (e: React.MouseEvent) =>{
        e.preventDefault();        
        navigate((e.currentTarget as HTMLAnchorElement).href.replace(window.location.origin,''))
    }

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    })

    return <>
    <header className="py-2 md:py-6 fixed top-0 left-0 w-screen z-20">
        <div className="mx-auto flex justify-evenly md:justify-between items-center px-2">
        <div className="logo text-lg" style={{lineHeight: '25px'}}>
            <a onClick={nav} href="/" style={{color: 'inherit'}}>
            <span style={{fontWeight: 700}}>Safe</span> Decision
            </a>
        </div>
        <div style={{minWidth: '340px'}}>
            <nav>
            <ul className="flex justify-evenly md:items-center gap-2 md:gap-8 pl-2 flex-wrap text-sm md:text-base">
                {/* <li className="hidden md:block"><a onClick={nav} href="#about" className="hover:text-gray-400">{{header_about}}</a></li> */}
                <li><a onClick={nav} href="/delivery" className="hover:text-gray-400">Доставка</a></li>
                <li><a onClick={nav} href="/additional" className="hover:text-gray-400">Доп услуги</a></li>
                <li><a onClick={nav} href="/faq" className="hover:text-gray-400">F.A.Q.</a></li>
                <li className="hidden md:block"><a onClick={nav} href="/cooperation" className="hover:text-gray-400">Сотрудничество</a></li>
                <li><a onClick={nav} href="/info" className="hover:text-gray-400">О нас</a></li>
                <li><a onClick={nav} href="/contacts" className="hover:text-gray-400">Контакты</a></li>
            </ul>
            </nav>
        </div>
        <div className="flex justify-end relative"  style={{width: '155px'}}>
            <a onClick={nav} className="tn-atom" href="tel: +74955653845"> 
            <img src="media/phone_ico.png" alt=""  style={{width: '30px'}} /> 
            </a>
        </div>
        </div>
    </header>
    <div style={{
        height: '78px', 
        width: '100vw',
        background: '#000',
    }}></div>
    </>
}