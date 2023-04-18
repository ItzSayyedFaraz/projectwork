import React,{useState,useContext} from 'react'
import {getAuth,createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import app from '../firebase/firebase';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  Appstate } from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';

const  auth= getAuth(app);
const googleProvider=new GoogleAuthProvider()

const Signup = () => {
  const [form,setForm]=useState({
    email:"",
    password:""
  })

  const useAppstate=useContext(Appstate);
  const navigate=useNavigate();
  
  const onsigningup=()=>{
    window.alert('User created successfully,Login now')
    navigate('/')
  }
  const signitup=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,form.email,form.password)
    .then(()=>onsigningup())
    .catch((err)=>window.alert(err))
  }

  const onLoginWithGoogle=()=>{
    window.alert('login successful');
    useAppstate.setUser(true)
    useAppstate.setLogin(true)

    navigate('/dashboard')

  }

  const signInWithGoogle=()=>{
    signInWithPopup(auth,googleProvider)
    .then(()=>onLoginWithGoogle())
  }



  return (
    <div className='signUpForm'>
      <div className="insideSignUp">
      <Form>
      <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='signUpButtons'>
      <Button variant="primary" onClick={signitup} type="submit">
        Sign Up
      </Button>
      <a onClick={signInWithGoogle} className="anchor"> Or Login with Google</a>
      </div>
    </Form>
    </div>
    
    </div>
  )
}

export default Signup
