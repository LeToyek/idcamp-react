import React from 'react';
import ReactDOM from 'react-dom/client';
import ControlledComp from './components/ControlledComp';
import ContactsApp from './ContactsApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactsApp />
  </React.StrictMode>
);


