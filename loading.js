import React from 'react'
// import { newtonsCradle } from 'ldrs'
import { hourglass } from 'ldrs'
import './loading.css'
hourglass.register();
const Loader = () => {
  return (

      <div className="center">


{/* hourglass.register() */}

{/* // Default values shown */}
<l-hourglass
  size="40"
  bg-opacity="0.1"
  speed="0.9" 
  color="black" 
></l-hourglass>
  </div>
    
  )
}

export default Loader
