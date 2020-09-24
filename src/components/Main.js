import React, { useState, useEffect } from 'react'

// Components
import Form from './Form'
import MembersList from './MembersList'

const Main = () => {

    const [argonautes, setArgonautes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getArgonautes = async () => {
            setIsLoading(true)
            try {
                const response = await fetch("https://exo-crud-argonautes.herokuapp.com/api/argonaute")
                const data = await response.json()
                setArgonautes(data)
                setIsLoading(false)
            } catch (err) {
                console.error('getIdeas error: ', err, err.stack)
            }
        }
        getArgonautes()
    }, [])

    return (
        <main>
            <Form argonautes={argonautes} setArgonautes={setArgonautes} />
            <MembersList argonautes={argonautes} isLoading={isLoading} />
        </main>
    )
}

export default Main
