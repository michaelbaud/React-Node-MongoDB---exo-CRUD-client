import React from 'react'

// Components
import Loader from './Loader'

const MembersList = ({ argonautes, isLoading }) => {

    return (
        <>
            <h2>Membres de l'équipage</h2>
            {
                isLoading && <Loader />
            }
            <section className="member-list">
                {
                    argonautes.map(argonaute => {
                        return <div key={argonaute._id} className="member-item">{argonaute.name}</div>
                    })
                }
            </section>
        </>
    )
}

export default MembersList
