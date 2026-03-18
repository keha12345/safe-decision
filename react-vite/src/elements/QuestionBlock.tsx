
import useForm from '../hooks/useForm';


export default function QuestionBlock(){
    const [h,send] = useForm({phone: '', name: '', text: ''})
    return <>
       <section id="QuestionBlock" data-aos="fade-up" className="w-full overflow-hidden mb-16">
            <div className="s2c py-14 md:pb-48 md:px-28">
                <div className="flex flex-col">
                    <div className="flex flex-wrap">
                    <div className="px-16 md:mx-0 text-5xl md:text-9xl font-semibold text-right w-full md:w-2/3" style={{color: 'rgb(216, 216, 216)'}}>
                        <div className="md:-mr-14">Остались</div>
                        <div className="text-left">Вопросы ?</div>
                    </div>

                    <div className="md:hidden flex items-center justify-center gap-2 p-4 w-full my-6">
                        <div style={{width: '55px', height: '1px', background: '#181818'}}></div>
                        <div style={{maxWidth: '310px'}} className="font-extralight text-center">
                            Напишите свой вопрос, и наши менеджеры подробно на него ответят!
                        </div>
                        <div style={{width: '55px', height: '1px', background: '#181818'}}></div>
                        {/* <!-- <a className="btn white inline-block text-center font-semibold" role="button">Подробнее</a> --> */}
                    </div>

                    <div className="mx-auto md:mt-36 pt-2 md:ml-12 mb-0 md:mb-0 mb-48 overflow-visible" style={{height: '150px', width: '267px'}}>
                        <div>
                            <input onChange={h} aria-label="name" type="text" name="name" placeholder="Ваше имя" className="input" />
                            <input onChange={h} aria-label="phone" type="tel" name="phone" placeholder="+7(999)999-9999" className="input" />
                            <textarea onChange={h} aria-label="textarea" name="textarea" placeholder="Ваш комментарий" rows={3} className="input" style={{height: '85px'}}></textarea>
                            <button onClick={send} type="submit" className="block bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold p-2 md:py-3 px-6 rounded-lg transition text-center md:text-start" style={{width: '267px'}}>
                                Отправить
                            </button>
                        </div>
                    </div>

                    </div>
                    <div className="hidden md:flex items-center mr-8">
                    <div style={{width: '178px', height: '1px', background: '#212121'}}></div>
                    <div style={{maxWidth: '440px'}} className="mx-4 font-extralight">
                        Напишите свой вопрос, и наши менеджеры подробно на него ответят!
                    </div>
                    <div style={{width: '178px', height: '1px', background: '#212121'}}></div>
                    {/* <!-- <a className="btn white inline-block text-center font-semibold" role="button">Подробнее</a> --> */}
                    </div>
                </div>
           
            </div>    
        </section>
    </>
}