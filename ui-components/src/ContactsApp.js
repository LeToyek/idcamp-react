import React from "react";
import ContactList from "./contacts-app/ContactList";
import { getData } from "./contacts-app/data";

const ContactsApp = () => {
  const contacts = getData();
  return (
    <div>
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactsApp;
