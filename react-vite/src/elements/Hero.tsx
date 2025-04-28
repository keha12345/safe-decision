import { useState } from 'react'
import useSwipe from '../hooks/useSwipe';


export default function Hero({slides, ch}: {
    slides: Array<{bg: string, title: string | JSX.Element, description?: string | JSX.Element, btns?: string | JSX.Element}>, ch?: number
}){
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    
    const slideHandler = async (d: -1 | 1) => {
        let second = (currentSlide + d);
        second = second>=0? second : slides.length-1;
        second = second % slides.length;
        console.log(second);
        setCurrentSlide(second);
    } 

    const swipe = useSwipe({
        leftH: ()=>slideHandler(1),
        rightH: ()=>slideHandler(-1),
        scroll: true
    })

    return <>
    <section {...swipe} className="hero w-full relative overflow-hidden flex flex-col justify-center items-center"
        style={{backgroundImage: `url('${slides[currentSlide].bg}')`, height: `${(ch as number)*2||723}px`}}
    >
        <div className="hdarky"></div>
        <div className='flex' style={{
            position: 'absolute',
            left: 0,
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(${currentSlide*-100}vw)`
        }}>
            {slides.map(slide=><div key={slide.title.toString()} className='w-screen'>
                <div className="hcard mx-auto w-full md:w-97 flex flex-col justify-around p-8 rounded-2xl text-center text-xl" 
                    style={{height: `${ch||465}px`}}
                >
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold">
                            {slide.title as JSX.Element}
                        </h1>
                    </div>
                    {slide.description && <div>
                        <p>
                            {slide.description as JSX.Element}
                        </p>
                    </div>}
                    {slide.btns && <div>
                            {slide.btns as JSX.Element}
                    </div>}
                </div>
            </div>)}
        </div>
        {slides.length>1 && <div className="p-8 lg:px-24 xl:px-56 2xl:px-72 flex justify-between items-end md:items-center"
            style={{
                position: 'absolute',
                top: '49%',
                left: 0,
                width: '100%',
                height: '20px'
            }}
        >
            <img onClick={()=>slideHandler(-1)} className="w-12 h-12 cursor-pointer z-50" src="media/slider_left.png"></img>
            <img onClick={()=>slideHandler(1)} className="w-12 h-12 cursor-pointer z-50" src="media/slider_right.png"></img>
        </div>}
    </section>

    {/* <script>

        const heroSection = document.querySelector('.hero');
        const cardContainer = document.querySelector('.hero'); // можно уточнить, если нужно

        const leftBtn = document.querySelector('img[src*="slider_left"]');
        const rightBtn = document.querySelector('img[src*="slider_right"]');

        function updateCardContent(card, slide) {
        card.innerHTML = `
            <div className="w-full h-full flex flex-col justify-around p-8 rounded-2xl text-center text-xl">
            <div><h1 className="text-3xl md:text-5xl font-bold">${slide.title}</h1></div>
            <div><p>${slide.description}</p></div>
            <div>
                ${slide.btns}
            </div>
            </div>
        `;
        }

        function showSlide(nextIndex, direction = 1) {
        const oldCard = document.querySelector('.hcard');
        const nextSlide = slides[nextIndex];

        // меняем фон
        heroSection.style.backgroundImage = `url('${nextSlide.bg}')`;

        // создаём новую карточку
        const newCard = oldCard.cloneNode(true);
        updateCardContent(newCard, nextSlide);

        // подготовка к анимации
        newCard.style.position = 'absolute';
        newCard.style.top = oldCard.offsetTop + 'px';
        newCard.style.left = oldCard.offsetLeft + 'px';
        newCard.style.transition = 'transform 0.5s ease-in-out';
        newCard.style.transform = `translateX(${direction * 200}%)`;
        newCard.style.zIndex = 2;

        oldCard.style.transition = 'transform 0.5s ease-in-out';
        oldCard.style.zIndex = 1;

        cardContainer.appendChild(newCard);

        // trigger reflow
        void newCard.offsetWidth;

        // запускаем анимацию
        requestAnimationFrame(() => {
            oldCard.style.transform = `translateX(${-direction * 200}%)`;
            newCard.style.transform = 'translateX(0)';
        });

        // после анимации: удалим старую
        setTimeout(() => {
            oldCard.remove();
            newCard.classList.remove('absolute');
            newCard.style.transform = '';
            newCard.style.transition = '';
            newCard.style.position = '';
        }, 500);

        currentSlide = nextIndex;
        }

        leftBtn.addEventListener('click', () => {
        const next = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(next, -1);
        });

        rightBtn.addEventListener('click', () => {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next, 1);
        });

        // свайп
        let startX = 0;
        heroSection.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        });
        heroSection.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) {
            rightBtn.click();
        } else if (endX - startX > 50) {
            leftBtn.click();
        }
        });
        // TACHPAD
        let isScrolling = false;
        heroSection.addEventListener('wheel', (e) => {
        // Защита от спама: игнорируем во время анимации
        if (isScrolling) return;

        const scrollX = Math.abs(e.deltaX) > Math.abs(e.deltaY)
            ? e.deltaX
            : e.shiftKey
            ? e.deltaY
            : 0;

        if (scrollX > 40) {
            const next = (currentSlide + 1) % slides.length;
            isScrolling = true;
            showSlide(next, 1);
        } else if (scrollX < -40) {
            const next = (currentSlide - 1 + slides.length) % slides.length;
            isScrolling = true;
            showSlide(next, -1);
        }

        // отпускаем после анимации
        if (scrollX !== 0) {
            setTimeout(() => {
            isScrolling = false;
            }, 600);
        }
        }, { passive: true });    
        
    </script>  */}
    </>
}