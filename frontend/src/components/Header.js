import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title} image Uploading Application</h1>
            <Button color='green'/>
            <Button color='blue'/>
        </header>
    )
}

Header.defaultProps = {
    title: "Simons"
}

Header.propTypes = {
    title: PropTypes.string
}


export default Header
