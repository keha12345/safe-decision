import { useEffect, useRef, useState } from "react";
import useSwipe from "../hooks/useSwipe";
import { useNavigate } from "react-router";
import useContent from "../hooks/useContent";


const defOptions = {
  list: [
      {
        title: "Быстрая доставка",
        price: "от 7$/кг",
        type: "Авиа",
        description: "Лучше всего подойдёт для срочной доставки товаров.",
        details: ["Срок: 7–10 дней", "Подходит для дорогих товаров", "Премиум поддержка"],
        popular: false,
        link: '/delivery/rail',
        background: 'media/hero_boat.png', // Замените на реальный URL
      },
      {
        title: "Оптимальный выбор",
        price: "от 0.8$/кг",
        type: "Морская",
        description: "Максимальная экономия при объёмных партиях.",
        details: ["Срок: 25–40 дней", "Подходит для крупных партий", "Максимальная экономия"],
        popular: true,
        link: '/delivery/rail',
        background: 'media/hero_boat.png', // Замените на реальный URL
      },
      {
        title: "Гибкий вариант",
        price: "от 1.5$/кг",
        type: "Наземная",
        description: "Подходит для стабильной логистики внутри России.",
        details: ["Срок: 10–15 дней", "Идеально для доставки по регионам", "Умеренная стоимость"],
        popular: false,
        link: '/delivery/rail',
        background: 'media/hero_boat.png', // Замените на реальный URL
      },
  ]
};



export default function DeliverySlider() {
  const isPhoneScreen = (typeof window !== 'undefined' && window.innerWidth < 768);
  let navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dist, setDist] = useState(0);
  const content = useContent();
  const slides = {...defOptions, ...content.deliverySlider};
  
  console.log(currentSlide);
  
  const slideHandler = (n:number) => {
    setCurrentSlide(p=>{
      if(p+n<0) return slides.list.length-1;
      if(p+n>=slides.list.length) return 0;
      return p+n;
    });
  }

  useEffect(()=>{
    if(currentSlide>1) return;
    const el = ref.current?.querySelector(`[data-id="${slides.list[1].title}"]`) as HTMLElement;
    const parent = ref.current; 
    if (el && parent) {
      const elRect = el.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      const offsetFromLeft = elRect.left - parentRect.left;
      setDist(currentSlide||dist?offsetFromLeft: offsetFromLeft-100);
    } 
  },[ref, currentSlide])
  useEffect(()=>{
    const parent = ref.current;
    console.log(parent, -dist*currentSlide);
    if(parent) parent.style.transform = `translateX(${-dist*currentSlide}px)`;
  },[currentSlide])

  const swipe = useSwipe({
          leftH: ()=>slideHandler(1),
          rightH: ()=>slideHandler(-1),
          scroll: true
      })

  return (
    <section id='DeliverySlider' className="my-18 mx-10">
      <h1 className="text-4xl font-bold text-center p-16">Варианты доставки</h1>

      <div data-name='slider' className="overflow-hidden">
        <div ref={ref} {...swipe} className="flex gap-8" style={{
          width: '1000vw',
          transition: 'transform 0.5s ease-in-out',
        }}>
          {slides.list.map((s,i)=><div
            key={i+'n'}
            data-id={s.title}
            data-aos='fade-left'
            data-aos-delay={`${i*300}`}
            style={{
              width: isPhoneScreen? 300:570+'px',
              height: isPhoneScreen? 460:460+'px',
              // border: '2px solid rgb(201, 143, 5)',
              borderRadius: '12px',
              overflow: 'hidden',
              background: `url(${s.background})`,
              backgroundSize: 'cover'
            }}
          >
          <div className="w-full h-full relative flex flex-col border rounded-2xl p-6 shadow-md p-8 md:p-12" style={{
              border: '2px solid rgb(201, 143, 5)',
              background: 'rgba(0, 0, 0, 0.8)'
          }}>

            {s.popular && (
              <span className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                Популярно
              </span>
            )}
            <p className="text-2xl text-white mb-2">{s.type.toUpperCase()}</p>
            <h3 className="text-lg font-light mb-1" style={{color: 'rgb(196, 196, 196)'}}>{s.title}</h3>
            <p className="text-4xl font-bold text-white my-4">{s.price}</p>
            <p className="text-lg text-white mb-4">{s.description}</p>
            <ul className="mb-6 space-y-2 text-sm text-white">
              {s.details.map((item, i) => (
                <li key={i}>✓ {item}</li>
              ))}
            </ul>
            <a href='#Quiz' className="mt-auto bg-black text-center rounded-full py-2 px-4 text-sm hover:bg-gray-900 transition"
              style={{color: 'rgb(232, 180, 40)'}}
            >
              Рассчитать стоимость
            </a>
          </div>
          
          </div>)}
          {/* {slides.map((s,i)=><div 
            key={s.title}
            data-id={s.title}
            data-aos='fade-left'
            data-aos-delay={`${i*300}`}
            style={{
              width: isPhoneScreen? 300:570+'px',
              height: isPhoneScreen? 460:460+'px',
              border: '2px solid rgb(201, 143, 5)',
              borderRadius: '12px',
              overflow: 'hidden',
              background: `url(${s.background})`,
              backgroundSize: 'cover'
            }}
          >
            <div className="w-full h-full" style={{
              background: 'rgba(0, 0, 0, 0.8)'
            }}>
              <div className="md:flex items-center justify-center h-3/4">
                <h2 className="text-2xl p-8 md:p-12">{s.type.toUpperCase()}</h2>
                <p className="text-base font-light px-8 md:p-12" style={{lineHeight: '2rem', color: 'rgb(255, 255, 255)'}}>
                  {s.description+'\n\n'}
                  <span>
                    {s.details.map((item, i) => (
                      <li key={i}>✓ {item}</li>
                    ))}
                  </span>
                </p>
              </div>
              <div className="flex justify-center" style={{width: isPhoneScreen? 300:570+'px'}}>
                <button className="text-lg bg-black text-white rounded-full py-2 px-4 text-sm hover:bg-gray-900 transition w-5/6">
                  Рассчитать стоимость
                </button>
              </div>
            </div>
          </div>)} */}

        </div>
      </div>
      <div className="w-full my-16 flex gap-8 justify-center">
        <img onClick={()=>slideHandler(-1)} className="w-12 h-12 cursor-pointer z-50" src="media/slider_left.png"></img>
        <img onClick={()=>slideHandler(1)} className="w-12 h-12 cursor-pointer z-50" src="media/slider_right.png"></img>
      </div>
    </section>
  )
};