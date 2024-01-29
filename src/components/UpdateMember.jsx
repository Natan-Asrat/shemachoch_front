import React from 'react'
import './css/UpdateMember.css'
import { Link ,useNavigate,useParams} from 'react-router-dom'
import { useState ,useEffect} from 'react'
const UpdateMember = () => {

  const { id } = useParams();

  const[formData,setFormData]=useState({
    name:'',
    residentId:'',
    quantityOil:'0',
    quantitySugar:'0'
  });

const [member,setMember]=useState();
const [isFetched,setIsFetched]=useState(false);

console.log(member);

const [fetchedMember,setFetchedMember]=useState();
  const navigate=useNavigate();

  // console.log(formData);

  const handleChange=(event)=>{
    setFormData((prevValue)=>{
      return{
        ...prevValue,
        [event.target.name]:event.target.value
      }
    })
  }

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


  const handleEditMember=(event)=>{
    event.preventDefault();
    // console.log('saved');
    fetch('https://shemachoch.onrender.com/app/add_member.json', {
      method: 'PUT',
      headers: {
        'Authorization': localStorage.getItem('user'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as desired
        if(data.residentId!='shemach with this residentId already exists.'){
          alert('Shemach with an Id of '+data.residentId+' has been editedd');
          navigate('/members');
        } else{
          alert(data.residentId);
        }
        
      })
      .catch((error) => {
        // Handle any errors that might occur
        console.log(error);
        alert(error);
      });
  }

  console.log(formData);


  return (
    <div className="add-member">
    <div className="add-member-top">
      <h1>
        <Link to='/members' style={{color:'grey',textDecoration:"none"}}>
         <span>Members</span>
        </Link>
         {' >'} Member {`${id}`}
      </h1>
    </div>

    <div>
      <form onSubmit={handleEditMember} className="add-member-middle" >
      <div>
        <p>Member Name</p>
        <input type="text" name="name" id="" onChange={handleChange} />
      </div>

      <div>
        <p>Resident ID Number</p>
        <input type="number" name="residentId" id=""   onChange={handleChange}/>
      </div>

      <div>
        {/* <p>Quantity of Oil</p>
        <input type="number" name="quantityOil" id="" onChange={handleChange}/> */}
        
        <p>Quantity of Sugar</p>
        <select name="quantitySugar" className="drop-down"  onChange={handleChange} >
        <option value="0">None</option>
          <option value="3"> 3 {'kgs'} </option>
          <option value="5"> 5 {'kgs'}</option>
        </select>
      </div>

      <div>
        {/* <p>Quantity of Sugar</p>
        <input type="number" name="quantitySugar"  id="" onChange={handleChange}/> */}
        
        <p>Quantity of Oil</p>
        <select  name="quantityOil" className="drop-down" onChange={handleChange}>
        <option value="0">None</option>
          <option value="3"> 3 {'litres'} </option>
          <option value="5"> 5 {'litres'}</option>
        </select>
      </div>

      <button className="save-btn" type="submit">Save</button>
      </form>
      

    </div>

    

  </div>
  )
}

export default UpdateMember
