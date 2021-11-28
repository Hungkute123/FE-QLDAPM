import React from 'react'
import PropTypes from 'prop-types'

export const Helmet = props => {

    document.title = 'Fahasa - ' + props.title

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

