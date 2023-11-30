import React from "react";
import { useState, useEffect } from "react";
import "./EmpListing.css";
import { Link, useNavigate } from "react-router-dom";
const EmpListing = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetails = (id) => {
    navigate("/employee/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };

  const RemoveFunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("removed Successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // empdatachange(resp);
        // console.log(resp);
        empdatachange(resp);
        // console.log("data updated" + empdata);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1>Employee Listing</h1>
        </div>
        <div>
          <Link to="/employee/create" className="btn btn-success">
            Add New (+){" "}
          </Link>
        </div>

        <table className="table  table-bordered">
          <thead>
            <tr className="table-dark">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {empdata &&
              empdata.map((item) => (
                <tr key={item.id}>
                  <td className="btn-space">{item.id}</td>
                  <td className="btn-space">{item.name}</td>
                  <td className="btn-space">{item.email}</td>
                  <td className="btn-space">{item.phone}</td>
                  <td>
                    <a
                      onClick={() => {
                        LoadEdit(item.id);
                      }}
                      className="btn btn-success btn-space"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => {
                        RemoveFunction(item.id);
                      }}
                      className="btn btn-danger btn-space"
                    >
                      Remove
                    </a>
                    <a
                      onClick={() => {
                        LoadDetails(item.id);
                      }}
                      className="btn btn-primary btn-space"
                    >
                      Details
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpListing;
