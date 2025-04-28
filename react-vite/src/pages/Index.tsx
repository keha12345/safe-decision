import { useState } from 'react'
import Hero from '../elements/Hero'
import Accardion from '../elements/Accardion'
import Modal from '../elements/Modal'
import useForm from '../hooks/useForm'

const prefix = window.location.href.includes('github')? '/save-decision':'';;

export default function Index({}){
    const [modal, setModal] = useState(false)
    const [h,send] = useForm({phone: '', name: '', text: ''})

    return <>
        <Hero slides={[
                {
                    bg: 'media/hero1.png',
                    title: <>Качественно -<br/> не значит «дорого»</>,
                    description: <>
                        Доставка товаров из Китая оптом <br/>
                        От <strong style={{fontWeight: 700, color: 'rgb(37, 211, 102)'}}>1.7$</strong> за кг.
                    </>,
                    btns: <><a className="btn ellow inline-block m-1" onClick={()=>setModal(true)}>Узнать стоимость доставки</a>
                    <a className="btn green inline-block m-1" href="https://wa.me/79917888378">WhatsApp</a></>
                },
                {
                    bg: 'media/hero2.png',
                    title: 'Тарифы и сроки доставки',
                    description: 'Подберите оптимальный для вас вариант транспортировки',
                    btns: <a className="btn ellow inline-block m-1" onClick={()=>setModal(true)}>Узнать подробнее</a>
                },
                {
                    bg: 'media/hero3.png',
                    title: 'Консультация под Wildberries',
                    description: 'Поможем заработать на маркетплейсе',
                    btns: <a className="btn ellow inline-block m-1" onClick={()=>setModal(true)}>Узнать подробнее</a>
                },
                {
                    bg: 'media/hero4.png',
                    title: 'Выездная проверка поставщика',
                    description: 'Узнайте как проходит проверка производства',
                    btns: <a className="btn ellow inline-block m-1" onClick={()=>setModal(true)}>Узнать подробнее</a>
                }
                ]
        } />
        <section id="info" className="s2">
            <div className="s2c md:pt-28 md:px-36">
                <div className="flex flex-wrap-reverse">
                    <div className="font-extralight" style={{marginLeft: '32px'}}>
                    <div className="text-lg text-3xl mb-8">Мы российско-китайская<br/>логистическая компания:</div>
                    <div className="flex items-center">
                        <div className="w-40 md:w-48" style={{height: '1px', background: '#d8d8d8'}}></div><div style={{width: '5px', height: '5px', borderRadius: '5px', background: '#fff'}}></div> 
                        <div className="ml-4">Склады по всему Китаю</div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-40 md:w-48" style={{height: '1px', background: '#d8d8d8'}}></div><div style={{width: '5px', height: '5px', borderRadius: '5px', background: '#fff'}}></div> 
                        <div className="ml-4">Офис в Китае</div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-40 md:w-48" style={{height: '1px', background: '#d8d8d8'}}></div><div style={{width: '5px', height: '5px', borderRadius: '5px', background: '#fff'}}></div> 
                        <div className="ml-4" style={{height: '1.5em', maxWidth: '50vw'}}>Все сотрудники отдела закупок-китайцы</div>
                    </div>
                    </div>
                    <div className="hidden md:block text-7xl font-semibold" style={{marginTop: '-48px', marginLeft: '-74px', color: '#d8d8d8'}}>
                    <div className="text-9xl">Самые</div>
                    <div className="text-center">выгодные </div>
                    <div style={{marginLeft: '360px'}}>цены</div>
                    </div>
                    <div className="block md:hidden flex justify-between w-full text-4xl m-8 font-semibold">
                    <div>
                        <div className="text-7xl">Самые</div>
                        <div>выгодные </div>
                        <div>цены</div>
                    </div>
                    <div>
                        <img src="media/ch_flag.png" alt="" style={{width: '140px'}} /> 
                        <img src="media/ru_flag.png" alt="" style={{width: '112px', marginLeft: '14px', transform: 'rotate(-18deg)'}} /> 
                    </div>
                    </div>
                </div>
                <div className="flex items-center mt-8 mx-6 py-16 md:pt-1">
                    <a className="btn white inline-block text-center font-semibold" href={`${prefix}/#delivery`}>Подробнее</a>
                    <div className="w-full" style={{height: '1px', background: '#d8d8d8'}}></div>
                </div>
            </div>    
        </section>


        <section id="win" className="w-sm mx-auto md:m-32 md:mx-48 text-black font-semibold">
            <h1 className="text-center text-3xl md:text-4xl my-16 md:my-32">Мы любим дело, которое делаем:</h1>
            <div className="benif flex flex-wrap text-center md:text-left">

            <div className="it w-1/2 p-8">
                <div className="text-4xl relative">
                <div>1</div>
                <img src="media/decor.png" style={{height: '48px'}} className="absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <h1 className="text-2xl md:text-4xl my-4">Прозрачное ценообразование</h1>
                <p className="font-light">
                Наши цены сразу включают в себя все дополнительные расходы, что помогает вам избежать неприятных сюрпризов и вы понимаете за что именно платите
                </p>
            </div>
            <div className="it w-1/2 p-8">
                <div className="text-4xl relative">
                <div>2</div>
                <img src="media/decor.png" style={{height: '48px'}} className="absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <h1 className="text-2xl md:text-4xl my-4">Сотрудники – носители языка</h1>
                <p className="font-light">
                Все сотрудники отдела закупок – носители китайского языка Это позволяет нам получить самые выгодные цены на товар, а также в кратчайшие сроки получить ответ на запрос от поставщика
                </p>
            </div>
            <div className="it w-1/2 p-8">
                <div className="text-4xl relative">
                <div>3</div>
                <img src="media/decor.png" style={{height: '48px'}} className="absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <h1 className="text-2xl md:text-4xl my-4">Собственные склады по всему Китаю</h1>
                <p className="font-light">
                Это позволяет нам уберечь вас от ненужных расходов
                </p>
            </div>
            <div className="it w-1/2 p-8">
                <div className="text-4xl relative">
                <div>4</div>
                <img src="media/decor.png" style={{height: '48px'}} className="absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <h1 className="text-2xl md:text-4xl my-4">Юридические и Физические лица</h1>
                <p className="font-light">
                Работаем как с юр лицами, так и с физ лицами
                </p>
            </div>
            <div className="it w-1/2 p-8">
                <div className="text-4xl relative">
                <div>5</div>
                <img src="media/decor.png" style={{height: '48px'}} className="absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <h1 className="text-2xl md:text-4xl my-4">Поиск и проверка товара</h1>
                <p className="font-light">
                Тщательно ищем и проверяем товар перед отправкой. Предоставляем «живые» фото-видео товара, проверяем документы на товар, осуществляем выездные проверки на фабрики к поставщикам
                </p>
            </div>
            <div className="it w-1/2 p-8">
                <div className="text-4xl relative">
                <div>6</div>
                <img src="media/decor.png" style={{height: '48px'}} className="absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <h1 className="text-2xl md:text-4xl my-4">Регистрация в Китае</h1>
                <p className="font-light">
                Компания зарегистрирована в Китае. Это означает, что мы имеем полные юридические права, в рамках китайского законодательства
                </p>
            </div>
            <div className="it w-1/2 p-8">
                <div className="text-4xl relative">
                <div>7</div>
                <img src="media/decor.png" style={{height: '48px'}} className="absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <h1 className="text-2xl md:text-4xl my-4">Сроки</h1>
                <p className="font-light">
                Соблюдаем сроки доставки и прописываем их в договоре
                </p>
            </div>
            <div className="it w-1/2 p-8">
                <div className="text-4xl relative">
                <div>8</div>
                <img src="media/decor.png" style={{height: '48px'}} className="absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <h1 className="text-2xl md:text-4xl my-4">Страховка товара</h1>
                <p className="font-light">
                Страхуем товар не только от потери, но и от брака
                </p>
            </div>
            <div className="it w-1/2 p-8">
                <div className="text-4xl relative">
                <div>9</div>
                <img src="media/decor.png" style={{height: '48px'}} className="absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <h1 className="text-2xl md:text-4xl my-4">Офис в Китае</h1>
                <p className="font-light">
                Наш офис находится в городе Гуанчжоу, что позволяет нам полноценно контролировать качественное выполнение работы
                </p>
            </div>
            <div className="it w-1/2 p-8">
                <div className="text-4xl relative">
                <div>10</div>
                <img src="media/decor.png" style={{height: '48px'}} className="absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
                </div>
                <h1 className="text-2xl md:text-4xl my-4">Быстрый выкуп</h1>
                <p className="font-light">
                Выкуп товара за 1-2 дня
                </p>
            </div>
            
            </div>
        </section>

        <section id="delivery" className="w-sm mx-auto md:m-32 md:mx-48 text-black">
            <h1 className="text-center text-3xl md:text-5xl font-semibold mt-24 mb-4">Тарифы и сроки</h1>
            <h5 className="text-center text-xl font-light mb-24">Стоимость рассчитывается исходя от веса и плотности груза</h5>
            <div className="flex flex-wrap justify-center md:justify-evenly gap-4">

            <div className="price-card flex flex-col justify-evenly items-center">
                <img style={{height: '28px', display: 'inline'}} src="media/plane.png" alt="" />
                <div>
                <h5 className="text-center text-4xl font-semibold">Aвиа</h5>
                <div style={{height: '2px', width: '200px', margin: '6px', background: '#597eb3'}}></div>
                </div>
                <div style={{lineHeight: '42px'}} className="font-light mb-4">
                <span className="font-semibold">Сроки:</span> 8 - 12 дней <br/>
                <span className="font-semibold">Цена:</span> от 5$ за кг <br/>
                <span className="font-semibold">Хранение:</span> бесплатно <br/>
                <span className="font-semibold">Маршруты:</span><div style={{lineHeight: '24px', minHeight: '48px'}}>- Пекин-Москва <br/></div>
                </div>
            </div>
            <div className="price-card flex flex-col justify-evenly items-center">
                <img style={{height: '28px', display: 'inline'}} src="media/planeNcar.png" alt=""/>
                <div>
                <h5 className="text-center text-4xl font-semibold">Aвиа + авто</h5>
                <div style={{height: '2px', width: '200px', margin: '6px', background: '#597eb3'}}></div>
                </div>
                <div style={{lineHeight: '42px'}} className="font-light mb-4">
                <span className="font-semibold">Сроки:</span>  12 - 18 дней <br/>
                <span className="font-semibold">Цена:</span> от 2.7$ за кг <br/>
                <span className="font-semibold">Хранение:</span> бесплатно <br/>
                <span className="font-semibold">Маршруты:</span><div style={{lineHeight: '24px', minHeight: '48px'}}>- Гуанчжоу-Москва<br/>- Иу-Москва<br/></div>
                </div>
            </div>
            <div className="price-card flex flex-col justify-evenly items-center">
                <img style={{height: '28px', display: 'inline'}} src="media/car.png" alt="" />
                <div>
                <h5 className="text-center text-4xl font-semibold">Авто</h5>
                <div style={{height: '2px', width: '200px', margin: '6px', background: '#597eb3'}}></div>
                </div>
                <div style={{lineHeight: '42px'}} className="font-light mb-4">
                <span className="font-semibold">Сроки:</span> 20 - 30 дней <br/>
                <span className="font-semibold">Цена:</span> от 2.3$ за кг <br/>
                <span className="font-semibold">Хранение:</span> бесплатно <br/>
                <span className="font-semibold">Маршруты:</span><div style={{lineHeight: '24px', minHeight: '48px'}}>- Гуанчжоу-Москва<br/>- Иу-Москва<br/></div>
                </div>
            </div>
            <div className="price-card flex flex-col justify-evenly items-center">
                <img style={{height: '28px', display: 'inline'}} src="media/train.png" alt="" />
                <div>
                <h5 className="text-center text-4xl font-semibold">Ж/Д</h5>
                <div style={{height: '2px', width: '200px', margin: '6px', background: '#597eb3'}}></div>
                </div>
                <div style={{lineHeight: '42px'}} className="font-light mb-4">
                <span className="font-semibold">Сроки:</span> 40 - 60 дней <br/>
                <span className="font-semibold">Цена:</span> от 1.7$ за кг <br/>
                <span className="font-semibold">Хранение:</span> бесплатно <br/>
                <span className="font-semibold">Маршруты:</span><div style={{lineHeight: '24px', minHeight: '48px'}}>- Гуанчжоу-Москва<br/>- Иу-Москва<br/></div>
                </div>
            </div>

            </div>
            <a className="btn blue block text-center font-semibold my-16 mx-auto" onClick={()=>setModal(true)}>Рассчитать стоимость</a>
        </section>



        <section className="w-sm mx-auto md:m-32 md:mx-48 text-black relative">
            <h1 className="text-center text-3xl md:text-5xl font-semibold mt-24 mb-4">Алгоритм работы</h1>
            <h5 className="text-center text-xl font-light mb-24">Срок бесплатного хранения на складе в Москве составляет 3 дня</h5>
            <div className="alg flex flex-col gep-4 items-center text-base">
            
            <div>
                <h5 className="text-2xl md:text-4xl font-semibold">Заявка</h5>
                <p>Вы оставляете заявку на сайте</p>
            </div>
            <div>
                <h5 className="text-2xl md:text-4xl font-semibold">Обратная связь</h5>
                <p>С вами связывается наш специалист для консультации и получения подробной информации</p>
            </div>
            <div>
                <h5 className="text-2xl md:text-4xl font-semibold">Коммерческое предложение</h5>
                <p>Мы подготавливаем и отправляем вам индивидуальное коммерческое предложение</p>
            </div>
            <div>
                <h5 className="text-2xl md:text-4xl font-semibold">Договор</h5>
                <p>Обговариваем все условия сотрудничества, составляем договор и подписываем его</p>
            </div>
            <div>
                <h5 className="text-2xl md:text-4xl font-semibold">Страхование товара</h5>
                <p>После закупки нужного товара, мы его страхуем чтобы вы <b style={{fontWeight: 600}}>НЕ</b> понесли убытки</p>
            </div>
            <div>
                <h5 className="text-2xl md:text-4xl font-semibold">Доставка</h5>
                <p>Доставляем товар до Москвы, где он хранится на нашем складе бесплатно*</p>
            </div>

            </div>
            <img src="media/point.png" style={{height: '20px', width: '16px', marginLeft: '-4.5px'}} className="absolute -mt-4 top-56 md:mt-0 md:top-48 left-1 md:left-1/2" />
            <div id="road" className="flex flex-col items-center absolute top-56 md:top-52 left-1 md:left-1/2">
            <div style={{width: '7px', height: '7px', borderRadius: '7px', background: '#004b88'}}></div> 
            <div style={{width: '2px', height: '197px', background: '#004b88'}}></div>
            <div style={{width: '7px', height: '7px', borderRadius: '7px', background: '#004b88'}}></div> 
            <div style={{width: '2px', height: '197px', background: '#004b88'}}></div>
            <div style={{width: '7px', height: '7px', borderRadius: '7px', background: '#004b88'}}></div> 
            <div style={{width: '2px', height: '197px', background: '#004b88'}}></div>
            <div style={{width: '7px', height: '7px', borderRadius: '7px', background: '#004b88'}}></div> 
            <div style={{width: '2px', height: '197px', background: '#004b88'}}></div>
            <div style={{width: '7px', height: '7px', borderRadius: '7px', background: '#004b88'}}></div> 
            <div style={{width: '2px', height: '197px', background: '#004b88'}}></div>
            <div style={{width: '7px', height: '7px', borderRadius: '7px', background: '#004b88'}}></div>
            </div>
        </section>



        <section id="contacts" className="s2">
            <div className="s2c py-14 md:pb-48 md:px-28">
            <div className="flex flex-col">
                <div className="flex flex-wrap">
                <div className="mx-8 md:mx-0 text-6xl md:text-9xl font-semibold md:text-right" style={{color: '#d8d8d8'}}>
                    <div className="md:-mr-14">Бесплатная</div>
                    <div>консультация</div>
                </div>

                <div className="md:hidden flex items-center justify-center gap-2 p-4 w-full my-6">
                    <div style={{width: '55px', height: '1px', background: '#d8d8d8'}}></div>
                    <div style={{maxWidth: '310px'}} className="font-extralight">
                    Оставьте свои контакты, наш специалист свяжется с вами для проведения консультации
                    </div>
                    <div style={{width: '55px', height: '1px', background: '#d8d8d8'}}></div>
                    {/* <!-- <a className="btn white inline-block text-center font-semibold" onClick={()=>setModal(true)}>Подробнее</a> --> */}
                </div>

                <div className="mx-auto md:mt-36 pt-2 md:ml-12 mb-0 md:mb-0 mb-48 overflow-visible" style={{height: '150px', width: '267px'}}>
                    <div>
                    <input aria-label="name" type="text" name="name" placeholder="Ваше имя" className="input" />
                    <input aria-label="phone" type="tel" name="phone" placeholder="+7(999)999-9999" className="input" />
                    <textarea aria-label="textarea" name="textarea" placeholder="Ваш комментарий" rows={3} className="input" style={{height: '85px'}}></textarea>
                    <button type="submit" className="btn white font-semibold" style={{width: '100%'}}>
                        Отправить
                    </button>
                    </div>
                </div>

                </div>
                <div className="hidden md:flex items-center mr-8">
                <div style={{width: '178px', height: '1px', background: '#d8d8d8'}}></div>
                <div style={{maxWidth: '440px'}} className="mx-4 font-extralight">
                    Оставьте свои контакты, наш специалист свяжется с вами для проведения консультации
                </div>
                <div style={{width: '178px', height: '1px', background: '#d8d8d8'}}></div>
                {/* <!-- <a className="btn white inline-block text-center font-semibold" onClick={()=>setModal(true)}>Подробнее</a> --> */}
                </div>
            </div>
            {/* <!-- <div className="flex font-extralight" style={{margin-left: 24px;">
                <div className="text-3xl mb-8">Мы российско-китайская<br/>логистическая компания:</div>
                <div className="flex items-center">
                <div style={{width: 225px; height: 1px; background: #d8d8d8;"></div><div style={{width: 5px; height: 5px; border-radius: 5px; background: #fff;"></div> 
                <div className="ml-4">Склады по всему Китаю</div>
                </div>
            </div> --> */}
            </div>    
        </section>

        <Accardion list={[
            {
                q: 'Может ли измениться цена в процессе сотрудничества?', 
                a: 'Нет, не может. Мы сразу обговариваем с вами цену с учётом всех дополнительных расходов и прописываем её в договоре'

            },
            {
                q: 'Вы доставляете грузы только в Москву?', 
                a: 'Изначально товары приходят на наш склад в Москве, отсюда мы можем отправить груз в любой город России'

            },
            {
                q: 'Работаете ли вы с физическими лицами?', 
                a: 'Да, работаем'

            },
        ]} />
        <a className="btn blue block text-center font-semibold my-32 mt-8 mx-auto" href={`${prefix}/#faq`}>Больше информации</a>

        <Modal 
            content={<>
                <h5 className="text-center text-4xl my-6 font-bold">
                    {/* Рассчитать стоимость доставки */}
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
    </>
}