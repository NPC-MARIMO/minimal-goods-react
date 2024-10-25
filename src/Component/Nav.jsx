import React from 'react'
import '../CSS/Nav.css'

const Nav = () => {


  return (
    <div 
        className='nav'
        style={{backgroundColor : "#2E2A27"}}
    >

        <nav  >
           
                <ul>
                    <li>Article</li>
                    <li>Shop</li>
                    <li>Submit</li>
                </ul>
                <h1>
                    MinimalGoods
                </h1>
                <p className="rights">
                    2024,all right reserved
                </p>
           
        </nav>
      
    </div>
  )
}

export default Nav
