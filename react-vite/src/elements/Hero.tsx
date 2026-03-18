import React from "react";
import useContent from "../hooks/useContent";

const defaultContent = {
    title: 'Качественно — не значит «дорого»',
    subtitle: 'Подбор трендовых товаров оптом от 1.7$ за кг',
    buttons: <>
        <a href="#DeliverySlider" className="block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold mb-2 p-2 md:py-3 px-6 rounded-lg transition text-center md:text-start" >
        Узнать стоимость
        </a>
        <a href="https://wa.me/79999999999" className="block bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold p-2 md:py-3 px-6 rounded-lg transition text-center md:text-start" >
        WhatsApp
        </a>
    </>
}

export default function Hero(content:{
    title?: string,
    subtitle?: string,
    buttons?: JSX.Element
}){
    const c = useContent();
    const res = {...defaultContent, ...c.mainPage, ...(content||{})}

    return <section className="w-full relative overflow-hidden md:mb-16">

    {/* Контент */}
    
    <div data-aos="zoom-in-up" className="relative bg-top h-screen"
        style={{
            width: '100vw',
            maxWidth: '1480px',
            margin: '0 auto',
            height: '80vh',
            maxHeight: '100vw',
            backgroundImage: "url('/media/planet_06f7a40c8b.webp')",
            backgroundSize: '100%',
    }}>
        <GlowArc />
        <div className="flex justify-center"
        style={{
            width: '100%',
            height: '100%',
            background: "linear-gradient(180deg, rgb(31, 31, 31) 0%, rgba(0, 0, 0, 0) 10%, rgb(31, 31, 31) 100%)",
        }}>
            <div data-aos="fade-down" className="w-sm md:w-full mx-auto m-16 mb-0 md:m-0 absolute bottom-4 md:bottom-16 md:text-center" >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {res.title}{/* Качественно — не значит «дорого» */}
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    {res.subtitle}{/* Подбор трендовых товаров оптом от 1.7$ за кг */}
                </p>

                <div className="md:flex md:justify-center md:items-start gap-4">
                    {res.buttons}
                </div>
            </div>
        </div>
    </div>
  </section>

}




  const GlowArc = () => {
    const isPhoneScreen = (typeof window !== 'undefined' && window.innerWidth < 768);

    const baseStyle = {
        position: 'absolute',
        top: isPhoneScreen? '11.5%' :'22.5%',
        left: '52%',
        width: isPhoneScreen? '7px':'11px',
        height: isPhoneScreen? '7px':'11px',
        borderRadius: '50%',
        backgroundColor: 'white',
        filter: 'blur(1px)',
    }
    return (
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        <div
          style={{
            ...baseStyle,
            transformOrigin: '11vw 0', // радиус движения
            animation: 'orbit1 5s linear infinite',
          } as React.CSSProperties}
        />
        <div
          style={{
            ...baseStyle,
            transformOrigin: '17.3vw  0', // радиус движения
            animation: 'orbit2 7s linear infinite',
          } as React.CSSProperties}
        />
  
        <style>{`
          @keyframes orbit1 {
            from {
              transform: rotate(35deg) translateX(37vw); /* полукруг */
              opacity: 0.6;
            }
            to {
              transform: rotate(0deg) translateX(0);
              opacity: 1;
            }
          }
          @keyframes orbit2 {
            from {
              transform: rotate(42deg) translateX(52vw); /* полукруг */
              opacity: 0.6;
            }
            to {
              transform: rotate(0deg) translateX(0);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  };