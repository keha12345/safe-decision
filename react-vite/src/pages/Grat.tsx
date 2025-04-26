
import Hero from '../elements/Hero'

export default function Grat({}){

    return <>
        <Hero slides={[
            {
                bg: 'media/hero1.png',
                title: <>Спасибо<br/>за заявку !</>,
                description: <>Ваша заявка была успешно отправлена. <br/>Наш сотрудник свяжется с вами в ближайшее время</>,
                btns: <a className="btn ellow inline-block m-1" href='/'>На главную</a>
            }
        ]} />
    </>
}