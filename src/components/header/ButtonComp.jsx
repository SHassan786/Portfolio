import React from 'react'
import resume from '../../assests/Shehryar-Hassan-Resume-23.pdf'

const ButtonComp = () => {
  return (
    <div className='buttonComp'>
        <a href={resume} className='btn' download> Download CV</a>
        <a href="#contact" className='btn btn-primary'> Lets Talk</a>
      
    </div>
  )
}

export default ButtonComp
