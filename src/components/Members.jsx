import React from "react";
import { Link } from "react-router-dom";
import "./css/Members.css";
import Groups from "./Groups";
function Members() {
  return (
    <div className="members">
      <div className="members-top">
        <h1>Members</h1>

        <Link to='/members/addMember'>
         <button>+Add Member</button>
        </Link>
       
      </div>

      <div className="members-middle">
        <input
          type="text"
          className="members-search"
          placeholder="Search Members..."
        />
        <Groups />
      </div>

      <div className="members-bottom">
        <div className="members-bottom-left">
          <h1>oil</h1>
          <div className="filter-container">
            <p>All</p>
            <input type="radio" />
            <p>Recieved</p>
            <input type="radio" />
            <p>Not Recieved</p>
            <input type="radio" />
          </div>

          </div>

          <div className="members-bottom-right">
            <h1>Sugar</h1>
            <div className="filter-container">
              <p>All</p>
              <input type="radio" />
              <p>Recieved</p>
              <input type="radio" />
              <p>Not Recieved</p>
              <input type="radio" />
            </div>
          </div>
        </div>

        <div className="members-table" border='1'>
        <table>
              <tr>
                <th>Coupon Number</th>
                <th>Member name</th>
                <th>Member Group</th>
                <th>Oil</th>
                <th></th>
                <th>Sugar</th>
                <th></th>
              </tr>
              <tr>
                <td>001</td>
                <td>Natnael Mulugeta</td>
                <td>Group 1</td>
                <td>5 litre</td>
                <td><input type="radio"/></td>
                <td>3kg</td>
                <td><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>002</td>
                <td>Kaleab Alebachew</td>
                <td>Group 2</td>
                <td> - </td>
                <td><input type="radio" /></td>
                <td>5 kg</td>
                <td><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>002</td>
                <td>Kaleab Alebachew</td>
                <td>Group 3</td>
                <td> - </td>
                <td><input type="radio" /></td>
                <td>5 kg</td>
                <td><input type="checkbox"/></td>
              </tr>
            </table>
        </div>
      </div>
  );
}

export default Members;
