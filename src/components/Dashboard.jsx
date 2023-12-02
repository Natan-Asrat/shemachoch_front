import React from "react";
import "./css/Dashboard.css";

function Dashboard() {
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
          <div>
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
