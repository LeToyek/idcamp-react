import React from 'react'

const cardHeader = ({category,image})  =>{
    return(
        <div>
            <h6>{category}</h6>
            <img src={image} alt="p" />
        </div>
    )
}

export default cardHeader