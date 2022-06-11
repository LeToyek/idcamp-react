import React from 'react'

const Body = ({date,title,content,link}) =>{
    return(
        <div>
            {date}
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Body