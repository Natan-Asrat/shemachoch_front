import React, { useState } from "react";
import "./css/Member.css";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

const Member = () => {
  const { id } = useParams();

  const [member, setMember] = useState();

  const [isfetched, setIsFetched] = useState(false);

  const[isOilChecked,setIsOilChecked]=useState();

  const[isSugarChecked,setIsSugarChecked]=useState();

  useEffect(() => {
    fetch(`https://shemachoch.onrender.com/app/members/${id}/?format=json`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("user"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMember(data);
        setIsFetched(true);
      });
  }, []);

  // console.log(member);

  let checkedData={
    hasReceivedOil:isOilChecked,
    hasReceivedSugar:isSugarChecked
  }



  const handleSubmit=(e)=>{
    e.preventDefault();
    const url = `https://shemachoch.onrender.com/app/distribute/${id}/`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': localStorage.getItem('user'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(checkedData),
    }).then( response => response.json())
      .then(data => {console.log(data)
        alert('Distributed')})
      .catch((error) => {
        // Handle any errors that might occur
        alert(error);
      });
   }


  return (
    <div className="member">
      <div className="member-top">
        <h1>Member {id}</h1>
        <button>Member info</button>
      </div>

      <div className="member-middle">
        <table>
          <tr className="header">
            <th>Item Name</th>
            <th>Amount</th>
            <th>Recieved</th>
          </tr>
          <tr className="header">
            <th>Oil</th>
            {isfetched ? (
              <>
                <th>{member.quantityOil} litres</th>
                <th>
                  <input type="checkbox" checked={member.hasReceivedOil?true:isOilChecked}  onChange={()=>setIsOilChecked(!isOilChecked)} disabled={!member.receivesOil} />
                </th>{" "}
              </>
            ) : (
              <>
                <th>
                  {" "}
                  <ClipLoader color={"#123abc"} loading={true} size={15} />
                </th>
              </>
            )}
          </tr>
          <tr className="header">
            <th>Sugar</th>

            {isfetched ? (
              <>
                {" "}
                <th>{member.quantitySugar} kilograms</th>
                <th>
                  <input type="checkbox" checked={member.hasReceivedSugar?true:isSugarChecked}  onChange={()=>setIsSugarChecked(!isSugarChecked)} disabled={!member.receivesSugar}/>
                </th>{" "}
              </>
            ) : (
              <>
                {" "}
                <th>
                  <ClipLoader color={"#123abc"} loading={true} size={15} />
                </th>
              </>
            )}
          </tr>
        </table>

        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default Member;
