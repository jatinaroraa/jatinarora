import React from 'react'
import './All.css'
import { BiCodeBlock } from "react-icons/bi";
import {IoCodeSlashSharp} from 'react-icons/io5'
import {ImDatabase} from 'react-icons/im'
import {GrLanguage} from 'react-icons/gr'
import web from './images/web.jpg'
import Contact from './Contact';
import Main from './Main'
import bot from './images/bot.png'
const Home = ()=>{
    return(
        <div>
            <div className='top'>
                <Main/>

                <h1>
                    
                    Full Stack Devloper 
                </h1>
                <p>
                    I design and code beautifull and simple things, I love what i do
                </p>
            </div>
            {/* about */}
            <div className='intro'>
                <h2>
                    Hy i'm jatin, nice to meet you
                </h2>
                <p>
                I’m a Software Development Engineer. I enjoy creating, designing, and experimenting with things. I’ve also been developing some interesting and meaningful projects.
                I’m always interested in becoming a better Engineer, Contributor, Team member, Human and in meeting interesting people.
                </p>
               <a href='https://drive.google.com/file/d/1-2RGur22XOH4rXCwGj4lBih1rMDSdG_-/view?usp=drivesdk' target='_blank' > <input type='button' value='Resume' /></a>
            </div>
            <div className='intro2'>
                <div className='intro2-div1'> <BiCodeBlock color='black' fontSize='70' fontWeight='400'/> 
                            <h2>Front-end Devloper</h2>
                            <p>I like to code my imagination in to browser</p>
                            <p id='p1'>Language make it real:</p>
                            <p>HTML, CSS , REACT , REACT-NATIVE</p>
                            </div>
                <div className='intro2-div2'><IoCodeSlashSharp color='black' fontSize='70' fontWeight='400'/>
                            <h2>Backend Devloper</h2>
                            <p>I like to code that help my imagination to make it real</p>
                            <p id='p2'>Language make it working:</p>
                            <p>JAVASCRIPT</p>
                           </div>
                <div className='intro2-div3'><ImDatabase color='black' fontWeight='400' fontSize='70' />
                            <h2>Database</h2>
                            <p>I guinely care about my clients data </p>
                            <p id='p3'> Where i store everything:</p>
                            <p>MONGODB , SQL, FIREBASE</p></div>
            </div>
            <div className='work'>
                <h2>My Recent Work</h2>
                <p>Here are few designs i worked on recently. want to see more ? <strong id='email'>Email me</strong></p>
            </div>
            <div className='workbox'>
                <div className='proj1'>
                    <a href='https://evermodish.com/' target='_blank' >
                            <div className='project1' id='wp1'>
                        </div>
                        </a>
                        <h1 id='projh1'>E-commerce website</h1>
                    
                </div>
                <div className='proj1'>
                    <a href='https://github.com/jatinaroraa' target='_blank'><div className='project1' id='wp2'>
                    
                    </div>
                    </a>
                    <h3 id='projh1'>Instagram Chat Bot</h3>
                 </div>
                 <div className='proj1'>

                    <a href='https://github.com/jatinaroraa' target='_blank'> 
                            <div className='project1' id='wp3'>
                            </div>
                    </a>
                    
                        <h3 id='projh1'>In construction</h3>
                    
                </div>
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    )
}
export default Home;