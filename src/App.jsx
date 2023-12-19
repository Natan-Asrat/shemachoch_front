import react,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './components/css/App.css'
import GroupsHeader from './components/GroupsHeader';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Members from './components/Members';
import AddMember from './components/AddMember'
import Goods from './components/Goods';
import EditQuantity from './components/EditQuantity';
import {getAuth} from 'firebase/auth';


function App(){

  const [token,setToken]=useState(null);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setToken(true);
    }else{
      setToken(false);
    }
   }, []);

   if(!token){
    return <Login setToken={setToken}/>
  }
   
  return(
    <Router className="App">
      <Routes>
        <Route path={'/'} element={<div className='main-body'> <Sidebar/> 
          <div className='body-right'><GroupsHeader/> <Dashboard/></div> <div/>
        </div>}/>

        <Route path={'/goods'} element={<div className='main-body'> <Sidebar/> <div className='body-right'><GroupsHeader/> <Goods/>
          </div>  </div>}/>

        <Route path={'/goods/editQuantity'} element={<div className='main-body'> <Sidebar/> <div className='body-right'><GroupsHeader/> <EditQuantity/></div>  </div>}/>

        <Route path={'/members'} element={<div className='main-body'><Sidebar/> <div className='body-right'><GroupsHeader/> <Members/></div>  </div>}/>

        <Route path={'/members/addMember'} element={<div className='main-body'> <Sidebar/> <div className='body-right'> <GroupsHeader/> <AddMember/></div> </div> } />

        <Route path={'/reports'} element={<div className='main-body'><Sidebar/> <div className='body-right'><GroupsHeader/></div> </div>}/>

        <Route path={'/login'} element={<Login setToken={setToken}/>} />
{/* 
        <Route path={'/login'} element={<Login/>} /> */}

      </Routes>
    </Router>
  )
}


export default App;
