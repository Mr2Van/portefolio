import React,{useState} from 'react'
import "./Skills.css"
import SkillsCard from './SkillsCard/SkillsCard'
import { SKILLS } from '../../assets/utils/data'
import SkillsinfoCard from './SkillsinfoCard/SkillsinfoCard'

const Skills = () => {

    const [selectedSkill, setSelectedSkill] =useState(SKILLS[0])

    const handleSelectSkill =(data) =>{
        setSelectedSkill(data)
    }

  return (
    <section className='skills-container'>
        <h5>Technical Proficiency</h5>

        <div className="skills-content">
            <div className="skills">
                
            {SKILLS.map((item) =>(
                
                <SkillsCard
                 key={item.title} 
                 iconUrl={item.icon} 
                 title={item.title} 
                 isActive={selectedSkill.title === item.title}
                 onClick={()=>{
                    handleSelectSkill(item)
                 }}
                 />                

            ))}
            </div>
            <div className="skills-info">
                <SkillsinfoCard heading={selectedSkill.title} skills={selectedSkill.Skills}/>

            </div>
        </div >
    </section>

)
}

export default Skills