 import React from 'react'
 import './All.css';
 import emailjs from 'emailjs-com';
 import About from './About';
 import {FiMail} from 'react-icons/fi'




 const Contact = ()=>{

    const sendmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_h4j3l1w', 'template_zwwfdv5',e.target, 'user_qC33yLbJEtculIwTWsm0U')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }


     return(
         <>
         <div className='contouter'>
         <div className='cont'>
             <h1>let's just connected</h1>
             <p id='contactpara'>I’m open to job opportunities and would love to collab with you. So let’s just connect.</p>
         </div>
        <div className='mailid'>
             <FiMail id='mailidicon'  /><p > : jatinaroraaaa3@gmail.com</p></div>
         <div className='cont-head' >
                <form className='contact' onSubmit={sendmail} >
                    <h2 id='contacth2'>Get In Touch</h2>
                    
                    <input type='text' name="email" placeholder='Email' required/>
                    <input title='text' name="name" placeholder='FullName' required/>
                    {/* <input title='email' placeholder=''/> */}
                    
                    <textarea name="message" id='cont-mess' placeholder='Enter Messege' required/>
                    
                    <input type='submit' value='send' id='send'></input>
                
                </form>
                
         </div>
            <About/>
         </div>
         </>
     )
 }

 export default Contact;