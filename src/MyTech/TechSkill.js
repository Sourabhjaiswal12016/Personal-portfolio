import React from 'react'
import './TechSkill.css'
import tech1 from '../MyTech/stack/HTML.png'
import tech2 from '../MyTech/stack/CSS.png'
import tech3 from '../MyTech/stack/Javascript.svg'
import tech4 from '../MyTech/stack/React.png'
import tech5 from '../MyTech/stack/NodeJs.svg'
import tech6 from '../MyTech/stack/NextJsCircle.png'
import tech7 from '../MyTech/stack/Redux.svg'
import tech8 from '../MyTech/stack/Tailwind.png'
import tech9 from '../MyTech/stack/Bootstrap.svg'
import tech10 from '../MyTech/stack/MaterialUI.svg'
import tech11 from '../MyTech/stack/Express.png'
import tech12 from '../MyTech/stack/Git.svg'
import tech13 from '../MyTech/stack/Github.svg'
import tech14 from '../MyTech/stack/MongoDB.svg'
import tech15 from '../MyTech/stack/Vercel.svg'

const TechSkill = () => {
  return (
    <section id='tech-skill'>
    <h2 className='tech-title'>My Skill Set</h2>
    {/* <div className='first-line'></div> */}
    {/* <span className='techDesc'>Discover my skills as a versatile full-stack web developer – adept in modern technologies, excelling in creating robust and user-friendly applications. */}
   {/* </span> */}
    <div className='techImgs'>
        <div className='tech1'>
        <img src={tech1} alt='HTML' className='techImg'/>
        <p className='imgText'>HTML</p>
        </div>
        <div className='tech1'>
        <img src={tech2} alt='tech2' className='techImg'/>
        <p className='imgText'>CSS</p>
        </div>
        <div className='tech1'>
        <img src={tech3} alt='tech3' className='techImg'/>
        <p className='imgText'>Javascript</p>
        </div>

        <div className='tech1'>
        <img src={tech4} alt='tech4' className='techImg'/>
        <p className='imgText'>React</p>
        </div>

        <div className='tech1'>
        <img src={tech5} alt='tech5' className='techImg'/>
        <p className='imgText'>Node Js</p>
        </div>


        <div className='tech1'>
        <img src={tech6} alt='tech6' className='techImg'/>
        <p className='imgText'>Next Js</p>
        </div>


        <div className='tech1'>
        <img src={tech7} alt='tech7' className='techImg'/>
        <p className='imgText'>Redux</p>
        </div>


        <div className='tech1'>
        <img src={tech8} alt='tech8' className='techImg'/>
        <p className='imgText'>Tailwind</p>
        </div>
        <div className='tech1'>
        <img src={tech9} alt='tech9' className='techImg'/>
        <p className='imgText'>Bootstrap</p>
        </div>
        <div className='tech1'>
        <img src={tech10} alt='tech10' className='techImg'/>
        <p className='imgText'>Material UI</p>
        </div>


        <div className='tech1'>
        <img src={tech11} alt='tech11' className='techImg'/>
        <p className='imgText'>Express Js</p>
        </div>


        <div className='tech1'>
        <img src={tech12} alt='tech12' className='techImg'/>
        <p className='imgText'>Git</p>
        </div>

        <div className='tech1'>
        <img src={tech13} alt='tech13' className='techImg'/>
        <p className='imgText'>Github</p>
        </div>


        <div className='tech1'>
        <img src={tech14} alt='tech14' className='techImg'/>
       <p className='imgText'>Mongo DB</p>
        </div>


       <div className='tech1'>
       <img src={tech15} alt='tech15' className='techImg'/>
       <p className='imgText'>Vercel</p>
       </div>
       
    </div>
    <button className='tech-btn'>See More</button>
    </section>
  )
}

export default TechSkill
