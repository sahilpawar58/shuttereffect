import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {
  Link,
} from "react-router-dom";
import gsap from 'gsap';


function Navbar() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    let t2 = gsap.timeline({
    })
    t2.to(".navbar",{
      top:"0%",
      delay:6,
      easy:"expo.out",
      duration:1
  })   
  },[])

  return (
    <>
    <div className="navbar">
      <h3 className='logo'>LOGO</h3>
      <div className='buttons'>
      <h3 className=''><Link to="about">About Us</Link></h3>
      <h3 className=''><Link to="signup">Sign Up</Link></h3>
      </div>
    </div>
    </>
  )
}

export default Navbar
