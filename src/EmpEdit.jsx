import React from 'react'
import { useParams,useNavigate} from 'react-router-dom';
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
const EmpEdit = () => {
  const eid=useParams();
 
 
  const [id,setId]=useState("");
  const [name,nameChange]=useState("");
  const [email,emailChange]=useState("");
  const [phone,phoneChange]=useState("");
  const [active,activeChange]=useState(true);
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const empdata={id,name,email,phone,active};
    fetch("http://localhost:8000/employee/"+eid.empid,{
      method: "PUT",
      headers: {"content-type": "application/json"},
      body:JSON.stringify(empdata)
    }).then((res)=>
    {
      alert("Saved Successfully");
      navigate('/');
    }).catch((err)=>{
      console.log(err.message);
    })
  }
  useEffect(()=>{
    fetch("http://localhost:8000/employee/"+eid.empid).then((res)=>{
      return res.json();
    }).then((resp)=>{
        setId(resp.id);
        nameChange(resp.name);
        emailChange(resp.email);
        phoneChange(resp.phone);
        activeChange(resp.active);
    }).catch((err)=>{
      console.log(err.message);
    })
  },[]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1>Employee Edit</h1>
        </div>
        <form className="createEmp" style={{ "text-align": "left" }} onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInput" class="form-label">
              ID
            </label>
            <input type="text" class="form-control" id="exampleInput" value={id} disabled="disabled"/>
          </div>
          <div class="mb-3">
            <label for="exampleInput" class="form-label">
              Name
            </label>
            <input required type="text" class="form-control" id="exampleInput" value={name} onChange={e=>nameChange(e.target.value)}/>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              required
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e)=>emailChange(e.target.value)}
            />
           
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Phone
            </label>
            <input
            required
              type="tel"
              class="form-control"
              id="exampleInputPassword1"
              value={phone}
              onChange={(e)=>phoneChange(e.target.value)}
            />
          </div>
          <div class="mb-3 form-check">
            <input
              required
            checked={active}
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              value={name}
              onChange={(e)=>activeChange(e.target.checked)}
            />
            <label class="form-check-label" for="exampleCheck1">
              Is Active
            </label>
          </div>
          <button type="submit" class="btn btn-success btn-space">
            Save
          </button>
         
          <Link to ="/" class="btn btn-danger btn-space">
            Back
          </Link>
        </form>
      </div>
    </div>
 
  )
}

export default EmpEdit
