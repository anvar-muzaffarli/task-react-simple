import React from 'react'
import Typed from 'react-typed'

const Header = () => {
  return (
    <div className='d-flex justify-content-center align-items-center hundurluk content'>
      <Typed
      className='typed-text'
      strings={[
          'Microsoft Developing Solutions Associate',
          'Microsoft Developing and Operations Solutions Expert',
          'Microsoft Certified Trainer'
        ]}
      typeSpeed={50}
      backSpeed={60}

      
      
      />

    </div>
  )
}

export default Header