import { useEffect, useState } from 'react'
import Hero from '../elements/Hero'
import QuestionBlock from '../elements/QuestionBlock'
import Quiz from '../elements/Quz';
import AOS from 'aos';
import useContent from '../hooks/useContent';


const defaultContent = {
    hero: {
      title: 'SAFE-DECISION',
      subtitle: 'Мы стремимся, чтобы закупка партии товаров в Китае была не сложнее, чем в России',
    },
    info: {
      title: 'Мы российско-китайская логистическая компания',
      points: [
        'Склады по всему Китаю',
        'У нас проверенные партнеры',
        'Все сотрудники отдела закупок - китайцы',
      ],
      highlighted: ['Самые', 'выгодные', 'цены'],
      moreLinkText: 'Подробнее',
    },
    competence: {
      text: `Компетентность «SAFE DECISION» в сфере анализа и подбора товаров позволяет нам осуществлять этот процесс быстро, а наработаная сеть различных пратнеров освобождать наших клиентов от множества проблем и переживаний за упаковку и доставку товаров. Сотрудники нашей компании – профессионалы в этой области, поэтому мы можем гарантировать качество товаров и адекватные цены на наши услуги.`,
    },
    benefits: {
      title: 'Наши преимущества, чтобы закупка партии товаров в Китае была не сложнее, чем в России:',
      list: [
        'Таможенное оформление в самые короткие сроки',
        'Процедура оформления в соответствие с требованиями ВТТ (внутренний таможенный транзит)',
        'Процедура оформления страховки и сопровождения груза в процессе доставки',
        'Оказание посреднических услуг во время приобретения клиентом продукции у китайских продавцов и производителей',
      ],
    },
    services: {
      text: `Грузовые перевозки автомобильным, железнодорожным, морским или авиатранспортом, мультимодальная доставка, перевозка сборных грузов в контейнерах – нет таких задач, которые были бы не под силу компании`,
    },
    extraHelp: {
      title: 'Дополнительная помощь',
      list: [
        'Консолидация и хранение грузов на складах.',
        'Оформление товарно-сопроводительной документации.',
        'Страхование грузов от всевозможных рисков.',
      ],
    },
  };
  

