import logo from './logo.svg';
import {uuid} from 'uuidv4';
import {render} from 'react-dom';
import api from './api/contacts';
import './App.css';
import {Button,Container, Row, Col} from "reactstrap";
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';

import React, { useState,useEffect } from 'react';
import Header from './Components/Header';
import AddContacts from './Components/AddContacts';
import ContactList from './Components/ContactList';
import ContactDetail from './Components/ContactDetail';
import EditContact from './Components/EditContact';


function App() {

    const Local_key="contacts";

    {/*const contacts=[{
        id: "1",
        name: "mohit",
        email: "mohitsarva@gmail.com",
    }];*/}

    //Fetch_contact_details
    const fetchContact= async() =>{
       const response=await api.get("/contacts");
       return response.data;
    }


    const [contacts,setContacts] = useState([]);
    const addContactHandler=async(contact)=>{
        console.log(contact);
        const request = {
          id: uuid(),
          ...contact,
        };
    
        const response = await api.post("/contacts", request);
        console.log(response);
        setContacts([...contacts, response.data]);
       // setContacts([...contacts,{   id: uuid(),   ...contact}]);
    }

    const removeContactHandler=async(id)=>{
      await api.delete(`/contacts/${id}`);
        const newContactList=contacts.filter((contacts)=>{
              return contacts.id !== id;
        });
        setContacts(newContactList);

    }

    const updateContactHandler = async (contact) => {
      const response = await api.put(`/contacts/${contact.id}`, contact);
      const { id, name, email } = response.data;
      setContacts(
        contacts.map((contact) => {
          return contact.id === id ? { ...response.data } : contact;
        })
      );
    };
    
    {/*Localstorage */}
    useEffect(()=>{
      // const getcontact= JSON.parse(localStorage.getItem(Local_key));
       // if(getcontact){setContacts(getcontact);}
       const getAllcontacts= async () =>{
         const allContacts = await fetchContact();
         if(allContacts) setContacts(allContacts);
       };
       getAllcontacts();
    },[]);


    useEffect(()=>{
      //  localStorage.setItem(Local_key,JSON.stringify(contacts));
    },[contacts]);


    return(
        <>
       
        <div> <Router>
            <Container Classname="mx-2 my-2">
            <Header/>
            <Switch>
            <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContacts {...props} addContactHandler={addContactHandler} />
            )}
          />
           <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />
        <Route path="/contact/:id" component={ContactDetail} />
            </Switch>
            
            {/*<AddContacts addContactHandler={addContactHandler}/>
            <ContactList contacts={contacts} getContactId={removeContactHandler}/>*/}
            </Container>
            </Router>
        </div>
        
        </>    
    )
}   

 

export default App;
