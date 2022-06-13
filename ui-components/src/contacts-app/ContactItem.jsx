import React from 'react'
import ContactItemBody from './ContactItemBody'
import ContactItemImage from './ContactItemImage'
import DeleteButton from './DeleteButton'

const ContactItem = ({imageUrl,name,tag,id,onDelete}) => {
  return (
    <div>
        <ContactItemImage imageUrl={imageUrl}/>
        <ContactItemBody name={name} tag={tag}/>
        <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  )
}

export default ContactItem