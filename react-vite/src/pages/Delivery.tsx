
import Hero from '../elements/Hero'
import QuestionBlock from '../elements/QuestionBlock'

export default function Delivery({}){

    return <>
    
    <Hero slides={[{
        bg: 'media/hero_deli.png',
        title: 'Доставка'
    }]} ch={256}/>

  


    <section className="w-full md:mx-auto my-16 text-black font-semibold">
  
        <div className="flex items-center w-full mb-16">
        <div style={{width: '999px', height: '1px', background: '#333333'}}></div>
        <div className="mx-4 font-extralight">
            <h1 className="text-center text-3xl md:text-4xl font-bold">Авиа</h1>
        </div>
        <div style={{width: '999px', height: '1px', background: '#333333'}}></div>
        </div>


        <div className="flex flex-col items-center w-full md:w-4/6 mx-auto text-center md:text-left">

        <div className="font-light mb-4">
            <span className="font-semibold">Сроки:</span> 8 - 12 дней <br/>
            <span className="font-semibold">Цена:</span> от 5$ за кг <br/>
        </div>

        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>1</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Скорость — идеально подходит для экспресс-перевозки, при сжатых сроках поставки, и является самым дорогим способом доставки
            </p>
        </div>
        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>2</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Доставка грузов самолетом — самый удобный способ транспортировки эксклюзивных, скоропортящихся и малогабаритных товаров
            </p>
        </div>
        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>3</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Идеально подходит для доставки образцов
            </p>
        </div>
        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>4</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Нельзя перевозить взрывоопасные товары
            </p>
        </div>

        </div>
    </section>



    <section className="w-full md:mx-auto my-16 text-black font-semibold">
  
        <div className="flex items-center w-full mb-16">
        <div style={{width: '999px', height: '1px', background: '#333333'}}></div>
        <div className="mx-4 font-extralight">
            <h1 className="text-center text-3xl md:text-4xl font-bold text-nowrap w-64">Авиа + Авто</h1>
        </div>
        <div style={{width: '999px', height: '1px', background: '#333333'}}></div>
        </div>


        <div className="flex flex-col items-center w-full md:w-4/6 mx-auto text-center md:text-left">

        <div className="font-light mb-4">
            <span className="font-semibold">Сроки:</span> 12 - 18 дней <br/>
            <span className="font-semibold">Цена:</span> от 2.7$ за кг <br/>
        </div>

        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>1</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Самый быстрый способ по приятной цене. Дешевле чем авиа, но при этом быстрее чем авто или Ж/Д
            </p>
        </div>
        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>2</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Оптимизация срока доставки за счет грамотно выстроенной, логистической цепочки
            </p>
        </div>
        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>3</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Доступная цена благодаря успешной логистике
            </p>
        </div>
        </div>
    </section>



    <section className="w-full md:mx-auto my-16 text-black font-semibold">
  
        <div className="flex items-center w-full mb-16">
        <div style={{width: '999px', height: '1px', background: '#333333'}}></div>
        <div className="mx-4 font-extralight">
            <h1 className="text-center text-3xl md:text-4xl font-bold">Авто</h1>
        </div>
        <div style={{width: '999px', height: '1px', background: '#333333'}}></div>
        </div>


        <div className="flex flex-col items-center w-full md:w-4/6 mx-auto text-center md:text-left">

        <div className="font-light mb-4">
            <span className="font-semibold">Сроки:</span> 20 - 30 дней <br/>
            <span className="font-semibold">Цена:</span> от 2.3$ за кг <br/>
        </div>

        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>1</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Самый оптимальный по соотношению цены и скорости
            </p>
        </div>
        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>2</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Независимость скорости выполнения услуги от расписания движения воздушного, ж/д и морского транспорта
            </p>
        </div>
        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>3</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Универсальны, подходят под практически любой вид грузов, будь то сборные, крупногабаритные, сложная техника или хрупкие предметы.
            </p>
        </div>

        </div>
    </section>





    <section className="w-full md:mx-auto my-16 text-black font-semibold">
  
        <div className="flex items-center w-full mb-16">
        <div style={{width: '999px', height: '1px', background: '#333333'}}></div>
        <div className="mx-4 font-extralight">
            <h1 className="text-center text-3xl md:text-4xl font-bold w-24">Ж/Д</h1>
        </div>
        <div style={{width: '999px', height: '1px', background: '#333333'}}></div>
        </div>


        <div className="flex flex-col items-center w-full md:w-4/6 mx-auto text-center md:text-left">

        <div className="font-light mb-4">
            <span className="font-semibold">Сроки:</span> 40 - 60 дней <br/>
            <span className="font-semibold">Цена:</span> от 2.3$ за кг <br/>
        </div>

        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>1</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Самый дешевый способ доставки, но при этом самый медленный
            </p>
        </div>
        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>2</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Независимость от погодных и климатических условий
            </p>
        </div>
        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>3</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Возможность транспортировать товары любого вида и веса
            </p>
        </div>
        <div className="w-full md:w-4/6 p-4 md:p-8 md:flex gap-8 text-lg md:text-xl">
            <div className="text-2xl p-1 w-10 relative mx-auto md:ml-auto my-6 md:my-0">
            <div>4</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-4 md:ml-0" />
            </div>
            <p className="text-center md:w-11/12 md:text-left">
            Повышенная пропускная способность ж/д станций
            </p>
        </div>

        </div>
    </section>
  

  
    <section>
        <div className="w-full mb-16">
        <div style={{width: '100vw', height: '1px', background: '#333333'}}></div>
        <div className="mx-4 font-extralight">
            <p className="text-center text-xl md:text-2xl my-8 font-extralight text-black md:w-1/2 mx-auto">
            Наши опытные специалисты разработают оптимальный маршрут для доставки ваших товаров и предоставят услуги без скрытых платежей.
            </p>
        </div>
        <div style={{width: '100vw', height: '1px', background: '#333333'}}></div>
        </div>
    </section>


    <QuestionBlock />
</>
}