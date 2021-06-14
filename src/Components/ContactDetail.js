import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = (props) => {
 console.log(props);
 const {name,email}= props.location.state.contact;
  return (
    <div>
    <div className="">
      <div className="text-center" >
        <div className="text-center">
          <img src={user} alt="user" style={{height:"300px"}}/>
        </div>
        <div className="content text-center">
          <div className="header "><h3>{name}</h3></div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div text-center">
        <Link to="/">
          <button className="ui button blue center bg-warning my-3">
            Back to Contact List
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ContactDetail;