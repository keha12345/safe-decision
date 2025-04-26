import { useState } from 'react'
import Hero from '../elements/Hero'
import QuestionBlock from '../elements/QuestionBlock'
import Modal from '../elements/Modal'
import useForm from '../hooks/useForm';

export default function Additional({}){
    const [modal, setModal] = useState<null|string|JSX.Element>(null);
    return <>

    <Hero slides={[{
        bg: 'media/hero_addit.png',
        title: 'Дополнительные услуги'
    }]} ch={256} />

 
  


  <section className="w-full md:mx-auto my-16 text-black font-semibold">
  
    <div className="flex items-center w-full mb-16">
      <div style={{width: 'calc(50vw - 310px)', minWidth: '85px', height: '1px', background: '#333333'}}></div>
      <div className="p-6 md:p-8" style={{minWidth: '270px', maxWidth: '620px'}}>
        <h1 className="text-center text-2xl md:text-4xl font-semibold">
          Выездная проверка поставщика
        </h1>
      </div>
      <div style={{width: 'calc(50vw - 310px)', minWidth: '85px', height: '1px', background: '#333333'}}></div>
    </div>

    <div className="p-8 md:px-14 mx-auto" style={{width: '85vw', maxWidth: '885px', background: '#c0c0c0', borderRadius: '20px', color: '#000'}}>
      <p className="text-lg md:text-xl font-medium text-center">
        Мы осуществляем проверку различных видов продукции, образцов, а также контроль погрузки. Наши специалисты выезжают к поставщикам и проверяют качество товара, а также составляют все соответствующие отчеты и анализы. Данные документы предоставляются клиенту в электронном виде.
      </p>
      <p className="mt-16 text-lg md:text-xl font-semibold text-center">
        Стоимость: от 100$
      </p>
      <a className="btn blue block text-center font-semibold my-4 mx-auto" onClick={()=>setModal(<>
        <h5 className="font-bold text-sm" style={{letterSpacing: '2.5px'}}>Дополнительные услуга</h5>
        <h2 className="font-bold text-xl m-6">Выездная проверка поставщика</h2>
        <p className="font-light text-base text-left md:mx-12">
            1. Отправляемся к поставщику, которого вы нашли сами или выбрали из нашего списка
            <br/>2. Проверяем все документы и сертификаты соответствия
            <br/>3. Проверяем товар
            <br/>4. Осуществляем фото-видеосъемку нужного для вас товара, а также всей фабрики и процесс изготовления продукции
            <br/>5. Заполняем отчет о поставщике со всей необходимой информацией
            <br/>6. Отправляем весь отчёт вам
        </p>
        <Form  data="Дополнительные услуга Выездная проверка поставщика"/>
        </>)}>Подробнее</a>
    </div>
    
  </section>


  <section className="w-full md:mx-auto my-16 text-black font-semibold">
  
    <div className="flex items-center w-full mb-16">
      <div style={{width: 'calc(50vw - 310px)', minWidth: '85px', height: '1px', background: '#333333'}}></div>
      <div className="p-6 md:p-8" style={{minWidth: '270px', maxWidth: '620px'}}>
        <h1 className="text-center text-2xl md:text-4xl font-semibold">
            Консультации под Wildberries
        </h1>
      </div>
      <div style={{width: 'calc(50vw - 310px)', minWidth: '85px', height: '1px', background: '#333333'}}></div>
    </div>

    <div className="py-16 mx-auto flex flex-wrap justify-center md:justify-between gap-4" style={{maxWidth: '1180px'}}>
      <div className="p-8 flex flex-col" style={{minWidth: '380px', width: '28%', background: '#c0c0c0', borderRadius: '20px', color: '#000'}}>
        <p className="text-2xl text-center">
          «Базовый»
        </p>
        <div className="m-4" style={{height: '2px', background: '#10528f'}}></div>
        <p className="font-light text-base text-center">
          В данном разборе мы с вами проанализируем все ваши действия. Мы сможем понять почему товар не продается, почему вы не попадаете в нужные вам категории и теряете прибыль. Полный анализ вашего бренда и вашего товара. Мы расскажем вам все ключевые нюансы, которые сам WB ни в одной инструкции не прописывает. Выработаем стратегию работы на ближайшее время и поставим план на ближайшие отгрузки.
        </p>
        <p className="mt-6 md:mt-auto text-lg md:text-xl font-semibold text-center">
          Стоимость: от 10 000₽
        </p>
        <a className="btn blue block text-center font-semibold my-4 mx-auto" onClick={()=>setModal(<>
            <h5 className="font-bold text-sm" style={{letterSpacing: '2.5px'}}>Консультации под Wildberries</h5>
            <h2 className="font-bold text-xl m-6">Тариф «Базовый»</h2>
            <p className="font-light text-base text-left md:mx-12">
                1. Расскажем о ключевых разделах платформы.
                <br/>2. Проанализируем ваш бренд и выявим ключевые проблемные места.
                <br/>3. Анализ карточек и фотокарточек (расскажем, как за счет правильного заполнения карточек и загрузки инфографики попасть в большее количество категорий и ранжироваться на первых страницах)
                <br/>4. Акции, отзывы и вопросы (расскажем, как грамотно входить в акции WB, и как за счет отзывов и ответов на вопросы подниматься в рейтинге)
                <br/>5. Отгрузки (как грамотно привозить товар, чтобы не перегружать склады, а также не терять деньги за счет отсутствия конкретного товара. Какой из ваших товаров в топе и какой необходимо срочно отгрузить, чтобы пошли продажи? На основе вашего бренда мы выявим какой товар самый выгодный, а какой тянет вас в самый низ. Расскажем о частоте отгрузок и пользе от региональных складов. Поговорим про упаковку и маркировку.)
                <br/>6. Новинки (как грамотно выводить новинки в продажу и изначально попасть и закрепиться на первых страницах, правильное заполнение карточек, самовыкупы и инфографика).
            </p>
            <Form data="Консультации под Wildberries Тариф «Базовый»" />
        </>)}>Подробнее</a>
      </div>
      <div className="p-8 flex flex-col" style={{minWidth: '380px', width: '28%', background: '#c0c0c0', borderRadius: '20px', color: '#000'}}>
        <p className="text-2xl text-center">
          «Новичок»
        </p>
        <div className="m-4" style={{height: '2px', background: '#10528f'}}></div>
        <p className="font-light text-base text-center">
          Разбор с новичками. Зарегистрировали кабинет, но не знаете, как заводить карточки? Не знаете для чего и где WB выгружает отчеты? Как и куда отгрузить ваш товар? В данной консультации мы работаем с новичками, с теми, кто только-только зарегистрировал кабинет и ему требуется помощь в организации внутреннего процесса. Что будем делать на консультации?
        </p>
        <p className="mt-6 md:mt-auto text-lg md:text-xl font-semibold text-center">
          Стоимость: от 12 000₽
        </p>
        <a className="btn blue block text-center font-semibold my-4 mx-auto" onClick={()=>setModal(<>
            <h5 className="font-bold text-sm" style={{letterSpacing: '2.5px'}}>Консультации под Wildberries</h5>
            <h2 className="font-bold text-xl m-6">Тариф «Новичок»</h2>
            <p className="font-light text-base text-left md:mx-12">
                1. Расскажем обо всех разделах WB и важности конкретных отделов.
                <br/>2. Расскажем, как и где создаются карточки (раскроем ключевые показатели, которые необходимо ввести при создании карточек).
                <br/>3. Покажем через какой раздел заводить поставку (определимся как привозить выбранный вами товар, как его маркировать и упаковывать. Определимся с типом поставки)
                <br/>4. Поговорим о вашем товаре, какой есть спрос сейчас на него, конкуренция в данном разделе товаров, какой можно ожидать результат от поставки именно этого товара.
                <br/>5. Разработаем стратегию выведения вашего товара на площадку (составим план от выборного вами товара до отгрузи этого товара). Поговорим о подручных способах выведения товара в топ (выкупы, проработка карточек, отзывы и т. д.)
            </p>
            <Form data="Консультации под Wildberries Тариф «Новичок»" />
        </>)}>Подробнее</a>
      </div>
      <div className="p-8 flex flex-col" style={{minWidth: '380px', width: '28%', background: '#c0c0c0', borderRadius: '20px', color: '#000'}}>
        <p className="text-2xl text-center">
          «Индивидуальный»
        </p>
        <div className="m-4" style={{height: '2px', background: '#10528f'}}></div>
        <p className="font-light text-base text-center">
          Индивидуальное сопровождение.
Расскажем абсолютно обо всем и поможем все применить на практике совместно с нами.
В данной консультации мы становимся вашими партнерами и друзьями на определенное время. На первой встрече мы составим план нашей работы. И с момента первой консультации до момента осуществления отгрузки и проработки продаж мы с вами на связи. Мы отвечаем на все ваши вопросы и помогаем вам в воплощении нашего намеченного плана.
        </p>
        <p className="mt-6 md:mt-16 text-lg md:text-xl font-semibold text-center">
          Стоимость: от 30 000₽
        </p>
        <a className="btn blue block text-center font-semibold my-4 mx-auto" onClick={()=>setModal(<>
            <h5 className="font-bold text-sm" style={{letterSpacing: '2.5px'}}>Консультации под Wildberries</h5>
            <h2 className="font-bold text-xl m-6">Тариф «Индивидуальный»</h2>
            <p className="font-light text-base text-left md:mx-12">
                1. Создадим грамотные карточки на товары
                <br/>2. Определимся с фотографиями (расскажем о пользе инфографики. Если применять инфографику, то какой она должна быть? Какие фотографии ставить на главную и как снимать товар, чтобы он был интересен покупателю с первой фотографии)
                <br/>3. Определимся со складами и заведем поставку (на какой склад повезем поставку, какой тип поставки, какое кол-во товара нужно загрузить, как работать с региональными складами?)
                <br/>4. Проработаем рекомендации к товарам (что такое рекомендации, насколько это важно и какие рекомендации ставить?)
                <br/>5. Проработаем конкурентов (кто наши конкуренты, какие у них плюсы, почему их товар покупают? Что необходимо вам поправить или сделать, чтобы быть достойным конкурентом?)
                <br/>6. Поработаем с ценой (посчитаем себестоимость на ваш товар, определимся какую цену ставить изначально, какую скидку поставить на WB, и какую прибыль вы получите с каждого проданного товара)
                <br/>7. Запустим продажи вашего товара
            </p>
            <Form data="Консультации под Wildberries Тариф «Индивидуальный»"/>
        </>)}>Подробнее</a>
      </div>
    </div>
    
  </section>


  
  

    <QuestionBlock />




    <Modal content={modal} onClose={()=>setModal(null)}/>


 
  
</>
}

function Form({data}:{data?: string}){
    const [h, send] = useForm({data, phone: '', name: '', text: ''});

    return <div className="mx-auto text-black" style={{width: '326px'}}>
    <div style={{maxWidth: '400px', margin: '40px auto'}}>
        <input onChange={h} aria-label="name" type="text" name="name" placeholder="Ваше имя" className="input blacki lighti" />
        <input onChange={h} aria-label="phone" type="tel" name="phone" placeholder="+7(999)999-9999" className="input blacki lighti" />
        {/* <!-- <textarea aria-label="textarea" name="textarea" placeholder="Коротко опишите запрос" rows="3" className="input blacki boldi" style="height: 102px;"></textarea> --> */}
        <button onClick={send} type="submit" className="btn blue font-semibold w-full">
            Отправить
        </button>
    </div>
</div>
}