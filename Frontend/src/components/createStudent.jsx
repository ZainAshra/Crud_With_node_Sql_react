import axios from "axios";
import React from "react";
import { useState } from "react";



const CreateStudent = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");


  const handleSunmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8081/create", {
        name,
        email,
      })
      .then((response) => {
        console.log(response);
       
      })
      .catch((error) => {
        console.log(error,"error");
      });
  };

  return (
    <>
      <div className="text-blue-900">
        <div className="">
          <form onSubmit={handleSunmit}>
            <h2>Email</h2>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
            <h2>Name</h2>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="btn btn-primary bg-blue-700">
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateStudent;
