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
import {getAuth} from 'firebase/auth'


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
        <Route path={'/'} element={<> <Sidebar/> 
          <GroupsHeader/> <Dashboard/> 
        </>}/>

        <Route path={'/goods'} element={<> <Sidebar/> <GroupsHeader/> <Goods/> </>}/>

        <Route path={'/goods/editQuantity'} element={<> <Sidebar/> <GroupsHeader/> <EditQuantity/> </>}/>

        <Route path={'/members'} element={<> <Sidebar/> <GroupsHeader/> <Members/> </>}/>

        <Route path={'/members/addMember'} element={<> <Sidebar/> <GroupsHeader/> <AddMember/> </> } />

        <Route path={'/reports'} element={<> <Sidebar/> <GroupsHeader/> </>}/>

        {/* <Route path={'/login'} element={<Login setToken={setToken}/>} /> */}
{/* 
        <Route path={'/login'} element={<Login/>} /> */}

      </Routes>
    </Router>
  )
}


export default App;
