import React from "react";
import AddContact from "./contacts-app/AddContact";
import ContactList from "./contacts-app/ContactList";
import { getData } from "./contacts-app/data";

class ContactsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this)
  }
  onAddContactHandler({name,tag}){
    this.setState(prevState=>{
      return{
        contacts:[
          ...prevState.contacts,
          {id: +new Date(),
            name,
            tag,
            imageUrl: require('./contacts-app/images/default.jpg')
          }
        ]
      }
    })
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Contacts app</h1>
        <h2>Tambah Kontak</h2>
        <AddContact addContact={this.onAddContactHandler}/>
        <h2>Daftar Kontak</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

// const ContactsApp = () => {
//   const contacts = getData();

//   return (
//     <div>
//       <h1>Daftar Kontak</h1>
//       <ContactList contacts={contacts} />
//     </div>
//   );
// };

export default ContactsApp;
