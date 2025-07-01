import useContent from "../hooks/useContent";




const defContent = {
    subtitle: 'Этапы нашей работы — от первого контакта до вручения груза.',
    steps: [
        {
            title: 'Заявка',
            description: 'Вы оставляете заявку на сайте или связываетесь с нами любым удобным способом.',
        },
        {
            title: 'Консультация',
            description: 'Наш специалист уточняет детали и подбирает для вас оптимальный способ доставки.',
        },
        {
            title: 'Коммерческое предложение',
            description: 'Вы получаете индивидуальное предложение с расчетом стоимости и сроков.',
        },
        {
            title: 'Договор и страхование',
            description: 'Подписываем договор, закупаем товар и страхуем его от потерь и брака.',
        },
        {
            title: 'Доставка и приёмка',
            description: 'Мы доставляем товар, вы принимаете его на складе в Москве или по адресу.',
        },
    ]
}
const RoadMap = () => {
    const content = useContent();
    const res = {...defContent, ...content.roadMap}

    return (<>
        <section id='RoadMap' className="w-full overflow-hidden text-white py-20 px-4 sm:px-8 lg:px-20">
            <div className="max-w-5xl mx-auto text-center mb-16" data-aos="fade-up">
                <h2 className="text-4xl font-bold mb-4">
                    Как <span className="text-yellow-400">это работает</span>
                </h2>
                <p className="text-gray-300 text-lg">
                    {res.subtitle}
                </p>
            </div>
            <div className="relative mx-auto" style={{maxWidth: '720px'}}>

                <div data-aos="slide-up" data-aos-delay="4000" className="absolute left-1/2 border-l-2 border-gray-600 mt-4 w-1" style={{height: '95%'}}></div>
                {res.steps.map((step, index) => (
                    <div
                        key={index}
                        data-aos={index % 2 === 0 ? 'fade-right': 'fade-left'}//"fade-up"
                        data-aos-delay={`${index * 50}`}
                        className={`mb-14 sm:mb-20 flex flex-col ${''
                        // index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                        } items-center group`}
                    >
                        <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 text-black font-bold text-lg rounded-full flex items-center justify-center z-10 shadow-lg border-4 border-black mt-1">
                            {index + 1}
                        </div>
            
                        <div>
                            <div
                                className={`p-6 rounded-2xl shadow-lg mt-2 ${
                                    index % 2 === 0 ? 'sm:mr-auto sm:ml-12' : 'sm:ml-auto sm:mr-12'
                                }`}
                                style={{background: 'rgb(47,47,47)'}}
                            >
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-300 text-sm">{step.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          

          
        </section>
        
    </>  );
};

export default RoadMap;