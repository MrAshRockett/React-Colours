import React, { useState } from 'react'

const randomColour = () => 
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

function Pixel() {
  const [style, setStyle] = useState({
    width: '25px',
    height: '25px',
    backgroundColor: '#fff'
  }) 

  const handlePixel = () => {
    setStyle ({
      width: '25px',
      height: '25px',
      backgroundColor: randomColour()
    })
  }

   return <div style={style} onMouseOver={handlePixel}></div >
}

export default Pixel