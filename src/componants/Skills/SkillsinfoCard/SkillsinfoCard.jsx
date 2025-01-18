import React from 'react'
import "./SkillsinfoCard.css"

const SkillsinfoCard = ({heading, skills}) => {
  return <div className="skills-info-card">
    <h6>{heading}</h6>
    <div className="skills-info-content">
        { skills.map((item, index) => (
            <React.Fragment key={`skill_${index}`}>
                <div className="skill-info">
                    <p>{item.Skills}</p>
                    <p className='percentage'>{item.percentage}</p>
                    <div className="skills-progress-bg">
                        <div className='skill-progress' style={{width:item.percentage}}/>
                    </div>
                    
                </div>



            </React.Fragment>



        ))}
    </div>
  </div>
}

export default SkillsinfoCard