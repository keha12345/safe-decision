import { useEffect, useRef, useState } from 'react';
import Hero from '../elements/Hero'
import QuestionBlock from '../elements/QuestionBlock';
import RoadMap from '../elements/RoadMap'; // Используем ваш компонент
import AOS from 'aos';
import useContent from '../hooks/useContent';


interface Case {
  title: string;
  subtitle: string;
  price: string;
  anti: boolean;
  details: string[];
  fullStory: string;
  decision: string,
  result: string;
  review: string;
}

const reviews = {
  hero: {
    title: "Реальные кейсы",
    subtitle: "Что происходит, когда выбирают не нас, и как выглядит результат при работе в белую.",
  },
  items: [
    {
      title: "Конвейерная линия",
      subtitle: "Белый импорт с возвратом НДС",
      price: "+ 1.2 млн ₽", // Выгода/возврат
      anti: false,
      details: ["Прямой контракт с КНР", "Официальный возврат НДС", "Чистые документы"],
      fullStory: "Поставка производственной линии «под ключ». Мы заранее подготовили класс-решение, подтвердили единый код ТН ВЭД и провели оплату в юанях напрямую заводу.",
      decision: "",
      result: "Товар прошел границу за 2 дня. Клиент получил полный пакет документов и легально вернул НДС, полностью окупив услуги логистики.",
      review: "«Первый раз работали полностью официально. Удивительно, но по факту с учетом возврата НДС вышло дешевле, чем везти через карго».",
    },
    {
      title: "Дробильная линия",
      subtitle: "Ошибка классификации",
      price: "- 50 000 €",
      anti: true,
      details: ["Переплата пошлин", "Доначисление НДС", "Штраф от таможни"],
      fullStory: "Импортёр ввозил дробильную линию из Китая. Решили сэкономить и оформить всё единым кодом без чертежей. Таможня не приняла логику «единого комплекса».",
      decision: "",
      result: "Оборудование разбили на части: дробилка (7%), шкаф (10%), грохот (риск). Итог: корректировка стоимости и огромная переплата.",
      review: "«Думали, проскочим на авось, а в итоге таможня пересчитала всё по самым высоким ставкам. Надо было сразу готовить техдокументацию».",
    },
    {
      title: "УЗИ-аппарат",
      subtitle: "Отсутствие разрешений",
      price: "Товар конфискован",
      anti: true,
      details: ["Нарушение тех. регулирования", "Простой на СВХ", "Потеря оборудования"],
      fullStory: "Ввозили б/у медтехнику. Ошибка: не оформили Регистрационное Удостоверение (РУ). Без него выпуск медицинского товара в РФ невозможен.",
      decision: "",
      result: "Пока шли суды, сроки хранения на СВХ вышли. Груз был передан в реализацию государству. Клиент потерял и деньги, и аппарат.",
      review: "«Не знали, что на б/у медтехнику такие жесткие требования. В итоге остались и без денег, и без товара. Больше не рискуем».",
    },
    {
      title: "Запчасти для спецтехники",
      subtitle: "Оптимизация маршрута",
      price: "Срок: 12 дней",
      anti: false,
      details: ["Мультимодальная доставка", "Сборный груз (LCL)", "Контроль QC в КНР"],
      fullStory: "Срочный заказ запчастей. Мы организовали проверку товара на складе в Гуанчжоу и отправили его ускоренным контейнерным поездом.",
      decision: "",
      result: "Запчасти прибыли на завод точно в срок. Никаких скрытых платежей — стоимость была зафиксирована в момент подписания договора.",
      review: "«Нам обещали доставить за 15 дней, привезли за 12. Прозрачность расчетов и понимание, где груз, — это то, чего нам не хватало раньше».",
    },
    {
      title: "Промышленные станки",
      subtitle: "Сэкономили на упаковке",
      price: "- 7 млн ₽",
      anti: true,
      details: ["Повреждение электроники", "Смещение груза", "Отказ страховки"],
      fullStory: "Дорогие станки отправили морем без жесткой фиксации и антикоррозийной упаковки. В шторм груз «поплыл» по контейнеру.",
      decision: "",
      result: "Электроника повреждена конденсатом, станины погнуты. Страховая отказала, сославшись на ненадлежащую упаковку. Товар списан.",
      review: "«Сэкономили 300$ на обрешетке и силикагеле. Получили кучу ржавого металлолома. Страховка — не панацея, если упаковка слабая».",
    },
    {
      title: "Партия электроники",
      subtitle: "Сертификация под ключ",
      price: "Выпуск за 24ч",
      anti: false,
      details: ["Получены все ЕАС", "Маркировка Честный Знак", "Прохождение рисков"],
      fullStory: "Клиенту требовалась поставка бытовой электроники для тендера. Мы организовали испытания образцов, получили сертификаты и промаркировали товар в Китае.",
      decision: "",
      result: "Ни одного вопроса от таможни. Все серийные номера в базе, товар готов к продаже на маркетплейсах в день прибытия.",
      review: "«Для нас было критично успеть к срокам тендера. SAFE DECISION сделали документы идеально — товар «пролетел» таможню без задержек».",
    },
    
  ]
};



