import React, { useRef } from 'react'
import "./WorkExperience.css"
import { WORK_EXPERIENCE } from '../../assets/utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'

const WorkExperience = () => {
  const sliderRef= useRef();

  const settings ={
    dots:false,
    infinite:true,
    speed:500,
    slidesToscroll:1,
    slidesToShow:2,
    arrows:false,
    responsive:[
      {
        breakpoint:769,
        settings:{
          slidesToShow:1,
          slidesToscroll:1,
        },
      },
    ],
  }

  const slideLeft =() =>{
    sliderRef.current.slickPrev();
  }

  const slideRight =() =>{
    sliderRef.current.slickNext();
  }



  return (
    <section className='experience-container'>
        <h5>Work Experience</h5>

        <div className="experience-content">
            <div className="arrow-right" onClick={slideRight}>
              <span class="material-symbols-outlined"> chevron_right</span>
            </div>
            <div className="arrow-left">
              <span class="material-symbols-outlined" onClick={slideLeft}> chevron_left</span>
            </div>





          <Slider ref={sliderRef}{...settings}>
         
           { WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item}/>

            )  )}   
               
          </Slider>
        </div>

    </section> 
  )
}

export default WorkExperience