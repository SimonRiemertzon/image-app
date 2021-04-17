import React from 'react'
const Button = ({ color, text }) => {
    const uploadImage = (e) => {

    }

    return (
        <button
            onClick={uploadImage}
            style={{ backgroundColor: color }}
            className='btn'>
                
            Upload Image Here
        </button>
    )
}

export default Button
