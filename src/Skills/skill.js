import React from 'react'
import './skill.css'
import uiDesign from '../assets/ui-design.png'
import webDesign from '../assets/website-design.png'
import appDesign from '../assets/app-design.png'
const Skills = () => {
  return (
    <section id='skills'>
      
     
      <span className='skillTitle'>What I Do</span>
     
      <span className='skillDesc'>Skilled Web Developer with experince of 1+ years , along with Internships and Projects.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={uiDesign} alt='uiDesign' className='img' />
          <div className='skillBarText'>
          
            <h2>Pursuing Degree</h2>
            <p>
        I am a forward-thinking B.Tech <span className='highlight'>2024 graduate</span> student with <span className='highlight'>Electronics Engineering</span> stream at Rajkiya Engineering College , dedicated to academic excellence with a current <span className='highlight'>CGPA of 7.2 </span>. 
      </p>
          </div>
        </div>
        <div className='skillBar'>
        <img  src={webDesign} alt='webDesign'className='img' />
        <div className='skillBarText'>
        
        <h2>MERN  Stack Web Developer</h2>
        <p>
    MERN Stack Developer skilled in <span class='highlight'>HTML</span>, <span class='highlight'>CSS</span>, and <span class='highlight'>JavaScript</span>, including <span class='highlight'>React</span> and <span class='highlight'>Node.js</span>. Committed to creating dynamic and responsive web solutions with a focus on user-centric design.
  </p>
        </div>
        </div>
        <div className='skillBar'>
          <img src={appDesign} alt='appDesign' className='img'/>
          <div className='skillBarText'>
            <h2>C++ Programmer</h2>
            <p>
    Experienced <span class='highlight'>C++</span> programmer adept at crafting efficient and robust solutions. Strong focus on <span className='highlight'>algorithms </span>, <span className='highlight'>data structures</span> , and <span className='highlight'>code optimization </span>. Passionate about delivering high-quality software through clean and maintainable coding practices.
  </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
