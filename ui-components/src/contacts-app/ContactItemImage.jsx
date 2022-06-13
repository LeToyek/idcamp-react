import React from 'react'


const ContactItemImage = ({imageUrl}) => {
  return (
    <div>
        <img src={(imageUrl)} alt='contact avatar' />
    </div>
  )
}

export default ContactItemImage