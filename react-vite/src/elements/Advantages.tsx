import useContent from "../hooks/useContent";

const defAdvs = {
  list: [
    {
      title: 'Прозрачное ценообразование',
      text:
        'Все расходы уже включены в цену — никаких скрытых платежей и неприятных сюрпризов.',
    //   icon: '💰',
        icon: '/media/Иконки NEW (1).png',
    },
    {
      title: 'Надёжные партнёры',
      text:
        'Работаем только с проверенными поставщиками. Гарантируем сроки и качество.',
    //   icon: '🤝',
        icon: '/media/Иконки NEW (2).png',
    },
    {
      title: 'Выездная проверка',
      text:
        'Проверяем товар лично на фабриках. Фото- и видеоотчёты по каждому заказу.',
    //   icon: '🕵️‍♂️',
        icon: '/media/Иконки NEW (3).png',
    },
    {
      title: 'Работа с юр. и физ. лицами',
      text:
        'Обслуживаем и компании, и индивидуальных предпринимателей. Всё легально.',
    //   icon: '📄',
        icon: '/media/Иконки NEW (4).png',
    },
    {
      title: 'Быстрый выкуп товара',
      text:
        'Выкупаем товар в течение 1–2 дней — не тянем время и не держим вас в ожидании.',
    //   icon: '⚡',
        icon: '/media/Иконки NEW (5).png',
    },
    {
      title: 'Страховка от брака',
      text:
        'Ваши товары застрахованы от производственных дефектов. Мы несем ответственность.',
    //   icon: '🛡️',
        icon: '/media/Иконки NEW (6).png',
    },
  ]
};
  
  const isPhoneScreen = (typeof window !== 'undefined' && window.innerWidth < 768);

  export default function Advantages () {
    const content = useContent();
    const advantages = {...defAdvs, ...content.advantages};

    

    const styles = {
         dv: {
            display: isPhoneScreen? 'none' : 'block',
            position: 'absolute',
            background: 'rgba(255, 244, 233, 0.5)',
            width: '1px',
            height: '40%'
          },
          dv1: {
            width: '70%',
            height: '1px',
            left: '15%',
            top: '50%',
          },
          dv2: {
            top: '30%',
            // left: '25%',
            left: '33%',
          },
          dv3: {
            top: '30%',
            // left: '50%',
            left: '66%',
          },
          dv4: {
            top: '30%',
            left: '75%',
          },
    }
    return <>
      <section id="Advantages" className="text-white mx-4 md:mx-20 relative overflow-hidden my-12 md:my-24">
        {/* Линии */}
        <div data-aos="slide-right" data-aos-offset="40" style={{...styles.dv, ...styles.dv1} as React.CSSProperties}></div>
        <div data-aos="slide-up" data-aos-offset="40" style={{...styles.dv, ...styles.dv2} as React.CSSProperties}></div>
        <div data-aos="slide-down" data-aos-offset="40" style={{...styles.dv, ...styles.dv3} as React.CSSProperties}></div>
        {/* <div style={{...classList.dv, ...classList.dv4} as React.CSSProperties}></div> */}

        <div
            data-name="features"
            className="relative flex flex-wrap justify-center gap-y-8"
        >
            {advantages.list.map((feature, idx) => (
            <div
                key={idx}
                    className="flex items-center md:w-1/3 w-full p-8"
                    data-aos={!isPhoneScreen? "fade-up" :  idx%2==0? "fade-right" : "fade-left"}
                    data-aos-delay={(idx) * 70}
            >
                <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12 mr-8"
                />
                {/* <div className="w-12 h-12 mr-8" style={{color: 'silver'}}>{feature.icon}</div> */}
                <div>
                    <h3 className="font-medium text-2xl mb-2" style={{color: isPhoneScreen? 'rgb(250 212 121)': 'white'}}>{feature.title}</h3>
                    <p className="text-base font-light">{feature.text}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
    </>
}