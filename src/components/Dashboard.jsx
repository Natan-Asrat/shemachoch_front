import React, { useEffect, useState } from "react";
import "./css/Dashboard.css";
import ClipLoader from 'react-spinners/ClipLoader';
import {getAuth, signInWithCustomToken, RecaptchaVerifier} from 'firebase/auth'

function Dashboard() {
  const [membersData,setMembersData]=useState([]);
  const [loadingTable, setLoadingTable] = useState(true);

 useEffect(()=>{
  fetch('https://5l6k38tx-8000.uks1.devtunnels.ms/app/members/?format=json', {
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
    // else{
    //   try {
    //     const auth = getAuth()
    //     console.log(localStorage.getItem('refresh'))
    //   signInWithCustomToken(auth, localStorage.getItem('refresh')).then(
    //     (userCredential) => {
    //       // Signed in
    //       console.log(userCredential.user);}
    //       // ...
    //   );
    //   // u = getAuth().currentUser
    //   // localStorage.setItem('user', u.getIdToken())
    //   // localStorage.setItem('refresh',u['refreshToken'])
    // } catch (err) {
    //   console.error(err);
    // }
    // }
  })
},[])
  return (
    <div className="dashboard">
      <div>
        <div className="dashboard-top">
          <h1>Dashboard</h1>
          <button>+Distribute good</button>
        </div>

        <div className="dashboard-middle">
          <div className="status">
            <div className="status-top">
              <div>
                <img src="images/oil.png" alt="" />
              </div>

              <h2>Oil</h2>
              <div className="count">
                <p>510/600 Litres</p>
                <p>140/200 Members</p>
              </div>
            </div>

            <div className="status-bottom">
              <div className="outer-progress">
                <div className="inner-progress"></div>
              </div>
            </div>
          </div>

          <div className="status">
            <div className="status-top">
              <div>
                <img src="images/sugar.png" alt="" />
              </div>

              <h2>Sugar</h2>
              <div className="count">
                <p>555/600 Litres</p>
                <p>60/200 Members</p>
              </div>
            </div>

            <div className="status-bottom">
              <div className="outer-progress">
                <div className="inner-progress"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="search-and-member-container">
          <input type="text" className="search" placeholder="Search Memebers" />

          <select className="filter" name="-All Memebers" id="">
            <option value="All Members">--All Members--</option>
          </select>
        </div>

        <div className="dashboard-bottom" border='1'>
          {/* <div>
            <table>
              <tr>
                <th>Coupon Number</th>
                <th>Member name</th>
                <th>Oil</th>
                <th></th>
                <th>Sugar</th>
                <th></th>
              </tr>
              <tr>
                <td>001</td>
                <td>Natnael Mulugeta</td>
                <td>5 litre</td>
                <td><input type="radio"/></td>
                <td>3kg</td>
                <td><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>002</td>
                <td>Kaleab Alebachew</td>
                <td> - </td>
                <td><input type="radio" /></td>
                <td>5 kg</td>
                <td><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>002</td>
                <td>Kaleab Alebachew</td>
                <td> - </td>
                <td><input type="radio" /></td>
                <td>5 kg</td>
                <td><input type="checkbox"/></td>
              </tr>
            </table>
          </div> */}
          <div className="dashboard-table" border='1'>
        <table>
              <tr className="header">
                <th>Coupon Number</th>
                <th>Member name</th>
                <th>Oil</th>
                <th></th>
                <th>Sugar</th>
                <th></th>
              </tr>
              {loadingTable ? 
              <tr >
                <th colSpan={6}>
                <ClipLoader color={'#123abc'} loading={true} size={30} />
                </th>
              </tr>
              
              : 
          membersData.map((item)=>{
            return(
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantityOil} litre</td>
              <td><input type="radio" checked={item.hasReceivedOil}/></td>
              <td>{item.quantitySugar} kg</td>
              <td><input type="checkbox" checked={item.hasReceivedSugar}/></td>
            </tr>
            )
          })}
            </table>
        </div>
          <div className="btn-container">
            <button className="search-btn">Search members</button>
            <button className="distribute-btn">+Distribute good</button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
