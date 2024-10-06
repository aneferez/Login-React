import React from 'react'
import ReactDOM from 'react-dom';
import'./Register.css'
import { MdOutlineMarkEmailUnread  } from 'react-icons/md'
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import video from '../Login Asset/Video.mp4'
import Logo from '../Login Asset/Logo.png'
const Register = () => {
  return (
    <div className='registerpage flex'>
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className='title'>Create and Enchance the power of Gamer</h2>
            <p>Adopted for the Gamer</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Lets Create an Account</span>
            <Link to={'/'}>
              <button className='btn'>Login </button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={Logo} alt="Logo Image" />
            <h3>Forge your identity!</h3>
          </div>
          <form action="" className='form grid'>
                       
            <div className="inputDiv">
              <label htmlFor="Email">Email</label>
              <div className="input flex">
                <MdOutlineMarkEmailUnread className='icon' />
                <input type="Email" id='Email' placeholder='Enter Email ID' />

              </div>
              <div className="inputDiv">
              <label htmlFor="User Name">User Name</label>
              <div className="input flex">
                <FaUserShield className='icon' />
                <input type="text" id='Username' placeholder='Enter Username' />
              </div>
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
              <span>Register</span>
              <MdOutlineMarkEmailUnread  className='icon' />
            </button>
            <span className='forgot password'>
              Forgot your password Gamer?<a href="">Click here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register