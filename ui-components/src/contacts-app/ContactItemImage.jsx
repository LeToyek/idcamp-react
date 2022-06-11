import React from 'react'


const ContactItemImage = ({url}) => {

  return (
    <div>
        <img src={url} alt='contact avatar' />
    </div>
  )
}

export default ContactItemImage