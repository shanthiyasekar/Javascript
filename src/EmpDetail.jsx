import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
const EmpDetail = () => {
  const id=useParams();
  const [empdata,empdatachange]=useState({});
  console.log(id);

  useEffect(()=>{
    fetch("http://localhost:8000/employee/"+id.empid).then((res)=>{
      return res.json();
    }).then((resp)=>{
      console.log("details"+resp);
      empdatachange(resp);
    }).catch((err)=>{
      console.log(err.message);
    })
  },[]);

  return (
    <div>
      <h2>Details of the Employee</h2>
    {empdata &&
    <div>
      <h1>The Employee Name is :{empdata.name}</h1>
      <h2>Contact Details</h2>
      <h3>Email is:{empdata.email}</h3>
      <h5>Phone is :{empdata.phone}</h5>
      <Link to="/" class="btn btn-primary">Back to Listing</Link>
    </div>

    }
     
    </div>
  )
}

export default EmpDetail
