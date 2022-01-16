import { useState, useEffect } from "react";
import './App.css';
import  { BrowserRouter as Link } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa' ;
import Diamond from '../src/images/Diamond.jpg';    

function App() {

return(
  <div className="App">
     <div className="navbar">
       <ul>
          <li style={{color:"white",size:"150px"}}>{FaCamera}</li>   
         <li>torres.<span style={{color:"lightgreen"}}>co</span></li>
         <li style={{color:"lightgreen"}}>SIGN IN</li>
       </ul>
     </div>

     <div className="profile-pics">
          <img src={Diamond} alt="profile-pics"/>
         <h4>Alexander Torres</h4>
     </div>

     <div className="skills">
         <h4>Skills and Interests</h4>    
         <h6>Master/Influencer</h6>
         <ul>
        
          <a href="/Master.js"><li>Software Development</li></a>
         
        <li>Team Management</li>   
         </ul>
     </div>

     <div className="skills">
      
         <h6>Proficient</h6>
         <ul>
           <li>Unit testing 115</li>
           <li>Data analysis</li>   
           <li>Functional Programming</li>   
           <li>Reactive Programming</li>  
         </ul>
     </div>

     <div className="skills">
      
         <h6>No Experience</h6>
         <ul>
           <li>Unit testing 215</li>
           <li>Data analysis Grapph</li>   
           <li>Data analysis Grapph2</li> 
           
         </ul>
     </div>
  </div>


   
  
);

}

export default App;
         