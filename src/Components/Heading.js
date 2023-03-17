import React from 'react'

const Heading = ({heading,color}) => {
    return (
        <h1 className={`text-3xl md:text-4xl text-center relative heading-style ${color}`}>
            {heading}
        </h1>
    )
}

export default Heading
