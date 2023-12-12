import React from "react";
import { Link } from "react-router-dom";
import "./css/Goods.css";

function Goods() {
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

            <tr>
              <th className="oil-td">Group 1</th>
              <th className="oil-td">85 litres</th>
              <th className="oil-td">90 litres</th>
              <th className="oil-td">170</th>
              <th className="oil-td">200</th>
            </tr>

            <tr>
              <th className="oil-td">Group 2</th>
              <th className="oil-td">61 litres</th>
              <th className="oil-td">72 litres</th>
              <th className="oil-td"> - </th>
              <th className="oil-td">200</th>
            </tr>
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

              <tr>
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
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className="goods-bottom"></div>
    </div>
  );
}

export default Goods;
