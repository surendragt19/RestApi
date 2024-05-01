import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
const Create = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState(0)
    console.log(name,email,age)
    const navigate = useNavigate();


const handleSubmit=async (event)=>{
    event.preventDefault();
    const addUser={name,email,age}
    const response=await fetch('http://localhost:3000/',{
        method: "POST",
            body: JSON.stringify(addUser),
            headers: {
                "Content-Type": "application/json"
        }
    });
    const data=await response.json()
    if(!response.ok){
       alert(data.error)
    }
    if(response.ok){
        alert("Data is Insert Suceesfully")
        navigate('/read');
    }
    setName("")
    setAge(0)
    setEmail("")   
}


  return (
<>
<div className='container my-3 mt-10'>
        <h3 className='text-center'>Add New Data</h3>
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
    </>
  );
};

export default Create