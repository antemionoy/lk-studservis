import { useState, useEffect } from "react"

const usePhoneMask = (value) => {
    const [phone, setPhone] = useState(value)

    useEffect(() => {
        function handlerInput(e){
            if(e.target.type != 'tel') return

            let val = e.target.value.replace(/\D/g, '');

            if (val) {
                if (val[0] === '7' || val[0] === '8') {
                    val = val.slice(1);
                }

                val = val.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
                val = '+7' + (val[2] ? '(' + val[1] + ')' + val[2] : (val[1] ? val[1] : '')) + (val[3] ? '-' + val[3] : '') + (val[4] ? '-' + val[4] : '');
            }

            setPhone(val);   
        }

        document.addEventListener('input', handlerInput);
        return () =>  document.removeEventListener('input', handlerInput);
    }, [])

    return phone
}

export default usePhoneMask