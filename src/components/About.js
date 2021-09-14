import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa';
import {ImLinkedin} from 'react-icons/im'
import {GoMarkGithub} from 'react-icons/go'
import {FaTwitterSquare} from 'react-icons/fa'
const About =()=>{
    return(
        <>
        <div className='about'>
            <h1>follow me</h1>
            <div className='abticons'> 
           <a href='https://www.instagram.com/jatin___arora__/' target='_blank'> <FaFacebookSquare   id='icon' /></a>
           <a href='https://www.linkedin.com/in/jatin-arora-674a311b5/' target='_blank'><ImLinkedin  id='icon'/></a>
           <a href='https://github.com/jatinaroraa' target='_blank'><GoMarkGithub  id='icon'/></a>
           <a href='https://twitter.com/JatinAr64990689?t=H01tUMBzG0t0BK9aUj8GzQ&s=09' target='_blank'> <FaTwitterSquare  id='icon' /></a>
            </div>
            
        </div>
        <a href='https://www.instagram.com/jatin___arora__/' target='_blank'><p id='endp'>Designed by Jatin Arora</p></a>
        </>
    );
}

export default About;