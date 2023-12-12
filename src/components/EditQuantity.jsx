import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/EditQuantity.css";
import Groups from "./Groups";

function EditQuantity() {
  const [selectedGroup,setSelectedGroup] = useState(null);

  const handleClick = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="edit-quantity">
      <div className="edit-quantity-top">
        <h1>
          <Link to="/goods" style={{ color: "grey", textDecoration: "none" }}>
            Goods
          </Link>{" "}
          {">"} Edit Quantity{" "}
        </h1>
      </div>

      <div className="edit-quantity-middle">
        <div className="edit-quantity-groups">
          <button
            className={
              selectedGroup ==='group-1'
                ? "edit-quantity-group-active"
                : "edit-quantity-group"
            }
            onClick={()=>handleClick('group-1')}
          >
            Group 1
          </button>

          <button
            className={
              selectedGroup ==='group-2'
                ? "edit-quantity-group-active"
                : "edit-quantity-group"
            }
            onClick={()=>handleClick('group-2')}
          >
            Group 2
          </button>

          <button
            className={
              selectedGroup === 'group-3'
                ? "edit-quantity-group-active"
                : "edit-quantity-group"
            }
            onClick={()=>handleClick('group-3')}
          >
            Group 3
          </button>

          <button
            className={
              selectedGroup === 'group-4'
                ? "edit-quantity-group-active"
                : "edit-quantity-group"
            }
            onClick={()=>handleClick('group-4')}
          >
            Group 4
          </button>
        </div>
      </div>

      <div className="edit-quantity-bottom">
            <p>Oil Quantity</p>
            <input type="text" />
            <p>Sugar Quantity</p>
            <input type="text" />
            <button>Save</button>
      </div>
    </div>
  );
}

export default EditQuantity;
