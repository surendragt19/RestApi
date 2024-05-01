import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data,setData]=useState([])

  async function getdata(){
    const response=await fetch('http://localhost:3000')
    const result=await response.json()
    setData(result)
    if(!response.ok){
       alert(result.error)
    }
    if(response.ok){
        console.log(result)
    }
  }
  useEffect(()=>{
    getdata()
  },[])
  

  const deleteHandle=async(id)=>{
    const response=await fetch(`http://localhost:3000/${id}`,{
      method:'DELETE'
    });
    const result=await response.json()
    if(!response.ok){
      alert(result.error)
   }
   if(response.ok){
       alert("Item Deleted")
       setTimeout(()=>{
        getdata();
       },1000)
   }
  };
  

  return (
    <div className='container my-2'>
      <h2 className='text-center m-5'>All Users Insert Data</h2>
      <div className='row'>
      {
        data.map((ele)=>{
          return <>
          <div className='col-md-4 text-center'>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{ele.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
              <p className="card-text">{ele.age}</p>
              <a href="#" className="card-link" onClick={()=>deleteHandle(ele._id)}>Delete</a>
              <Link to={`/${ele._id}`} className="card-link">Edit</Link>
            </div>
          </div>
        </div>
          </>
        })
      }
    

 
 
       




      </div>
    </div>
  );
};

export default Read;
