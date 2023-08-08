import React, { useState } from 'react'
import Logo from '../../image/logo-d-plus.svg'
import { Link } from 'react-router-dom'
import './Subscribe.css'
import { Check } from 'lucide-react'

const Subscribe = () => {

  const [changeColorSuper, setChangeColorSuper] = useState({color:'#e1e6f0'})
  const [changeColorSuperAds, setChangeColorSuperAds] = useState({color:'#e1e6f0'})
  const [changeColorPremium, setChangeColorPremium] = useState({color:'#e1e6f0'})
  const [plan, setPlan] = useState('Super')


  const Selected = (x) =>{
    if(x === '2')
    {
      setChangeColorSuper({color:'#ffcc75'})
      setChangeColorSuperAds({color:'#e1e6f0'})
      setChangeColorPremium({color:'#e1e6f0'})
      setPlan('Super')
    }
      
    else if(x === '3')
    {
      setChangeColorSuper({color:'#e1e6f0'})
      setChangeColorSuperAds({color:'#ffcc75'})
      setChangeColorPremium({color:'#e1e6f0'})
      setPlan('Super')

    }
    else{
      setChangeColorSuper({color:'#e1e6f0'})
      setChangeColorSuperAds({color:'#e1e6f0'})
      setChangeColorPremium({color:'#ffcc75'})
      setPlan('Premium')
    }
  }

  return (
    <div className='mx-5 px-3'>
    {/* NAVIGATION MENU */}
      <nav>
        <div className="left">
          <Link to="/" className="close">&#215;</Link>
          <div className="logo"><img src={Logo} alt="Logo" /></div>
        </div>
        <div className="select-container">
          <select name="language" id="language" className='select-box'>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="tamil">Tamil</option>
            <option value="telugu">Telegu</option>
          </select>
        </div>
      </nav>

    {/* CONTENT */}

      <div className="content mt-5 d-flex justify-content-between">
        <div className="message">
          <h2>Subscribe now and <br /> start streaming</h2>
        </div>
        <div className="plans">
          <table>
            <thead>
            <tr>
              <th className='heading'> </th>
              <th className='heading'>Super</th>
              <th className='heading'>Super <br /> <small>+Ads free</small></th>
              <th className='heading'>Premium</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th className='plans-item'>
                All content <br /> <small>Movies, Live sports, TV, Specials</small>
              </th>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th className='plans-item'>
                Watch on TV ot Laptop                
              </th>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th className='plans-item'>
                Ads free movies and shows (except <br /> sports)
              </th>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th className='plans-item'>
                Number of devices that can be <br /> logged in
              </th>
              <td>2</td>
              <td>2</td>
              <td>4</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th className='plans-item'>
                Max video quality
              </th>
              <td>Full HD <br /> 1080p</td>
              <td>Full HD <br /> 1080p</td>
              <td>4k <br /> 2160p</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th className='plans-item'>
                Max audio quality <br /> <small>Atmos available on select titles only</small>
              </th>
              <td>Dolby Atmos</td>
              <td>Dolby Atmos</td>
              <td>Dolby Atmos</td>
            </tr>
            </tbody>
          </table>

          <div className='mt-4'>Yearly  Monthly </div>

          <div className="planActivater">
            <button onClick={() => Selected('2')} autoFocus>
              <h5 style={changeColorSuper}>Super</h5><h3><sup>&#8377;</sup>  899 <small>/Year</small></h3>
            </button>
            <button onClick={() => Selected('3')}>
              <h5 style={changeColorSuperAds}>Super <small>+Ads free</small></h5><h3><sup>&#8377;</sup>  1099 <small>/Year</small></h3>
            </button>
            <button onClick={() => Selected('4')}>
              <h5 style={changeColorPremium}>Premium</h5><h3><sup>&#8377;</sup>  1499 <small>/Year</small></h3>
            </button>
          </div>

          <div className="confirmPlan mt-3">
            <button>Continue with {plan} &#62; </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