export default function Reviews() {
  const content = useContent();
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const res = { ...reviews, ...content.reviews };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const openCase = (item: Case) => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
    setSelectedCase(item);
    setIsSidebarOpen(true);
    document.body.style.overflow = 'hidden'; // Блокируем скролл
  };

  const closeCase = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Hero title={res.hero.title} subtitle={res.hero.subtitle} buttons={<></>}/>

      <section className="bg-white py-16 px-4 sm:px-8 lg:px-20 min-h-screen"
        style={{
            background: "linear-gradient(180deg, rgb(31, 31, 31) 0%, rgb(217, 217, 217) 4%)"
        }}
      >
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {res.items.map((item:any, idx:number) => (
            <div
              key={idx}
              onClick={() => openCase(item)}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group cursor-pointer relative flex flex-col border border-gray-200 rounded-3xl p-8 bg-white hover:border-yellow-400 hover:shadow-2xl transition-all duration-300"
            >
              <span className={`absolute top-6 right-6 bg-${item.anti?'orange-400':'teal-700'} text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full`}>
                Разбор
              </span>
              <h3 className="text-xl font-black text-black mb-2 group-hover:text-yellow-600 transition-colors">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-4 uppercase tracking-tighter">{item.subtitle}</p>
              <p className="text-2xl font-black text-black mb-6">{item.price}</p>
              
              <ul className="space-y-3 mb-8">
                {item.details.map((detail:any, i:number) => (
                  <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> {detail}
                  </li>
                ))}
              </ul>

              <div className="mt-auto p-2 px-6 bg-black rounded-lg border-gray-100 flex items-center justify-center gap-2 group">
                <span className="text-sm font-bold uppercase">
                    Подробности
                </span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Right Sidebar (Shadcn-like Sheet) */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeCase}></div>
        
        {/* Content */}
        <div ref={contentRef} className={`absolute top-0 right-0 h-full w-full md:w-[45%] bg-zinc-900 shadow-2xl transition-transform duration-500 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
          <div className="p-8">
            <button onClick={closeCase} className="mb-8 text-gray-400 hover:text-black flex items-center gap-2 text-sm uppercase font-bold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Назад к кейсам
            </button>

            {selectedCase && (
                <div className="animate-in fade-in slide-in-from-right-10 duration-500 text-white">
                    <h2 className="text-3xl font-black mb-2 uppercase italic text-white leading-tight">
                        {selectedCase.title}
                    </h2>
                    <p className="text-yellow-400 font-bold mb-8 uppercase tracking-widest border-b border-red-500/30 pb-2">
                        {selectedCase.subtitle}
                    </p>
                    
                    <div className="grid gap-6 mb-8">
                      <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700">
                          <h4 className="text-xs uppercase text-gray-400 mb-2 font-bold tracking-widest">Ситуация:</h4>
                          <p className="text-gray-200 leading-relaxed">{selectedCase.fullStory}</p>
                      </div>

                      <div className="bg-zinc-800/50 p-6 rounded-2xl border-l-4 border-yellow-400 italic">
                          <h4 className="text-xs uppercase text-yellow-400 mb-2 font-bold not-italic tracking-widest">Риск:</h4>
                          <p className="text-gray-300">{selectedCase.decision}</p>
                      </div>

                      <div className={`bg-${selectedCase.anti? 'red': 'green'}-900/20 p-6 rounded-2xl border border-${selectedCase.anti? 'red': 'green'}-900/50`}>
                          <h4 className="text-xs uppercase text-red-400 mb-2 font-bold tracking-widest">Решение:</h4>
                          <p className="text-red-100 font-bold text-lg">{selectedCase.result}</p>
                      </div>

                      <div className="bg-zinc-800/50 p-6 rounded-2xl border-l-4 border-yellow-400 italic">
                          <h4 className="text-xs uppercase text-yellow-400 mb-2 font-bold not-italic tracking-widest">Результат:</h4>
                          <p className="text-gray-300">"{selectedCase.review}"</p>
                      </div>
                    </div>
                    
                    <div className="mt-12 p-6">
                        <h2 className="text-3xl font-black mb-2 uppercase italic text-white leading-tight">
                            {selectedCase.anti? 'Как этого избежать?': 'Хотите так же?'}
                        </h2>
                        <p className="text-white font-bold mb-8 uppercase tracking-widest border-b border-red-500/30 pb-2">
                            Наша команда берет на себя все заботы, чтобы процесс был максимально прозрачным, выгодным и спокойным для вас.
                        </p>
                        <a href='/delivery#Quiz' className=" block text-center w-full bg-yellow-400 text-black py-4 rounded-xl font-bold hover:bg-yellow-500 transition shadow-xl uppercase tracking-widest">
                            Связаться с нами
                        </a>
                    </div>
                    <RoadMap disableAOS />                    
                </div>
            )}
          </div>
        </div>
      </div>

      <QuestionBlock />
    </>
  );
}