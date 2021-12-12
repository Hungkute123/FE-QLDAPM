import React from 'react'
import PropTypes from 'prop-types'

export const Helmet = () => {

    document.title = 'Fahasa - ' 

    return (
        <div>
           
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

