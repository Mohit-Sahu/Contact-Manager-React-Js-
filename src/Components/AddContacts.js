import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddContacts extends React.Component {

    state ={
        name:"",
        email:""
    }
     add=(e)=>{

        e.preventDefault();
        if(this.state.name === "" && this.state.email ===""){
            alert("all fields are mandatory");
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
        console.log(this.state);
        this.props.history.push("/");
    }

 render(){
  return (
      <>
    <Form onSubmit={this.add}>
        <FormGroup>
        <Label for="Name">Name</Label>
        <Input type="text" name="text" id="name" placeholder="Enter Name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} />
      </FormGroup>
     
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Enter Email"  value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
      </FormGroup>
      
     
      
      
      <Button className="my-3 bg-success" style={{width:"100px"}}>Add</Button>
    </Form>
    </>
  );}
}

export default AddContacts;