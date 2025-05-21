import { useState } from 'react'
import Hero from '../elements/Hero'
import QuestionBlock from '../elements/QuestionBlock'
import Modal from '../elements/Modal'
import useForm from '../hooks/useForm';

export default function Info({}){
    const [modal, setModal] = useState(false);
    const [h,send] = useForm({phone: '', name: '', text: ''})
    return <>
        
        <Hero slides={[{
            bg: 'media/hero_plane.png',
            title: 'Информация о компании'
        }]} ch={245}/>




        {/* <section className="my-16 md:my-32">
            <div className="p-8 md:p-16 mx-auto" style={{width: '85vw', maxWidth: '1080px', background: '#d0d0d0', border: '3px solid #537ca6', borderRadius: '20px', color: '#000'}}>
            <p className="text-xl md:text-3xl font-semibold text-center">
                Компетентность «SAFE DECISION» в сфере доставки грузов из Китая позволяет нам осуществлять этот процесс быстро и освобождать наших клиентов от множества проблем и переживаний за сохранность и целостность грузов. Сотрудники нашей компании – профессионалы в этой области, поэтому мы можем гарантировать быструю доставку грузов и адекватные цены на наши услуги.
            </p>
            </div>
        </section> */}
        
        <section className="my-16 md:my-32">
            <div className="p-8 md:p-16 mx-auto" style={{width: '85vw', maxWidth: '1080px', background: '#d0d0d0', border: '3px solid #537ca6', borderRadius: '20px', color: '#000'}}>
            <p className="text-xl md:text-3xl font-semibold text-center">
                Компетентность «SAFE DECISION» в сфере анализа и подбора товаров позволяет нам осуществлять этот процесс быстро, а наработаная сеть различных пратнеров освобождать наших клиентов от множества проблем и переживаний за упаковку и доставку товаров. Сотрудники нашей компании – профессионалы в этой области, поэтому мы можем гарантировать качество товаров и адекватные цены на наши услуги.
            </p>
            </div>
        </section>

        
        


        {/* <section className="w-full md:mx-auto my-16 text-black font-semibold">
        
            <div className="flex items-center w-full mb-16">
            <div style={{width: 'calc(50vw - 420px)', minWidth: '20px', height: '1px', background: '#333333'}}></div>
            <div className="p-6 md:p-8 font-extralight border border-black rounded-xl" style={{minWidth: '380px', maxWidth: '840px'}}>
                <h1 className="text-center text-2xl md:text-3xl font-semibold">
                Наши преимущества, чтобы закупка партии товаров в Китае была не сложнее, чем в России:
                </h1>
            </div>
            <div style={{width: 'calc(50vw - 420px)', minWidth: '20px', height: '1px', background: '#333333'}}></div>
            </div>


            <div className="flex flex-col items-center w-full md:w-4/6 mx-auto text-center md:text-left">

            <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
                <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
                <div>1</div>
                <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <p className="text-center md:w-11/12 md:text-left">
                Таможенное оформление в самые короткие сроки
                </p>
            </div>
            <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
                <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
                <div>2</div>
                <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <p className="text-center md:w-11/12 md:text-left">
                Процедура оформления в соответствие с требованиями ВТТ (внутренний таможенный транзит)
                </p>
            </div>
            <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
                <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
                <div>3</div>
                <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <p className="text-center md:w-11/12 md:text-left">
                Процедура оформления страховки и сопровождения груза в процессе доставки
                </p>
            </div>
            <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
                <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
                <div>4</div>
                <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <p className="text-center md:w-11/12 md:text-left">
                Оказание посреднических услуг во время приобретения клиентом продукции у китайских продавцов и производителей
                </p>
            </div>

            </div>
        </section>


        
        <section>
            <div className="w-full mb-16 md:mb-32 flex flex-col items-center">
            <div style={{width: '80vw', height: '1px', background: '#ababab'}}></div>
            <div className="mx-4 font-extralight">
                <p className="text-center text-lg md:text-xl my-4 font-extralight text-black md:w-2/3 mx-auto">
                Грузовые перевозки автомобильным, железнодорожным, морским или авиатранспортом, мультимодальная доставка, перевозка сборных грузов в контейнерах – нет таких задач, которые были бы не под силу компании <br/>
                <b>«SAFE DECISION».</b>
                </p>
            </div>
            <div style={{width: '80vw', height: '1px', background: '#ababab'}}></div>
            </div>
        </section>





        <section className="w-full md:mx-auto my-16 text-black font-semibold">
        
            <div className="flex items-center w-full mb-16">
            <div style={{width: 'calc(50vw - 220px)', minWidth: '50px', height: '1px', background: '#333333'}}></div>
            <div className="p-6 md:p-8 font-extralight border border-black rounded-xl" style={{minWidth: '380px', maxWidth: '440px'}}>
                <h1 className="text-center text-2xl md:text-3xl font-semibold">
                Дополнительная помощь
                </h1>
            </div>
            <div style={{width: 'calc(50vw - 220px)', minWidth: '50px', height: '1px', background: '#333333'}}></div>
            </div>


            <div className="flex flex-col items-center w-full md:w-4/6 mx-auto text-center md:text-left">

            <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
                <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
                <div>1</div>
                <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <p className="text-center md:w-11/12 md:text-left">
                Консолидация и хранение грузов на складах.
                </p>
            </div>
            <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
                <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
                <div>2</div>
                <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <p className="text-center md:w-11/12 md:text-left">
                Оформление товарно-сопроводительной документации.
                </p>
            </div>
            <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
                <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
                <div>3</div>
                <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <p className="text-center md:w-11/12 md:text-left">
                Страхование грузов от всевозможных рисков.
                </p>
            </div>
            

            </div>
        </section> */}

        

        <a onClick={()=>setModal(true)} className="btn blue block text-center font-semibold my-16 mx-auto" role="button">Оставить заявку</a>
        <Modal
            content={<>
                <h5 className="text-center text-4xl my-6 font-bold">
                   Оставить заявку
                </h5>
                <div>
                    <input onChange={h} aria-label="name" type="text" name="name" placeholder="Ваше имя" className="input blacki boldi" />
                    <input onChange={h} aria-label="phone" type="tel" name="phone" placeholder="+7(999)999-9999" className="input blacki boldi" />
                    <textarea onChange={h} aria-label="textarea" name="textarea" placeholder="Коротко опишите запрос" rows={3} className="input blacki boldi" style={{height: '102px'}}></textarea>
                    <button onClick={send} type="submit" className="btn blue font-semibold w-full" >
                    Отправить
                    </button>
                </div>
            </>} 
            close={!modal} 
            onClose={()=> setModal(false)}
        />


        <QuestionBlock />
    </>
}