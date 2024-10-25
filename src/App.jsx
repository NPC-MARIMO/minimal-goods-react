import React, { useState } from 'react'
import Home from './Component/Home'
import Discover from './Component/Discover'
import Image2 from './Component/Image2'
import Categories from './Component/Categories'

const App = () => {

  const [theme , setTheme] = useState({
    color : "#E8E2DA",
    backgroundColor : "#2E2A27",
  })

  return (
    <div style={{backgroundColor : theme.backgroundColor , color : theme.color}}>

      <Home />
      <Discover/>
      <Image2/>
      <Categories/>


    </div>
  )
}

export default App
