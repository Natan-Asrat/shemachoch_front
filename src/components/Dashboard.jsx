import React, { useEffect, useState } from "react";
import "./css/Dashboard.css";
import ClipLoader from "react-spinners/ClipLoader";
import {
  getAuth,
  signInWithCustomToken,
  RecaptchaVerifier,
} from "firebase/auth";
import { Link } from "react-router-dom";

function Dashboard() {
  const [membersData, setMembersData] = useState([]);
  const [loadingTable, setLoadingTable] = useState(true);

  const [isOilFetched, setIsOilFetched] = useState(false);

  const [isSugarFetched, setIsSugarFetched] = useState(false);

  const [oilData, setOilData] = useState([]);

  const [sugarData, setSugarData] = useState([]);

  useEffect(() => {
    fetch("https://shemachoch.onrender.com/app/members.json", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("user"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMembersData(Array.isArray(data) ? data : []);
        setLoadingTable(false);

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
      });
  }, []);

  useEffect(() => {
    fetch("https://shemachoch.onrender.com/app/oil_stock.json", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("user"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOilData(Array.isArray(data) ? data : []);
        // setLoadingTable(false);
        setIsOilFetched(true);
        // console.log(data);
      });
  }, []);

  console.log(oilData);

  const getTotalOil=(oilData)=>
  oilData?.reduce((amount,item)  => amount+item.total_stock_number,0);

  const getRemainingOil=(oilData)=>
  oilData?.reduce((amount,item)  => amount+item.remaining_stock_number,0);

  const getTotalSugar=(sugarData)=>
  sugarData?.reduce((amount,item)  => amount+item.total_stock_number,0);

  const getRemainingSugar=(sugarData)=>
  sugarData?.reduce((amount,item)  => amount+item.remaining_stock_number,0);

  useEffect(() => {
    fetch("https://shemachoch.onrender.com/app/sugar_stock.json", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("user"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSugarData(Array.isArray(data) ? data : []);
        // setLoadingTable(false);
        setIsSugarFetched(true);
        // console.log(data);
      });
  }, []);

  return (
    <div className="dashboard">
      <div>
        <div className="dashboard-top">
          <h1>Dashboard</h1>
          <Link to="/members/distributeItems">
            <button>+Distribute good</button>
          </Link>
        </div>

        <div className="dashboard-middle">
          <div className="status">
            <div className="status-top">
              <div>
                <img src="images/oil.png" alt="" />
              </div>

              <h2>Oil</h2>
              <div className="count">
                {isOilFetched ? (
                  <p>
                    {getRemainingOil(oilData)} litres / {getTotalOil(oilData)} litres
                  </p>
                ) : (
                  <ClipLoader color={"#123abc"} loading={true} size={15} />
                )}

                {isOilFetched ? (
                  <p>
                    {/* {oilData[0].received_members} / {oilData[0].total_members}{" "}
                    members */}
                  </p>
                ) : (
                  <ClipLoader color={"#123abc"} loading={true} size={15} />
                )}
              </div>
            </div>

            <div className="status-bottom">
              <div className="outer-progress" style={ {width:200 }} >
                <div className="inner-progress" style={{ width:`${getRemainingOil(oilData)/getTotalOil(oilData)*200}px` }}></div>
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
                {isSugarFetched ? (
                  <p>
                    {getRemainingSugar(sugarData)} kilogram / {getTotalSugar(sugarData)} kilogram
                  </p>
                ) : (
                  <ClipLoader color={"#123abc"} loading={true} size={15} />
                )}

                {isSugarFetched ? (
                  <p>
                    {/* {sugarData[0].received_members} / {sugarData[0].total_members}{" "}
                    members */}
                  </p>
                ) : (
                  <ClipLoader color={"#123abc"} loading={true} size={15} />
                )}
              </div>
            </div>

            <div className="status-bottom">
              <div className="outer-progress" style={{width:200}}>
                <div className="inner-progress" style={{ width:`${getRemainingSugar(sugarData)/getTotalSugar(sugarData)*200}px` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="search-and-member-container">
          <input type="text" className="search" placeholder="Search Memebers" />

          <select className="filter" name="-All Memebers" id="">
            <option value="All Members">--All Members--</option>
          </select>
        </div> */}

        <div className="dashboard-bottom" border="1">
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
          <div className="dashboard-table" border="1">
            <table>
              <tr className="header">
                <th>Coupon Number</th>
                <th>Member name</th>
                <th>Oil</th>
                <th></th>
                <th>Sugar</th>
                <th></th>
              </tr>
              {loadingTable ? (
                <tr>
                  <th colSpan={6}>
                    <ClipLoader color={"#123abc"} loading={true} size={30} />
                  </th>
                </tr>
              ) : (
                membersData.map((item) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.quantityOil} litre</td>
                      <td>
                        <input type="radio" checked={item.hasReceivedOil} />
                      </td>
                      <td>{item.quantitySugar} kg</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={item.hasReceivedSugar}
                        />
                      </td>
                    </tr>
                  );
                })
              )}
            </table>
          </div>
          <div className="btn-container">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
