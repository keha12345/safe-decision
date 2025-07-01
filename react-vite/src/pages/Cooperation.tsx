
import { useEffect } from 'react';
import Hero from '../elements/Hero'
import AOS from 'aos';
import QuestionBlock from '../elements/QuestionBlock';
import useContent from '../hooks/useContent';

const defaultContent = {
  hero: {
    title: 'Сотрудничать с нами просто и выгодно',
    subtitle: 'Узнайте из чего строиться долгосрочное сотрудничество с нами'
  },
  title: 'Как мы работаем',
  subtitle: 'subtitle',
  columns: [
    {
      title: 'Всё «под ключ»',
      steps: [
        {
          title: '1. Передача информации',
          description: 'Вы нам отправляете - либо фото товара, либо ссылку на него, либо просто характеристики',
        },
        {
          title: '2. Поиск поставщиков',
          description:
            'Мы находим по соотношению цены и качества 3-5 поставщиков, из них выбираем лучших и отправляем вам 2-3 варианта на выбор.',
        },
        {
          title: '3. Проверка поставщиков',
          description: 'Мы проверяем поставщиков, запрашиваем документы на товар',
        },
        {
          title: '4. Проверка товара и согласование',
          description: 'Отправляем вам «живые» фото-видео товара и после согласования выкупаем',
        },
        {
          title: '5. Страховка и отправка',
          description: 'Проверяем перед отправкой товар и страхуем его, после упаковываем и привозим.',
        },
      ],
    },
    {
      title: 'Выкуп и доставка',
      steps: [
        {
          title: '1. Самостоятельный поиск поставщика',
          description: 'Вы сами находите поставщика',
        },
        {
          title: '2. Передача информации',
          description: 'Отправляете нам ссылку на товар',
        },
        {
          title: '3. Выкуп товара',
          description: 'Мы выкупаем товар, который вы выбрали',
        },
        {
          title: '4. Проверка и страховка товара',
          description: 'Перед тем как отправить вам товар, мы его проверяем перед отправкой и страхуем',
        },
        {
          title: '5. Упаковка и транспортировка',
          description: 'Упаковываем товар и привозим его в пункт назначения',
        },
      ],
    },
  ],
  note: 'И в том, и в другом варианте сотрудничества мы несём полную ответственность за ваш груз на всех этапах перевозки',
};

export default function Cooperation({}){
    const content = useContent()
    const res =  {...defaultContent, ...content.cooperationPage}

      useEffect(() => {
        AOS.init({
                duration: 800, // длительность анимации в мс
                once: true,    // анимация только при первом скролле
              });
      }, []);
      

    return <>

    <Hero title={res.hero.title} subtitle={res.hero.subtitle} buttons={<></>}/>

    <section className="w-full overflow-hidden text-white py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">
          {res.title.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="text-yellow-400">{res.title.split(' ').slice(-1)}</span>
        </h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {res.columns.map((col, colIndex) => (
          <div key={colIndex} data-aos="fade-up">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="ml-12 text-3xl font-semibold">{col.title}</h3>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-6 bottom-0 w-0.5 h-5/6 bg-gray-600 z-0" />
              {col.steps.map((step, index) => (
                <div
                  key={index}
                  className="relative pl-12 mb-10"
                  data-aos={window.innerWidth<700 ? 'fade-left' : 'fade-up'}
                  data-aos-delay={`${index * 50}`}
                >
                  <div className="absolute left-2 top-1 w-6 h-6 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center z-10 text-sm shadow-md border-2 border-black">
                    {index + 1}
                  </div>
                  <div className="p-4 rounded-2xl shadow-lg">
                    <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {res.note && (
        <div data-aos='fade-up' className="max-w-3xl mx-auto mt-16 text-center text-gray-300 text-lg">
          <hr className="border-gray-600 mb-6" />
          <p>{res.note}</p>
          <hr className="border-gray-600 mt-6" />
        </div>
      )}
    </section>

    <QuestionBlock />
  </>
}