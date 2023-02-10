import React from 'react'
import { BsFillExclamationTriangleFill } from "react-icons/bs"


function Cancel() {
  return (
    <div className='cancel'>
      <BsFillExclamationTriangleFill size={200} />
      <h1>Something went wrong</h1>
      <h2>The page didn't load properly.Please try again .<br /><br />
      If it doesn't load up, contact with your administrator.</h2>
    </div>
  )
}

export default Cancel