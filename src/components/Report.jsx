import React from "react";
import './css/Report.css';
import { Link } from "react-router-dom";
import Groups from "./Groups";

  function Report(){
  return (
    <div className="report">
      <div className="report-top">
        <h1>Report</h1>

        <Link to="/members/addMember">
          <button>Download Report</button>
        </Link>
      </div>

      <div className="report-middle">

    <div className="report-group">
         <Groups / >
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


        <div className="report-bottom">
          <table>
          <tr >
                <th>Item</th>
                <th>Item Required</th>
                <th>Item in Stock</th>
                <th>Members Recieved</th>
                <th>Total Members</th>
          </tr>
          <tr >
                <td>Oil</td>
                <td>65 Litres</td>
                <td>90 Litres</td>
                <td>170</td>
                <td>200</td>
          </tr>
          <tr >
                <td>Sugar</td>
                <td>65 Kgs</td>
                <td>90 Kgs</td>
                <td>124</td>
                <td>200</td>
          </tr>
          </table>
        </div>

      </div>

    </div>
  );
};

export default Report;
