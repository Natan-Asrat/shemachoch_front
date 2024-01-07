import React from 'react'
import './css/DistributeItems.css'

const DistributeItems = () => {
  return (
    <div className='distribute-items'>

    <div className='distribute-items-top'>
      <h1>Distribute Items</h1>
    </div>

    <div className='distribute-items-middle'>
    <input type="text" className="search" placeholder="Search Memebers" />

    <button>Search member</button>
    </div>

    <div className="distribute-items-bottom">
          <table>
          <tr >
                <th>Item Name</th>
                <th>Amount</th>
                <th>Recieved</th>
          </tr>

          <tr >
                <td>Oil</td>
                <td>3 litres</td>
                <td><input type="radio" /></td>
          </tr>

          <tr >
                <td>Sugar</td>
                <td>65 Kgs</td>
                <td><input type="radio" /></td>
          </tr>
        
          </table>
        </div>


    </div>
  )
}

export default DistributeItems;
