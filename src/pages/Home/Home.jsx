import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="hero-banner" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="hero-title" className='caption-img'/>
          <p>Discovering his ties to a secreat ancient order,
             a young man living in modern Istanbul emabarks on 
             a quest to save the city from an immortal enemy.</p>
             <div className="hero-btns">
              <button className='btn'>
                <img src={play_icon} alt="play_icon" />Play
              </button>
               <button className='btn dark-btn'>
                <img src={info_icon} alt="play_icon" />More Info
              </button>
             </div>
             <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
          <TitleCards title={"Blockbuster Moview"} category={"top_rated"}/>
          <TitleCards title={"Only on Netflix"} category={"popular"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
          <TitleCards title={"Top Pics for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home