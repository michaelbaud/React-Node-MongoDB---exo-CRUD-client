import React from 'react'

// Dependencies
import { FaSpinner } from 'react-icons/fa'

const Spinner = () => {
    return (
        <div className="loaderContainer">
            <div className="faSpinner--container">
                <FaSpinner className="faSpinner" />
            </div>
        </div>
    )
}

export default Spinner