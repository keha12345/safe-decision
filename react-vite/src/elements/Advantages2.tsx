import { useState, useEffect, useRef } from 'react';
import useContent from '../hooks/useContent';
import parse from 'html-react-parser';


    const defAdvs = [
    {
        id: '01',
        title: 'Головной офис в Москве',
        text: 'Всегда готовы встретиться с вами очно и обсудить детали сотрудничества. Полное юридическое сопровождение в РФ.',
        infoTitle: 'Офис в РФ',
        infoText: 'Личные встречи',
        icon: '/media/Иконки NEW (1).png'
    },
    {
        id: '02',
        title: 'Приоритетные условия на таможне',
        text: 'Статус «зеленого коридора». Корректный подбор ТН ВЭД исключает задержки. Выпуск декларации занимает от 10 минут.',
        infoTitle: 'от 10 мин',
        infoText: 'Автовыпуск',
        icon: '/media/Иконки NEW (2).png'
    },
    {
        id: '03',
        title: 'Свои сотрудники в Китае',
        text: 'Носители языка проверяют реальность производства и качество товара на месте. Вы получаете фото и видео отчеты.',
        infoTitle: 'SAFE CHECK',
        infoText: 'Контроль в КНР',
        icon: '/media/Иконки NEW (3).png'
    },
    {
        id: '04',
        title: 'Складские комплексы',
        text: 'Располагаем складами в КНР и РФ для качественной консолидации и проверки ваших заказов перед отправкой.',
        infoTitle: '5000 м²',
        infoText: 'Площадь складов',
        icon: '/media/Иконки NEW (4).png'
    },
    {
        id: '05',
        title: 'Декларируем самостоятельно',
        text: 'Проверим документы, предупредим о рисках и проведем таможенную очистку без посредников.',
        infoTitle: '1000 +',
        infoText: 'Оформлено сертификатов',
        icon: '/media/Иконки NEW (5).png'
    },
    {
        id: '06',
        title: 'Юридическая безопасность',
        text: 'Заключаем договоры по нормам международного права и страхуем 100% перевозимых грузов.',
        infoTitle: '100 %',
        infoText: 'Гарантия сохранности',
        icon: '/media/Иконки NEW (1).png'
    },
    {
        id: '07',
        title: 'Членство в ТПП РФ',
        text: 'Статус члена Торгово-промышленной палаты — это ваша гарантия прозрачности и защищенности бизнеса.',
        infoTitle: 'ТПП РФ',
        infoText: 'Признанная надежность',
        icon: '/media/Иконки NEW (2).png'
    }
    ];

    export default function Advantages2() {
    const [activeStep, setActiveStep] = useState('01');
    const cardRefs = useRef<(HTMLDivElement | null)[]>([null]);
    const content = useContent();
    const advantages = content?.advantages?.list||defAdvs;

    useEffect(() => {
        const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // Срабатывает, когда карточка в центре
        threshold: 0
        };

        const observerCallback = (entries: any[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            setActiveStep(id);
            }
        });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
    <section className="text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-12 relative">
            
            {/* Левая панель: Липкий заголовок и меняющаяся цифра */}
            <div className="md:sticky md:top-32 h-fit md:w-1/3 z-10 md:p-auto ml-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter">
                    {content?.advantages?.title||'7 причин'}
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-xs">
                    {content?.advantages?.subtitle||'доверять свой груз'} <br /> 
                    <span className="text-white font-semibold">SAFE DECISION</span>
                    </p>
                </div>

                {/* Большой номер с плавной сменой */}
                <div className="mt-20 overflow-hidden h-32 relative hidden md:block">
                    <div 
                    className="text-[120px] font-black leading-none transition-all duration-500 ease-out  text-yelow-400"
                    >
                    {activeStep}
                    </div>
                </div>
                <div className='mt-10 mr-10 w-full gap-8'>
                    <div>
                        {typeof content.advantages.buttons === 'string' ? parse(content.advantages.buttons) : content.advantages.buttons}
                    </div>
                </div>
            </div>

            {/* Правая панель: Скроллящиеся карточки */}
            <div className="w-full md:w-2/3 flex flex-col gap-10">
            {advantages.map((item, index) => (
                <div 
                key={index}
                data-id={item.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`
                    min-h-[450px] p-10 md:p-14 rounded-[36px] rounded-bl-lg border transition-all duration-500
                    ${activeStep === item.id 
                    ? 'bg-[rgb(47,47,47)] border-gray-800 scale-[1.02]' 
                    : 'bg-transparent border-transparent opacity-40 scale-100'}
                `}
                >
                    {/* Хедер карточки */}
                    <div className="mb-10">
                        <span 
                        className="text-sm font-bold px-4 py-1.5 rounded-full border border-yellow-400 text-yelow-400"
                        >
                        Reason {item.id}
                        </span>
                    </div>

                    {/* Основной текст */}
                    <div className="mb-10">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                        {item.title}
                        </h3>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                        {item.text}
                        </p>
                    </div>

                    {/* Нижний инфо-блок */}
                    <div className="pt-8 border-t border-gray-400 flex items-start">
                        <div>
                            <div className="md:text-4xl text-3xl font-black mb-1 text-yellow-400">
                                {item.infoTitle}
                            </div>
                            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
                                {item.infoText}
                            </div>
                        </div>
                        <div className="w-14 h-14 ml-auto grayscale-75">
                            <div className="w-10 h-10 rounded-full yellow-400" >
                                    {item.icon.includes('/')?
                                        <img
                                            src={item.icon}
                                            alt='icon'
                                            className="w-12 h-12"
                                        />
                                        :
                                        <div className="w-12 h-12" style={{color: 'silver'}}>{item.icon}</div>
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
        
    </section>
    );
}