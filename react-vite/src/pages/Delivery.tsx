
import { useEffect } from 'react';
import Accardion from '../elements/Accardion';
import Hero from '../elements/Hero'
import QuestionBlock from '../elements/QuestionBlock';
import Quiz from '../elements/Quz';
import RoadMap from '../elements/RoadMap';
import AOS from 'aos';
import useContent from '../hooks/useContent';


const deliveryData = {
  hero_block: {
    title: "Выберите идеальный способ доставки или услугу",
    subtitle: "Авиа, море или наземный транспорт — поможем определить лучший вариант именно для вас.",
    background: "bg-gradient-to-br from-black via-gray-900 to-black",
    cta_button: {
      text: "Подобрать способ доставки",
      link: "#quiz"
    }
  },
  title: 'Тарифы и направления',
  plans: [
    {
      title: "Авиа",
      price: "от 7$/кг",
      subtitle: "Быстрая доставка",
      description: "Лучше всего подойдёт для срочной доставки товаров.",
      details: ["Срок: 7–10 дней", "Подходит для дорогих товаров", "Премиум поддержка"],
      popular: false,
    },
    {
      title: "Морская",
      price: "от 0.8$/кг",
      subtitle: "Оптимальный выбор",
      description: "Максимальная экономия при объёмных партиях.",
      details: ["Срок: 25–40 дней", "Подходит для крупных партий", "Максимальная экономия"],
      popular: true,
    },
    {
      title: "Наземная",
      price: "от 1.5$/кг",
      subtitle: "Гибкий вариант",
      description: "Подходит для стабильной логистики внутри России.",
      details: ["Срок: 10–15 дней", "Идеально для доставки по регионам", "Умеренная стоимость"],
      popular: false,
    },
    {
      title: "Проверка товаров",
      price: "от 100$",
      subtitle: "Контроль качества и загрузки",
      description: "Выезд специалистов для проверки продукции и подготовки отчётов.",
      details: [
        "Проверка образцов и партии",
        "Контроль погрузки",
        "Фото- и видеоотчёты"
      ],
      popular: false,
    },
    {
      title: "Анализ и стратегия",
      price: "от 10 000₽",
      subtitle: "Базовый разбор",
      description: "Полный аудит продаж и бренда на Wildberries.",
      details: [
        "Анализ слабых мест",
        "План корректировки и роста",
        "Практические рекомендации"
      ],
      popular: false,
    },
    {
      title: "Старт на маркетплейсе",
      price: "от 12 000₽",
      subtitle: "Новичок",
      description: "Помощь в запуске аккаунта на Wildberries.",
      details: [
        "Работа с отчетами",
        "Создание карточек",
        "Настройка логистики"
      ],
      popular: false,
    },
    {
      title: "Полное сопровождение",
      price: "от 30 000₽",
      subtitle: "Индивидуальный подход",
      description: "Личное ведение с планом, поддержкой и проработкой продаж.",
      details: [
        "Совместное внедрение",
        "План на каждую отгрузку",
        "Всесторонняя поддержка"
      ],
      popular: true,
    }
  ],
  faq_block: {
        "title": "Вопросы по доставке",
        "items": [
          {
            "question": "Как происходит проверка поставщика?",
            "answer": "Мы организуем выездную проверку и предоставляем фото- и видеоотчёт."
          },
          {
            "question": "Сколько длится морская доставка?",
            "answer": "От 25 до 40 дней в зависимости от маршрута и сезона."
          }
        ]
      }
};

export default function Delivery() {
    const content = useContent()
    const res = {...deliveryData, ...content.deliveryPage};

    useEffect(() => {
        AOS.init({
          duration: 800, // длительность анимации в мс
          once: true,    // анимация только при первом скролле
        });
      }, []);

  return (<>
    <Hero  title={res.hero_block.title} subtitle={res.hero_block.subtitle} buttons={<>
            <a
            href={res.hero_block.cta_button.link}
            className="inline-block text-sm md:text-base px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
            >
              {res.hero_block.cta_button.text}
            </a>
    </>}/>
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20" style={{
        background: "linear-gradient(180deg, rgb(31, 31, 31) 0%, rgb(217, 217, 217) 4%)"
    }}>
      <h2 className="text-3xl text-black font-bold text-center mb-12">{res.title}</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
        {res.plans.map((plan, idx) => (
          <div
            key={idx}
            data-aos={idx<2? 'fade-right':idx<4? 'fade-left':'fade-up' }
            data-aos-delay={`${(idx==1||idx==2?0:idx<4?1:idx-4)*200}`}
            className={`relative flex flex-col border rounded-2xl p-6 md: p-8 shadow-md shadow-lg scale-105 z-10 bg-white ${
              !plan.popular ? "border-black" : "border-yellow"
            }`}
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                Популярно
              </span>
            )}
            <h3 className="text-xl font-semibold mt-6" style={{color: 'rgb(81, 75, 41)'}}>{plan.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{plan.subtitle}</p>
            <p className="text-3xl font-bold text-black my-4">{plan.price}</p>
            <p className="text-sm text-gray-600 my-4">{plan.description}</p>
            <ul className="mb-6 space-y-2 text-sm text-gray-700 my-6">
              {plan.details.map((item, i) => (
                <li key={i}>✓ {item}</li>
              ))}
            </ul>
            <a href='#Quiz' className="text-center bg-black text-white rounded-full py-2 px-4 text-sm hover:bg-gray-900 transition my-6"
                style={{color: 'rgb(219, 186, 0)'}}
            >
              Рассчитать стоимость
            </a>
          </div>
        ))}
      </div>
    </section>
    <div style={{background: '31, 31, 31'}}>

        <RoadMap />

        <Quiz />

        <Accardion title={res.faq_block.title} list={res.faq_block.items.map(el=>({q: el.question, a: el.answer}))}/>
    </div>
    <QuestionBlock />
</>);
}
