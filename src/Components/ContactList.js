import React from 'react';
import { Button ,Container} from 'reactstrap';
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom';

const ContactList =(props) =>{

    {/*const contacts=[
        {
            id:"1",
            name:"mohit",
            email:"mohitsarva11@gmail.com"
        }
    ]*/}
    
    const deleteContactHandler= (id)=>{
        props.getContactId(id);
    }
    console.log(props);
    const contactlist=props.contacts.map((contacts)=>{
        return <ContactCard contacts={contacts} clickHandler={deleteContactHandler} key={contacts.id}/>
    })
    return(
        <div >
        <Container style={{border:'1px solid #000'}}>
        <h2 className="my-3">Contact List 
            <Link to="/add"><Button className="bg-success" style={{marginLeft:"600px"}}>Add New Contact</Button>
            </Link></h2><hr/>
       {contactlist}
       </Container>
        </div>
    )
};

export default ContactList;