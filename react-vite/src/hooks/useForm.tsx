import { useState } from "react"
import { useNavigate } from "react-router";

const prefix = '/save-decision'

export default function useForm(def:object){
    let navigate = useNavigate();
    const [data, setData] = useState<any>(def);
    const handler = (e:any) => {
        setData((prev: any)=>({...prev, [e.target.name]: e.target.value}))
    }
    return [handler, function(){
        fetch(`https://api.telegram.org/bot${'7231741401:AAFw5YIgblEphuWa5ZYV7wExnmM-5mt2vdg'}/sendMessage`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chat_id: 323811652,
              text: `Site client's request: \n\n ${JSON.stringify(data)}`,
            })
        });
        navigate(prefix+'/grat');
    }]
}


