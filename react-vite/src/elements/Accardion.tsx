import { useState } from 'react'


export default function Accardion({list, title}:{list: Array<{q: string | JSX.Element, a: string | JSX.Element}>, title?: string}){
    const [opens, setOpens] = useState<Array<number>>([]);

    const openHandler = (i: number) =>{
        if(opens.includes(i)) setOpens(opens.filter(o=>o!=i));
        else setOpens([...opens, i]);
    }
    return <>
       <section id="Accardion" className="w-xl mx-auto md:m-32 md:mx-48 relative owerflow-hidden">
            <h1 className="text-center text-3xl md:text-5xl font-semibold mt-24 mb-4">{title||'Часто задаваемые вопросы'}</h1>
            <div className="accordion">

                {list.map((it,i)=><div key={it.q.toString()} className={`accordion-item my-4${opens.includes(i)?' open':''}`}>
                    <div className="accordion-header"
                        onClick={()=>openHandler(i)}
                    >
                        <h3 className="text-xl font-bold">{it.q}</h3>
                        <button className="accordion-btn">
                            <svg className="w-8 h-8 transform transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M5 12h14" />
                            </svg>
                        </button>
                    </div>
                    <div className="accordion-content">
                        <p className="mb-4">{it.a}</p>
                    </div>
                </div>)}
                

            </div>
        </section>
        {/* <script defer>
            function initAccardeon(){
            const accordionItems = document.querySelectorAll('.accordion-item');
            accordionItems.forEach((item) => {
                const btn = item.querySelector('.accordion-header');
                btn.addEventListener('click', () => {
                item.classList.toggle('open');
                console.log(item);
                
                });
            });
            }
            initAccardeon()
        </script> */}
    </>
}