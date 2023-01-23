import {React, useState} from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiBook} from 'react-icons/bi'
import {IoIosContact} from 'react-icons/io'



const Navbar = () => {
  const [activeClass, setActiveClass] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveClass('#')} className={activeClass === '#' ? 'active' : ''}> <AiOutlineHome/> </a>
      <a href="#about" onClick={() => setActiveClass('#about')} className={activeClass === '#about' ? 'active' : ''}> <AiOutlineUser/> </a>
      <a href="#experience" onClick={() => setActiveClass('#experience')} className={activeClass === '#experience' ? 'active' : ''}> <BiBook/> </a>
      <a href="#services" onClick={() => setActiveClass("#services")} className={activeClass=== "#services" ? 'active' : ''}> <RiServiceLine/> </a>
      <a href="#contact" onClick={() => setActiveClass("#contact")} className={activeClass=== "#contact" ? 'active' : ''}> < IoIosContact/> </a>
    </nav>
  )
}

export default Navbar