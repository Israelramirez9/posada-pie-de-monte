import React, { useState } from 'react'

function Form() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        asunto: "",
        texto: ""
    });
    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });

    }
    console.log(input)
    return (
        <form action='' method="POST" className="flex flex-col items-center justify-center p-8 border-solid rounded-xl border-4 gap-4">
            <label htmlFor="name">Nombre:</label>
            <input onChange={handleChange} type="text" id="name" name="name" placeholder='Carlos Antonio...' value={input.name} required />
            <label htmlFor="email">Email:</label>
            <input onChange={handleChange} type="email" id="email" name="email" placeholder='juan@gmail.com' value={input.email} required />
            <label htmlFor="asunto">Asunto:</label>
            <input onChange={handleChange} type="text" id="asunto" name="asunto" placeholder='reserva...' value={input.asunto} required />
            <label id="texto">Consulta:</label>
            <textarea onChange={handleChange} name="texto" value={input.texto}  placeholder='escribe tu consulta...'></textarea>
           
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form