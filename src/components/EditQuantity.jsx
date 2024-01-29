import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/EditQuantity.css";
import Groups from "./Groups";

function EditQuantity() {



  const [selectedGroup,setSelectedGroup] = useState(null);

  const [Quantity,setQuantity]=useState({
    oil:null,
    sugar:null
  })

  let oilData={
    item:'O',
    group:selectedGroup,
    remainingQuantity:Quantity.oil
  }

  let sugarData={
    item:'S',
    group:selectedGroup,
    remainingQuantity:Quantity.sugar
  }


  const handleClick = (group) => {
    setSelectedGroup(group);
  };

  const handleChange =(event)=>{
    setQuantity((prev)=>{
      return{
        ...prev,
        [event.target.name]:event.target.value
      }
    })
  }


 const handleOilSubmit=(e)=>{
  e.preventDefault();
  const url = 'https://shemachoch.onrender.com/app/oil_stock/?format=json'
 
  fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': localStorage.getItem('user'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(oilData),
  }).then( response => response.json())
    .then(data => {console.log(data)
      alert('Quantity Updated')})
    .catch((error) => {
      // Handle any errors that might occur
      alert(error);
    });
 }

 const handleSugarSubmit=(e)=>{
  e.preventDefault();
  const url = 'https://shemachoch.onrender.com/app/sugar_stock/?format=json'
  fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': localStorage.getItem('user'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sugarData),
  }).then( response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      // Handle any errors that might occur
      alert(error);
    });
 }

 const handleSubmit =(e)=>{
  e.preventDefault();
  if(Quantity.oil!==null){
    handleOilSubmit(e);
  }
  if(Quantity.sugar!==null){
    handleSugarSubmit(e);
  }

  if(Quantity.oil===null && Quantity.sugar===null ){
    alert('Oil and Sugar Can not be null');
  }
 }



  return (
    <div className="edit-quantity">
      <div className="edit-quantity-top">
        <h1>
          <Link to="/goods" style={{ color: "grey", textDecoration: "none" }}>
            Goods
          </Link>{" "}
          {">"} Add Quantity{" "}
        </h1>
      </div>

      <div className="edit-quantity-middle">
        <div className="edit-quantity-groups">
          <button
            className={
              selectedGroup ===1
                ? "edit-quantity-group-active"
                : "edit-quantity-group"
            }
            onClick={()=>handleClick(1)}
          >
            Group 1
          </button>

          <button
            className={
              selectedGroup ===2
                ? "edit-quantity-group-active"
                : "edit-quantity-group"
            }
            onClick={()=>handleClick(2)}
          >
            Group 2
          </button>

          <button
            className={
              selectedGroup === 3
                ? "edit-quantity-group-active"
                : "edit-quantity-group"
            }
            onClick={()=>handleClick(3)}
          >
            Group 3
          </button>

          <button
            className={
              selectedGroup === 4
                ? "edit-quantity-group-active"
                : "edit-quantity-group"
            }
            onClick={()=>handleClick(4)}
          >
            Group 4
          </button>
        </div>
      </div>

      <div className="edit-quantity-bottom">
            <form action="" onSubmit={handleSubmit}>
              <p>Oil Quantity</p>
              <input type="number" name="oil" onChange={handleChange}/>
              <p>Sugar Quantity</p>
              <input type="number" name="sugar" onChange={handleChange} />
              <button type="submit">Save</button>
            </form>
           
      </div>
    </div>
  );
}

export default EditQuantity;
