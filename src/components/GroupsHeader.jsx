import React from "react";
import './css/GroupsHeader.css'

function GroupsHeader(){

  const today=new Date();
  const month = today.toLocaleString('default',{month:'long'});
  const year = today.getFullYear();
  const date = today. getDate();
  const currentDate = month + "/" + date + "/" + year;

  return(
    <div className="groups-container">
      <div className="group">Group 1</div>
      <div className="group">Group 2</div>
      <div className="group">Group 3</div>
      <div className="group">Group 4</div>
      <div className="time">{currentDate}</div>

    </div>
  )
}

export default GroupsHeader;