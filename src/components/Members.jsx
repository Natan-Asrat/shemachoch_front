import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Members.css";
import Groups from "./Groups";
import ClipLoader from 'react-spinners/ClipLoader';

function Members() {

 const [membersData,setMembersData]=useState([]);
//   {
//     'id': '',
//     'name': '',
//     'group': '',
//     'quantityOil': '',
//     'quantitySugar': '',
//     'hasReceivedOil': '',
//     'hasReceivedSugar': ''

//   }
//  ]);
 const [loadingTable, setLoadingTable] = useState(true);

 useEffect(()=>{
  fetch('https://shemachoch.onrender.com/app/members/?format=json', {
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem('user'),
      'Content-Type': 'application/json',
    }})
  .then(response => response.json())
  .then(data => {
    
    setMembersData(Array.isArray(data) ? data : [])
    console.log(membersData.length)
    if(membersData.length>0){
      setLoadingTable(false)
    }
  })
},[])




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
              <tr className="header">
                <th>Coupon Number</th>
                <th>Member name</th>
                <th>Member Group</th>
                <th>Oil</th>
                <th></th>
                <th>Sugar</th>
                <th></th>
              </tr>
              {loadingTable ? 
              <tr >
                <th colSpan={7}>
                <ClipLoader color={'#123abc'} loading={true} size={30} />
                </th>
              </tr>
              
              : 
              membersData.map((item)=>{
                  return(
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td> Group {item.group }</td>
                    <td>{item.quantityOil} litre</td>
                    <td><input type="radio" checked={item.hasReceivedOil}/></td>
                    <td>{item.quantitySugar} kg</td>
                    <td><input type="checkbox" checked={item.hasReceivedSugar}/></td>
                  </tr>
                  )
                })
          }
          {/* {membersData.map((item)=>{
            return(
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td> Group {item.group }</td>
              <td>{item.quantityOil} litre</td>
              <td><input type="radio" checked={item.hasReceivedOil}/></td>
              <td>{item.quantitySugar} kg</td>
              <td><input type="checkbox" checked={item.hasReceivedSugar}/></td>
            </tr>
            )
          })} */}
            </table>
        </div>
      </div>
  );
  }

export default Members;
