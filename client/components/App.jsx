import React from 'react'
import Pixel from './Pixel'

const AllPixels = () => {
  const pixelArray = []
  for (let i=0;i<1800;i++) {
    pixelArray.push(<Pixel key={i} />)
  }
  console.log(pixelArray);
  return pixelArray
}

const App = () => {
  return (
    <>
      <AllPixels />
    </>
  )
}

export default App
