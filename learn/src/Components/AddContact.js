import React from "react";
import "./AddContact.css"
import { useState } from "react"
const AddContact = (props) => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");

    function add(e){
        e.preventDefault();
        if(name===""||email==="")
        {
            alert("all fields are mandatory");
            return;
        }
        const newContact = {
            name: name,
            email: email,
          };
      
        props.addContactHandler(newContact);
        // console.log(name+" "+email);
        setname("");
        setemail("");
    }
  return (
    <div>
      <h1>Add Contact</h1>
      <div className="form-elements">
        <form onSubmit={add}>
            <label>Name</label>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)}/>
            <label>Email</label>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
            <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
