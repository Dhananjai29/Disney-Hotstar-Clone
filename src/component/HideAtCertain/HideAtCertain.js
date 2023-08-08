import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const HideAtCertain = ({children}) => {

    const location = useLocation();

    const [showNavBar, setShowNavBar] = useState(false)

  useEffect(() => {
    if(location.pathname === '/subscribe')
    {
      setShowNavBar(false)
    }
    else{
      setShowNavBar(true)
    }
  },[location])

  return (
    <div>{showNavBar && children}</div>
  )
}

export default HideAtCertain
