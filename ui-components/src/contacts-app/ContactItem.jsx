import React from 'react'
import ContactItemBody from './ContactItemBody'
import ContactItemImage from './ContactItemImage'

const ContactItem = ({url,name,tag}) => {
  return (
    <div>
        <ContactItemImage url={url}/>
        <ContactItemBody name={name} tag={tag}/>
    </div>
  )
}

export default ContactItem