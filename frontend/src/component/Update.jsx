import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0)
  const { id } = useParams();
  const navigate = useNavigate();


  const oldData = async () => {
      const response = await fetch(`http://localhost:3000/${id}`);
      const userData = await response.json();
      console.log("userData:", userData)
      setName(userData.name);
      setEmail(userData.email);
      setAge(userData.age);
  };

  useEffect(() => {
    oldData();
  }, []);

  const handleSubmit=async (event)=>{
    event.preventDefault();
    const updatedUser={name,email,age}
    const response=await fetch(`http://localhost:3000/${id}`,{
        method: "PATCH",
            body: JSON.stringify(updatedUser),
            headers: {
                "Content-Type": "application/json"
        }
    });
    const data=await response.json()
    if(!response.ok){
       alert(data.error)
    }
    if(response.ok){
        alert("Data is Updated Suceesfully")
        navigate('/read');
    } 
}

  return (
    <div className='container my-3'>
      <h3 className='text-center'>Edit User Data</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Update;
