import { useState } from "react";

// const handleChange = (e) => {

//     const { name, value } = target.e

//     setForms({ ...forms, [name]: value });
// };

// const handleChange = (formName) => {
//     (e) => {

//         const { name, value } = target.e

//         setForms({ ...forms, [formName]: { ...forms[formName], [name]: value } })
//     }
// }

// const handleChange = (formName) => ({ target: { name, value } }) => 
//     setForms({ ...forms, [formName]: { ...forms[formName], [name]: value } })

// const handleChange = (formName) => ({ target: { name, value } }) =>
//     setForms((prev) =>({
//         ...prev, 
//         [formName]: { ...prev[formName], [name]: value }
//     }))


export function useFormHandler(initialForms){
    const [forms, setForms] = useState(initialForms);

    const handleChange = (formName) => ({ target: { name, value } }) =>
    setForms((prev) =>({
        ...prev, 
        [formName]: { ...prev[formName], [name]: value }
    }));

    return{forms,handleChange};
}