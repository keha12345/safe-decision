import { useState } from "react"
import { useNavigate } from "react-router";

const prefix = window.location.href.includes('github')? '/safe-decision':'';

export default function useForm(def:object){
    let navigate = useNavigate();
    const [data, setData] = useState<any>(def);
    const handler = (e:any) => {
        setData((prev: any)=>({...prev, [e.target.name]: e.target.value}))
    }
    return [handler, function(){
        // fetch(`https://api.telegram.org/bot${'7231741401:AAHRDQb18fZU7MN2mlwq7CRmlM6Ru2ft6Sg'}/sendMessage`, {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //       chat_id: 538898722,//538898722,//323811652,
        //       text: `Site client's request: \n\n ${JSON.stringify(data)}`,
        //     })
        // });
         try {
            // Ищем форму внутри контейнера amoCRM (замените селектор, если у вас другой ID контейнера)
            const amoForm = document.querySelector('#amoforms_form') as HTMLFormElement;
            // const amoSubmitButton = amoForm.querySelector('#button_submit') as HTMLButtonElement;

            if (amoForm) {
                const amoField = amoForm.querySelector('textarea[type*="text"]') as HTMLInputElement;
                amoField.value = JSON.stringify(data, null, 4);
                amoField.dispatchEvent(new Event('input', { bubbles: true }));

                const formData = new FormData(amoForm);
                fetch(amoForm.action, {
                    method: 'POST',
                    body: formData, // Браузер сам выставит нужный multipart/form-data
                    mode: 'no-cors' // Отключаем жесткую проверку CORS, так как шлюз amoCRM внешний
                })
                .then(() => console.log('Данные успешно улетели в amoCRM'))
                .catch(err => console.error('Ошибка отправки fetch:', err));
                // setTimeout(() => amoSubmitButton.click(),1);
            } else {
                console.warn("Скрытая форма amoCRM еще не успела загрузиться на страницу.");
            }
        } catch (error) {
            console.error("Ошибка зеркалирования в amoCRM:", error);
        }
        navigate(prefix+'/grat');
    }, data]
}


