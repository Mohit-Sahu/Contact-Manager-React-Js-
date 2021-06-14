import logo from './logo.svg';
import {uuid} from 'uuidv4';
import {render} from 'react-dom';
import './App.css';
import {Button,Container, Row, Col} from "reactstrap";
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';

import React, { useState,useEffect } from 'react';
import Header from './Components/Header';
import AddContacts from './Components/AddContacts';
import ContactList from './Components/ContactList';
import ContactDetail from './Components/ContactDetail';


function App() {

    const Local_key="contacts";

    {/*const contacts=[{
        id: "1",
        name: "mohit",
        email: "mohitsarva@gmail.com",
    }];*/}

    const [contacts,setContacts] = useState([]);
    const addContactHandler=(contact)=>{
        console.log(contact);
        setContacts([...contacts,{   id: uuid(),   ...contact}]);
    }

    const removeContactHandler=(id)=>{
 
        const newContactList=contacts.filter((contacts)=>{
              return contacts.id !== id;
        });
        setContacts(newContactList);

    }
    
    {/*Localstorage */}
    useEffect(()=>{
       const getcontact= JSON.parse(localStorage.getItem(Local_key));
       
       if(getcontact){setContacts(getcontact);}
    },[]);


    useEffect(()=>{
        localStorage.setItem(Local_key,JSON.stringify(contacts));
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
