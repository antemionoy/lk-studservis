import { useState } from "react";
import FormContext from "./FormContext";

const formInitialValues = {
    name: '',
    email: '',
    password: ''
}

const FormProvider = ({ children }) => {
    const [form, setForm] = useState()

    return (
        <FormContext.Provider value={''}>
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider