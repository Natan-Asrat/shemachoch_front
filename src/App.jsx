import react ,{useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './components/css/App.css'
import GroupsHeader from './components/GroupsHeader';
import Dashboard from './components/Dashboard';
import Login from './components/Login';


function App(){

  const [token,setToken]=useState(null);

    if(!token){
      return <Login setToken={setToken}/>
    }

  return(
    <Router className="App">
      <Routes>
        <Route path={'/'} element={<> <Sidebar/> 
          <GroupsHeader/> <Dashboard/> 
        </>}/>

        <Route path={'/goods'} element={<> <Sidebar/> <GroupsHeader/> </>}/>

        <Route path={'/members'} element={<> <Sidebar/> <GroupsHeader/> </>}/>

        <Route path={'/reports'} element={<> <Sidebar/> <GroupsHeader/> </>}/>

        <Route path={'/settings'} element={<> <Sidebar/> <GroupsHeader/> </>}/>
{/* 
        <Route path={'/login'} element={<Login/>} /> */}

      </Routes>
    </Router>
  )
}


export default App;
