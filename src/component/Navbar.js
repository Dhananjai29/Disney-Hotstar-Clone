import React, { useState } from 'react'
import Logo from '../image/logo-d-plus.svg'
import { UserCircle, Search, Home, Tv, Clapperboard, Baby} from 'lucide-react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [navWidth, setNavWidth] = useState({
        width: '120px'
    })

    const Extend = () => {
        if(navWidth.width === '120px')
        {
            setNavWidth({
                width:'500px',
                backgroundImage: "linear-gradient(to right, #000308,#000308ea,#000308cb, #16161600)"
        })
        }
        else{
            setNavWidth({width:'120px'});
        }
    }

    const Shrink = () => {
        if(navWidth.width === '500px')
        {
            setNavWidth({width:'120px'})
        }
        else{
            setNavWidth({width:'500px'});
        }
    }
  return (
    <>
        <div className="Navbar" style={navWidth} >
            <div className="logo">
                <Link to="subscribe"><img src={ Logo } alt='Logo' /></Link> 
            </div>
            <div className="nav-links-container" onMouseEnter={Extend} onMouseLeave={Shrink}>
                <div><Link to="/" className='nav-link' ><UserCircle /><b>My Space</b></Link></div>
                <div><Link to="/"  className='nav-link'><Search /><b>Search</b></Link></div>
                <div><Link to="profile" className='nav-link' ><Home /><b>Home</b></Link></div>
                <div><Link to="/" className='nav-link' ><Tv /><b>TV</b></Link></div>
                <div><Link to="profile"  className='nav-link'><Clapperboard /><b>Movies</b></Link></div>
                <div><Link to="profile" className='nav-link' ><Baby /><b>Kids</b></Link></div>
            </div>
        </div>
    </>
  )
}

export default Navbar