import React from 'react';
import {Button,Container,Row,Col} from 'reactstrap';
import {Link} from "react-router-dom";


const ContactCard=(props)=>{
    const {id,name,email}=props.contacts;
    return(
      
        <>
        
        <div className="item"  >
          
        <Row>
              <Col md="9">
              <Link
          to={{ pathname: `/contact/${id}`, state:{contact:props.contacts} }}
        >
            <h3><div className="header" >
              {name}
            </div></h3>
            <div className="">
              {email}
            </div>
            </Link>
            </Col>
            <Col md="3" >
            
            <Button className="bg-danger my-5" onClick={()=>props.clickHandler(id)}>Delete</Button>
            
            </Col>
            </Row>
           
          

        </div>
       

      
        </> 
    )
};

export default ContactCard;