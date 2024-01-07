import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Goods.css";
import ClipLoader from "react-spinners/ClipLoader";

function Goods() {
  const [oilData, setOilData] = useState([]);
  const [loadingTable, setLoadingTable] = useState(true);
  const [sugarData, setSugarData] = useState([]);
  

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
        setLoadingTable(false);
      });
  }, []);

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
        setLoadingTable(false);
      });
  }, []);

 

  return (
    <div className="goods">
      <div className="goods-top">
        <h1>Goods</h1>

        <Link
          to="/goods/editQuantity"
          style={{ color: "grey", textDecoration: "none" }}
        >
          <button>
            <img src="images/edit.png" alt="" />
            Edit Quantity
          </button>
        </Link>
      </div>

      <div className="goods-middle">
        <img src="images/oil.png" alt="" />

        <div className="goods-oil-table">
          <table>
            <tr>
              <th className="oil-th">Group</th>
              <th className="oil-th">Oil Required</th>
              <th className="oil-th">Oil in Stock</th>
              <th className="oil-th">Members Received</th>
              <th className="oil-th">Total Members</th>
            </tr>

            {loadingTable ? (
              <tr>
                <th colSpan={7}>
                  <ClipLoader color={"#123abc"} loading={true} size={30} />
                </th>
              </tr>
            ) : (
              oilData.map((item) => {
                return (
                  <tr>
                    <th className="oil-td">{item.group}</th>
                    <th className="oil-td">{item.required_stock} {'litres'}</th>
                    <th className="oil-td">{item.stock}</th>
                    <th className="oil-td">{item.received_members}</th>
                    <th className="oil-td">{item.total_members}</th>
                  </tr>
                );
              })
            )}
          </table>
        </div>

        <div className="goods-sugar-table">
          <img src="images/sugar.png" alt="" />
          <div className="goods-sugar-table">
            <table>
              <tr>
                <th className="sugar-th">Group</th>
                <th className="sugar-th">Sugar Required</th>
                <th className="sugar-th">Sugar in Stock</th>
                <th className="sugar-th">Members Received</th>
                <th className="sugar-th">Total Members</th>
              </tr>

              {
                loadingTable ? (
                  <tr>
                    <th colSpan={7}>
                      <ClipLoader color={"#123abc"} loading={true} size={30} />
                    </th>
                  </tr>
                ) : (
                  sugarData.map((item)=>{
                    return(
                      <tr>
                        <th className="oil-td">{item.group}</th>
                        <th className="oil-td">{item.required_stock} {'kilogram'}</th>
                        <th className="oil-td">{item.stock}</th>
                        <th className="oil-td">{item.received_members}</th>
                        <th className="oil-td">{item.total_members}</th>
                      </tr>
                    )
                  })
                )
              }


              {/* <tr>
                <th className="oil-td">Group 1</th>
                <th className="oil-td">20 Kgs</th>
                <th className="oil-td">45 Kgs</th>
                <th className="oil-td">185</th>
                <th className="oil-td">200</th>
              </tr>

              <tr>
                <th className="oil-td">Group 2</th>
                <th className="oil-td">40 Kgs</th>
                <th className="oil-td">65 Kgs</th>
                <th className="oil-td">105</th>
                <th className="oil-td">200</th>
              </tr> */}
            </table>
          </div>
        </div>
      </div>

      <div className="goods-bottom"></div>
    </div>
  );
}

export default Goods;
