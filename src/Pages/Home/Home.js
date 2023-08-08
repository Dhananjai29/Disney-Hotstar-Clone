import React, { useState } from 'react';
import './Home.css'
import Carousel1 from '../../image/EndersGame.jpeg';
import Carousel2 from '../../image/LandOfMine.jpeg';
import Carousel3 from '../../image/LordOfTheRings.jpg';
import Carousel4 from '../../image/SkyScrapper.jpg';
import Carousel5 from '../../image/DesertShadow.jpeg';


const Home = () => {

  const [show, setShow] = useState({visibility:'hidden'})

  const Show = () =>{
      setShow({visibility:'visible'})
  }
  const Hide = () =>{
      setShow({visibility:'hidden'})
  }

  return (
    <>
      {/* Carousel */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Carousel1} alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={Carousel2} alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={Carousel3} alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={Carousel4} alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={Carousel5} alt="..."/>
          </div>
        </div>
      </div>

      
      <div className="homePageContent">
      {/* Latest Release */}
        <div onMouseEnter={Show} onMouseLeave={Hide}>
          <div className="content-head">
          <h5>Latest Release</h5> 
            <p className='btn' style={show}>View All &#62;</p>
          </div>
          <div className="contentList" >
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>           
          </div>
        </div>


        <div onMouseEnter={Show} onMouseLeave={Hide}>
          <div className="content-head">
          <h5>Latest Release</h5> 
            <p className='btn' style={show}>View All &#62;</p>
          </div>
          <div className="contentList" >
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>           
          </div>
        </div>

        <div onMouseEnter={Show} onMouseLeave={Hide}>
          <div className="content-head">
          <h5>Latest Release</h5> 
            <p className='btn' style={show}>View All &#62;</p>
          </div>
          <div className="contentList" >
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>           
          </div>
        </div>


        <div onMouseEnter={Show} onMouseLeave={Hide}>
          <div className="content-head">
          <h5>Latest Release</h5> 
            <p className='btn' style={show}>View All &#62;</p>
          </div>
          <div className="contentList" >
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>           
          </div>
        </div>


        <div onMouseEnter={Show} onMouseLeave={Hide}>
          <div className="content-head">
          <h5>Latest Release</h5> 
            <p className='btn' style={show}>View All &#62;</p>
          </div>
          <div className="contentList" >
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>           
          </div>
        </div>


        <div onMouseEnter={Show} onMouseLeave={Hide}>
          <div className="content-head">
          <h5>Latest Release</h5> 
            <p className='btn' style={show}>View All &#62;</p>
          </div>
          <div className="contentList" >
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>           
          </div>
        </div>

        <div onMouseEnter={Show} onMouseLeave={Hide}>
          <div className="content-head">
          <h5>Latest Release</h5> 
            <p className='btn' style={show}>View All &#62;</p>
          </div>
          <div className="contentList" >
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>
              <div className="latestRelease">
                <img src={Carousel3} alt="" />
              </div>           
          </div>
        </div>

      </div>
        

    </>
  )
}

export default Home