import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class EditContact extends React.Component {

    constructor(props) {
        super(props);
        const { id, name, email } = props.location.state.contact;
        this.state = {
          id,
          name,
          email,
        };
      }

    state ={
        name:"",
        email:""
    }
     update=(e)=>{

        e.preventDefault();
        if(this.state.name === "" && this.state.email ===""){
            alert("all fields are mandatory");
        }
        this.props.updateContactHandler(this.state);
        this.setState({name:"",email:""});
        console.log(this.state);
        this.props.history.push("/");
    }

 render(){
  return (
      <>
      <h3>Edit Contact</h3>
    <Form onSubmit={this.update}>
        <FormGroup>
        <Label for="Name">Name</Label>
        <Input type="text" name="text" id="name" placeholder="Enter Name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} />
      </FormGroup>
     
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Enter Email"  value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
      </FormGroup>
      
     
      
      
      <Button className="my-3 bg-success" style={{width:"100px"}}>Update</Button>
    </Form>
    </>
  );}
}

export default EditContact;