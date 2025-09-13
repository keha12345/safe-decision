

export default function BestPrice() {
    
    return <>
    <section id="info" className="s2 w-full overflow-hidden pt-16">
            <div data-aos='fade-up' className="flex flex-col items-center md:pt-28 md:px-36">
                <div className="flex flex-wrap-reverse">
                    <div className="font-extralight" style={{marginLeft: '32px'}}>
                    <div className="text-lg text-3xl mb-8">
                        {/* Мы российско-китайская <br/> логистическая компания: */}
                        {res.info.title.split(' ').slice(0,2).join(' ')}
                        <br />
                        {res.info.title.split(' ').slice(2).join(' ')}
                    </div>
                    {res.info.points.map(el=><div key={el} className="flex items-center">
                            <div className="w-40 md:w-48" style={{height: '1px', background: '#d8d8d8'}}></div><div style={{width: '5px', height: '5px', borderRadius: '5px', background: '#fff'}}></div> 
                            <div className="ml-4">
                                {el}
                            </div>
                        </div>
                    )}
                    </div>
                    <div className="hidden md:block text-7xl font-semibold" style={{marginTop: '-48px', marginLeft: '-74px', color: '#d8d8d8'}}>
                    <div className="text-9xl">{res.info.highlighted[0]}</div>
                    <div className="text-center">{res.info.highlighted[1]} </div>
                    <div style={{marginLeft: '360px'}}>{res.info.highlighted[2]}</div>
                    </div>
                    <div className="block md:hidden flex justify-between w-full text-4xl m-8 font-semibold">
                    <div>
                        <div className="text-7xl">{res.info.highlighted[0]}</div>
                        <div>{res.info.highlighted[1]} </div>
                        <div>{res.info.highlighted[2]}</div>
                    </div>
                    <div data-aos="fade-left">
                        <img src="media/ch_flag.png" alt="" style={{width: '140px'}} /> 
                        <img src="media/ru_flag.png" alt="" style={{width: '112px', marginLeft: '14px', transform: 'rotate(-18deg)'}} /> 
                    </div>
                    </div>
                </div>
                <div className="flex items-center mt-8 mx-6 py-16 md:pt-1">
                    <a href="#QuestionBlock" className="block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold mb-2 p-2 md:py-3 px-6 rounded-lg transition text-center md:text-start" >
                        {res.info.moreLinkText}
                    </a>
                    <div className="w-full" style={{height: '1px', background: '#d8d8d8'}}></div>
                </div>
            </div>    
        </section>
    </>
} 