import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Check, Facebook, LucideApple, PlaySquare, Twitter } from 'lucide-react'
const Footer = () => {
  return (
    <>
        <footer>
            <div className="links">
                <div className="links-inner">
                    <h6>Company</h6>
                    <Link to="/" className='link'>About us</Link>
                    <Link to="/" className='link'>Careers</Link>
                </div>
                <div className="links-inner">
                    <h6>View Website in</h6>
                    <Link to="/" className='link'><Check /> English</Link>
                </div>
                <div className="links-inner">
                    <h6>Need Help?</h6>
                    <Link to="/" className='link'>Visit Help Center</Link>
                    <Link to="/" className='link'>Share Feedback</Link>
                </div>
                <div className="links-inner socials">
                    <h6>Connect with Us</h6>
                    <div className="socialMedia">
                        <Link to="/" className='link'><Facebook /></Link>
                        <Link to="/" className='link'><Twitter /></Link>
                    </div>
                </div>
            </div> 
            <div className="rights">
                <div className="left">
                    <p>&#169; 2023 STAR. All Rights Reserved.</p>    
                    <p>Terms Of Use &nbsp;&nbsp; Privacy Policy &nbsp;&nbsp; FAQ</p>
                </div> 

                <div className="download-links">
                    <PlaySquare /> <LucideApple />    
                </div>   
            </div>   
        </footer> 
    </>
  )
}

export default Footer
