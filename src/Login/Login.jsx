import React from 'react'
// import './Login.css'
import './Login.scss'
// import '../App.css'
// importing the asset
import video from '../Login Asset/Video.mp4'
import Logo from '../Login Asset/Logo.png'
import { Link, NavLink } from 'react-router-dom'
import Register from '../Register/Register'
// Since we are using React-icon it is necessary to install and import files 
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
const Login = () => {
  return (
    <div className='loginpage flex'>
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className='title'>Create and Enchance the power of Gamer</h2>
            <p>Adopted for the Gamer</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Dont have an account Gamer?</span>
            <Link to={'/Register'}>
              <button className='btn'>Sign up </button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={Logo} alt="Logo Image" />
            <h3>Welcome Back Gamer</h3>
          </div>
          <form action="" className='form grid'>
            <span className='showMessage'>Login status will be here</span>
            <div className="inputDiv">
              <label htmlFor="Username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon' />
                <input type="text" id='Username' placeholder='Enter Username' />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="Password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input type="Password" id='Password' placeholder='Enter Password' />
              </div>
            </div>
            <button type='submit' className='btn flex'>
              <span>Login</span>
              <AiOutlineSwapRight className='icon' />
            </button>
            <a href="/Dashboard">Dashboard</a>
            <span className='forgot password'>
              Forgot your password Gamer?<a href="">Click here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login