import React,{useContext,useEffect} from 'react'
import { Appstate } from '../App';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate=useNavigate();
 
    const useAppstate=useContext(Appstate)
   const logItOut=()=>{
    console.log(useAppstate.user);
    useAppstate.setUser(false);
    useAppstate.setLogin(false)
    navigate('/')
   }

   const loginButton=()=>{
    navigate('/')
   }
  return (
    <>
    {useAppstate.login?
    <>
    <div className='onLogged'>
    {useAppstate.user?
        <button onClick={logItOut} className='logout'>LogOut</button>:""
      }
      <h1>Hello World</h1>
    
    </div>
    </>:
    <div className='ifNotLogged'>
    <button onClick={loginButton} className='dloginButton'>login</button>
    <h1>You need to login to view the original content</h1>
    </div>
}
    </>
  )
}

export default Dashboard;
