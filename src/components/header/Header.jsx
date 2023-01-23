import React from 'react'
import './header.css'
import ButtonComp from './ButtonComp'
import HeaderSocials from './HeaderSocials'
import profilePicture from '../../assests/me.png'

const Header = () => {
  return (
    <header id="">
      <div className="container container__header">
        <h5> Hello I'm </h5>
        <h2> Shehryar Hassan </h2>
        <h5 className="text-light"> FullStack Developer </h5>

        <ButtonComp/>

        <div>
          <img src={profilePicture} alt="" className='profilePic'/>
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down </a>

        <HeaderSocials/>



      </div>
    </header>
  )
}

export default Header