export default function Info(){
    const content = useContent();
    const res = {...defaultContent, ...(content.infoPage||{})};
    useEffect(() => {
        AOS.init({
              duration: 800, // длительность анимации в мс
              once: true,    // анимация только при первом скролле
            });
    }, []);
    return <>
        
        <Hero title='SAFE-DECISION' subtitle='Мы стремимся, чтобы закупка партии товаров в Китае была не сложнее, чем в России' buttons={<></>}/>

        <section id="info" className="s2 w-full overflow-hidden pt-16">
            <div data-aos='fade-up' className="flex flex-col items-center md:pt-28 md:px-36">
                <div className="flex flex-wrap-reverse">
                    <div className="font-extralight" style={{marginLeft: '32px'}}>
                    <div className="text-lg text-3xl mb-8">
                        {/* Мы российско-китайская <br/> логистическая компания: */}
                        {res.info.title.split(' ').slice(0,2).join(' ')}
                        <br />
                        {res.info.title.split(' ').slice(2).join(' ')}
                    </div>
                    {res.info.points.map(el=><div key={el} className="flex items-center">
                            <div className="w-40 md:w-48" style={{height: '1px', background: '#d8d8d8'}}></div><div style={{width: '5px', height: '5px', borderRadius: '5px', background: '#fff'}}></div> 
                            <div className="ml-4">
                                {el}
                            </div>
                        </div>
                    )}
                    </div>
                    <div className="hidden md:block text-7xl font-semibold" style={{marginTop: '-48px', marginLeft: '-74px', color: '#d8d8d8'}}>
                    <div className="text-9xl">{res.info.highlighted[0]}</div>
                    <div className="text-center">{res.info.highlighted[1]} </div>
                    <div style={{marginLeft: '360px'}}>{res.info.highlighted[2]}</div>
                    </div>
                    <div className="block md:hidden flex justify-between w-full text-4xl m-8 font-semibold">
                    <div>
                        <div className="text-7xl">{res.info.highlighted[0]}</div>
                        <div>{res.info.highlighted[1]} </div>
                        <div>{res.info.highlighted[2]}</div>
                    </div>
                    <div data-aos="fade-left">
                        <img src="media/ch_flag.png" alt="" style={{width: '140px'}} /> 
                        <img src="media/ru_flag.png" alt="" style={{width: '112px', marginLeft: '14px', transform: 'rotate(-18deg)'}} /> 
                    </div>
                    </div>
                </div>
                <div className="flex items-center mt-8 mx-6 py-16 md:pt-1">
                    <a href="#QuestionBlock" className="block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold mb-2 p-2 md:py-3 px-6 rounded-lg transition text-center md:text-start" >
                        {res.info.moreLinkText}
                    </a>
                    <div className="w-full" style={{height: '1px', background: '#d8d8d8'}}></div>
                </div>
            </div>    
        </section>


        
        <section className="my-16 md:my-32">
            <div className="p-8 md:p-16 mx-auto">
            <p className="text-xl md:text-3xl font-semibold text-center">
                {res.competence.text}
            </p>
            </div>
        </section>

        
        


        <section className="w-full md:mx-auto my-16 font-semibold">
        
            <div className="flex items-center w-full mb-16">
            <div style={{width: 'calc(50vw - 420px)', minWidth: '20px', height: '1px', background: 'rgb(187, 146, 0)'}}></div>
            <div className="p-4 md:p-8 font-extralight border rounded-xl" style={{minWidth: '320px', maxWidth: '840px', borderColor: 'rgb(187, 146, 0)'}}>
                <h1 className="text-center text-2xl md:text-3xl font-semibold">
                    {res.benefits.title}
                </h1>
            </div>
            <div style={{width: 'calc(50vw - 420px)', minWidth: '20px', height: '1px', background: 'rgb(187, 146, 0)'}}></div>
            </div>


            <div className="flex flex-col items-center w-full md:w-4/6 mx-auto text-center md:text-left">

                {res.benefits.list.map((el, i)=><div key={el} className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
                    <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
                    <div>{i+1}</div>
                    <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                    </div>
                    <p className="text-center md:w-11/12 md:text-left">
                        {el}
                    </p>
                </div>
                )}

            </div>
        </section>


        
        <section>
            <div data-aos='zoom-in' className="w-full mb-16 md:mb-32 flex flex-col items-center">
            <div style={{width: '80vw', height: '1px', background: '#ababab'}}></div>
            <div className="mx-4 font-extralight">
                <p className="text-center text-lg md:text-xl my-4 font-extralight md:w-2/3 mx-auto">
                {res.services.text}
                <b>«SAFE DECISION».</b>
                </p>
            </div>
            <div style={{width: '80vw', height: '1px', background: '#ababab'}}></div>
            </div>
        </section>





        <section className="w-full md:mx-auto my-16 font-semibold">
        
            <div className="flex items-center w-full mb-16">
            <div style={{width: 'calc(50vw - 120px)', minWidth: '50px', height: '1px', background: 'rgb(187, 146, 0)'}}></div>
            <div className="p-4 md:p-8 font-extralight border border-black rounded-xl" style={{minWidth: '320px', maxWidth: '640px', borderColor: 'rgb(187, 146, 0)'}}>
                <h1 className="text-center text-2xl md:text-3xl font-semibold">
                    {res.extraHelp.title}
                </h1>
            </div>
            <div style={{width: 'calc(50vw - 120px)', minWidth: '50px', height: '1px', background: 'rgb(187, 146, 0)'}}></div>
            </div>


            <div className="flex flex-col items-center w-full md:w-1/2 mx-auto text-center md:text-left">

                {res.extraHelp.list.map((el,i)=><div key={el} className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
                    <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
                    <div>{i+1}</div>
                    <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                    </div>
                    <p className="text-center md:w-11/12 md:text-left">
                        {el}
                    </p>
                </div>
                )}          

            </div>
        </section>

        

        <Quiz />


        <QuestionBlock />
    </>
}