import React, { useState } from 'react'

const Form = ({ setArgonautes, argonautes }) => {

    const [input, setInput] = useState('')
    const [errorSameName, setErrorSameName] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        setErrorSameName(false)
        try {
            const rawResponse = await fetch('https://exo-crud-argonautes.herokuapp.com/api/argonaute/new', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: input })
            })
            const response = await rawResponse.json()
            if (response.error) {
                response.error.code === 11000 && setErrorSameName(true)
            } else {
                setArgonautes([...argonautes, response])
                setInput('')
            }
        } catch (err) {
            console.error('handleSubmit error: ', err, err.stack)
        }

    }

    return (
        <>
            <h2>Ajouter un(e) Argonaute</h2>
            <form className="new-member-form" onSubmit={e => handleSubmit(e)}>
                <label htmlFor="name">Nom de l&apos;Argonaute</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Charalampos"
                    onChange={e => setInput(e.target.value)}
                    value={input}
                />
                <button type="submit">Envoyer</button>
                {
                    errorSameName && <div className="error">Cet argonaute fait déjà partie du crew</div>
                }
            </form>
        </>
    )
}

export default Form
