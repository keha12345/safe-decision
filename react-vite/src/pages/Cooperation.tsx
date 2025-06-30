
import Hero from '../elements/Hero'

export default function Cooperation({}){

    return <>

    <Hero slides={[{
        bg: 'media/hero_boat.png',
        title: 'Варианты сотрудничества с нами'
    }]} ch={256}/>

  

  <section className="text-black my-6 md:my-16">
    <div className="md:flex md:mx-32 items-strech">
      <div className="md:w-1/2">
        <div className="w-full p-4 md:p-16 md:flex gap-2 text-lg font-semibold">
          <div className="text-4xl w-10 relative mx-auto my-6 md:m-0">
            <div>1</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-7 md:ml-0" />
          </div>
          <p className="text-4xl text-center md:text-left">
            Всё «под ключ»
          </p>
        </div>
        <div className="px-16 py-4 font-extralight text-center md:text-left">
          <h5 className="font-bold">1. Передача информации</h5>
          <p>
            Вы нам отправляете - либо фото товара, либо ссылку на него, либо просто характеристики 
          </p>
        </div>
        <div className="px-16 py-4 font-extralight text-center md:text-left">
          <h5 className="font-bold">2. Поиск поставщиков</h5>
          <p>
            Мы находим по соотношению цены и качества 3-5 поставщиков, из них выбираем лучших и отправляем вам 2-3 варианта на выбор.
          </p>
        </div>
        <div className="px-16 py-4 font-extralight text-center md:text-left">
          <h5 className="font-bold">3. Проверка поставщиков</h5>
          <p>
            Мы проверяем поставщиков, запрашиваем документы на товар
          </p>
        </div>
        <div className="px-16 py-4 font-extralight text-center md:text-left">
          <h5 className="font-bold">4. Проверка товара и согласование</h5>
          <p>
            Отправляем вам «живые» фото-видео товара и после согласования выкупаем
          </p>
        </div>
        <div className="px-16 py-4 font-extralight text-center md:text-left">
          <h5 className="font-bold">5. Страховка и отправка</h5>
          <p>
           Проверяем перед отправкой товар и страхуем его, после упаковываем и привозим. 
          </p>
        </div>
      </div>
      <div style={{width: '1px', background: '#000'}} className="hidden md:block relative mt-20">
        <div style={{borderRadius: '100%', background: '#000'}} className="w-2 h-2 absolute top-0 left-1/2 -ml-1"></div>
        <div style={{borderRadius: '100%', background: '#000'}} className="w-2 h-2 absolute bottom-0 left-1/2 -ml-1 -mb-1"></div>
      </div>
      <div className="md:w-1/2">
        <div className="w-full p-4 md:p-16 md:flex gap-2 text-lg font-semibold">
          <div className="text-4xl w-10 relative mx-auto my-6 md:m-0">
            <div>2</div>
            <img src="media/decor.png" className="h-11 absolute -top-1 left-1/2 md:-left-1 -ml-6 md:ml-0" />
          </div>
          <p className="text-4xl text-center md:text-left">
            Выкуп и доставка
          </p>
        </div>
        <div className="px-16 py-4 font-extralight text-center md:text-left">
          <h5 className="font-bold">1. Самостоятельный поиск поставщика</h5>
          <p>
            Вы сами находите поставщика 
          </p>
        </div>
        <div className="px-16 py-4 font-extralight text-center md:text-left">
          <h5 className="font-bold">2. Передача информации</h5>
          <p>
            Отправляете нам ссылку на товар 
          </p>
        </div>
        <div className="px-16 py-4 font-extralight text-center md:text-left">
          <h5 className="font-bold">3. Выкуп товара</h5>
          <p>
            Мы выкупаем товар, который вы выбрали
          </p>
        </div>
        <div className="px-16 py-4 font-extralight text-center md:text-left">
          <h5 className="font-bold">4. Проверка и страховка товара</h5>
          <p>
            Перед тем как отправить вам товар, мы его проверяем перед отправкой и страхуем
          </p>
        </div>
        <div className="px-16 py-4 font-extralight text-center md:text-left">
          <h5 className="font-bold">5. Упаковка и транспортировка</h5>
          <p>
            Упаковываем товар и привозим его в пункт назначения
          </p>
        </div>
      </div>
    </div>
    <div className="w-full mb-16">
      <div style={{width: '100vw', height: '1px', background: '#333333'}}></div>
      <div className="mx-4 font-extralight">
        <p className="text-center text-xl md:text-2xl my-8 font-extralight text-black md:w-1/2 mx-auto">
          И в том, и в другом варианте сотрудничества мы несём полную ответственность за ваш груз на всех этапах перевозки
        </p>
      </div>
      <div style={{width: '100vw', height: '1px', background: '#333333'}}></div>
    </div>
  </section>


  



  <section>
    <a className="btn blue block text-center font-semibold my-16 mx-auto" href="tel: +74955653845">Звонок</a>
  </section>
</>
}