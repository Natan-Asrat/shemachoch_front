import React from "react";
import "./css/DistributeItems.css";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

const DistributeItems = () => {
  const [membersData, setMembersData] = useState([]);
  const [loadingTable, setLoadingTable] = useState(true);

  const [name, setName] = useState();

  const newData = membersData?.filter((item) =>
    item?.name.toLowerCase().includes(name)
  );

  const [filtered, setFiltered] = useState(false);

  console.log(membersData);

  let handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    let url = `https://shemachoch.onrender.com/app/members/?format=json&search=${name}`;

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("user"),
      },
    });

    setFiltered(true);
  };

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
      });
  }, []);

  return (
    <div className="distribute-items">
      <div className="distribute-items-top">
        <h1>Distribute Items</h1>
      </div>

      <div className="distribute-items-middle">
        <input
          type="text"
          className="search"
          placeholder="Search Memebers"
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Search member</button>
      </div>

      <div className="distribute-items-bottom">
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
          {loadingTable ? (
            <tr>
              <th colSpan={7}>
                <ClipLoader color={"#123abc"} loading={true} size={30} />
              </th>
            </tr>
          ) : filtered ? (
            newData.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <Link to={`members/${item.id}`}>
                    <td>{item.name}</td>
                  </Link>
                  <td> Group {item.group}</td>
                  <td>{item.quantityOil} litre</td>
                  <td>
                    <input type="radio" checked={item.hasReceivedOil} />
                  </td>
                  <td>{item.quantitySugar} kg</td>
                  <td>
                    <input type="checkbox" checked={item.hasReceivedSugar} />
                  </td>
                </tr>
              );
            })
          ) : (
            membersData.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <Link to={`members/${item.id}`}>
                    <td>{item.name}</td>
                  </Link>
                  <td> Group {item.group}</td>
                  <td>{item.quantityOil} litre</td>
                  <td>
                    <input type="radio" checked={item.hasReceivedOil} />
                  </td>
                  <td>{item.quantitySugar} kg</td>
                  <td>
                    <input type="checkbox" checked={item.hasReceivedSugar} />
                  </td>
                </tr>
              );
            })
          )}
        </table>
      </div>
    </div>
  );
};

export default DistributeItems;
