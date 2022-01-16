import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Master = () => {
    return (
        <div className="App">
            <div className="navbar">
            <ul>
                <li style={{color:"white",size:"150px"}}>{Times}</li>   
                <li>Software Development</li>
                
            </ul>
      </div>

      <div className="skills">
         <h4>Proficiency: Master/Influencer</h4>    
         <h6>Recommendation: 7</h6>
     </div><br/>
      <hr />

      <div className="skills">
         <h4>Alexander's related experience</h4>
         <br/>    
         <h6 style={{color:"lightgreen"}}>Founding Member and Tech lead</h6>
         <h6>The Executive Company</h6> 
         <p>Feb 2015 - Feb 2017</p>
         <br/>

         <h6 style={{color:"lightgreen"}}>Senior Software Engineer</h6>
         <h6>Testing Inc.</h6> 
         <p>Mar 2010 - Jan 2015</p>

        
     </div>
     <br/>
         <hr/>

         <div className="skills">
         <h4>Other People with this skill</h4>
         <br/> 

        
     </div>
    </div>
    )
}

export default Master
