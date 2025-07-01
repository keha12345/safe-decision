import { useState } from "react";
import useContent from "../hooks/useContent";

const defdata = {
    title: 'Сделайте шаг к надёжной доставке!',
    subtitle: `Мы уверены, что организация доставки — это важный этап в построении успешного бизнеса. 
            Наша команда берёт на себя все заботы, чтобы процесс был максимально прозрачным, выгодным и спокойным для вас. 
            Мы помогаем на каждом этапе: от подбора поставщика до приёма товара на складе.`,
    options: [
      "Авиа-доставка",
      "Морская доставка",
      "Наземная доставка",
      "Индивидуальное решение"
    ],
    btn: 'Получить консультацию'
  }

export default function Quiz() {
  const content = useContent();
  const res = {...defdata, ...content.quiz}

  const [selected, setSelected] = useState(res.options[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Здесь можно отправить данные на сервер
    alert(`Вы выбрали: ${selected}, Имя: ${name}, Телефон: ${phone}`);
  };

  return (
    <div id='Quiz' data-aos="fade-up" className="bg-black text-white rounded-xl max-w-xl w-full mx-auto p-6 md:p-8">
      <div>
        <h2 className="text-xl font-bold uppercase leading-snug my-2">
          {res.title}
        </h2>
        <p className="text-sm text-gray-300 my-2">
          {res.subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="">
        <div className="my-6">
          {res.options.map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer">
              <span
                className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                  selected === opt ? "border-orange-400" : "border-white"
                }`}
              >
                {selected === opt && (
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                )}
              </span>
              <input
                type="radio"
                name="service"
                value={opt}
                checked={selected === opt}
                onChange={() => setSelected(opt)}
                className="hidden"
              />
              <span className="text-base">{opt}</span>
            </label>
          ))}
        </div>

        <input
          type="text"
          placeholder="ФИО"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="my-1 w-full bg-transparent border border-orange-500 text-white px-4 py-2 rounded focus:outline-none"
          required
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="my-1 w-full bg-transparent border border-orange-500 text-white px-4 py-2 rounded focus:outline-none"
          required
        />

        <button
          type="submit"
          className="my-1 bg-yellow-500 hover:bg-yellow-600 transition text-black font-semibold w-full py-3 rounded flex items-center justify-center gap-2"
        >
          {res.btn}
        </button>
      </form>
    </div>
  );
}