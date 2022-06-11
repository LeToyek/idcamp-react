import React from 'react'

const ContactItemBody = ({name,tag}) => {
  return (
    <div>
        <h3 className="item_title">
            {name}
        </h3>
        <p className="item_username">
            @{tag}
        </p>
    </div>
  )
}

export default ContactItemBody