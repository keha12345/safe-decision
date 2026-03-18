
import Hero from '../elements/Hero'

const prefix = window.location.href.includes('github')? '/safe-decision':'';

export default function Grat({}){

    return <>
        <Hero slides={[
            {
                bg: 'media/hero1.png',
                title: <>Спасибо<br/>за заявку !</>,
                description: <>Ваша заявка была успешно отправлена. <br/>Наш сотрудник свяжется с вами в ближайшее время</>,
                btns: <a className="btn ellow inline-block m-1" href={`${prefix}/`}>На главную</a>
            }
        ]} />
    </>
}