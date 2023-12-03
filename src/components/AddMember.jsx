import React, { useState } from "react";
import './css/AddMember.css'
import {Link } from 'react-router-dom'

function AddMember(){

  const[state,setState]=useState({
    memberName:'',
    ResidentIdNumber:'',
    QuantityOfOil:'',
    QuantityOfSugar:''
  });


  const handleChange=(event)=>{
    setState((prevValue)=>{
      return{
        ...prevValue,
        [event.target.name]:event.target.value
      }
    })
  }

  // console.log(state);

  const handleSubmit=(event)=>{
    event.preventDefault();
    // console.log('saved');
  }

  return(
    <div className="add-member">
      <div className="add-member-top">
        <h1>
          <Link to='/members' style={{color:'grey',textDecoration:"none"}}>
           <span>Members</span>
          </Link>
           {' >'} Add Member
        </h1>
      </div>

      <div>
        <form action="" className="add-member-middle">
        <div>
          <p>Member Name</p>
          <input type="text" name="memberName" id="" onChange={handleChange}/>
        </div>

        <div>
          <p>Resident ID Number</p>
          <input type="text" name="ResidentIdNumber" id="" onChange={handleChange} />
        </div>

        <div>
          <p>Quantity of Oil</p>
          <input type="text" name="QuantityOfOil" id="" onChange={handleChange}/>
        </div>

        <div>
          <p>Quantity of Sugar</p>
          <input type="text" name="QuantityOfSugar" id="" onChange={handleChange}/>
        </div>

        <button className="save-btn" onClick={handleSubmit}>Save</button>
        </form>
        

      </div>

      

    </div>
  )
}

export default AddMember;