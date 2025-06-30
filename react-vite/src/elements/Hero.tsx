import { useState } from 'react'
import useSwipe from '../hooks/useSwipe';


export default function Hero(){
    
    return <section className="w-full relative overflow-hidden">

    {/* Контент */}
    <div className="w-sm md:w-lg m-16 mb-0" >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Качественно — не значит «дорого»
      </h1>
      <p className="text-lg md:text-xl mb-8">
        Подбор трендовых товаров оптом от 1.7$ за кг
      </p>

      <div className="flex gap-4 justify-start">
        <a
          href="#consultation"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition"
        >
          Узнать стоимость
        </a>
        <a
          href="https://wa.me/79999999999"
          className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
    <div className="w-full relative h-screen -mt-16"
        style={{
            height: '325px',
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 10%)",
            backgroundImage: "url('/media/planet_06f7a40c8b.webp')"
    }}>
    </div>
  </section>

}
