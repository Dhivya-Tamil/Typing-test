import React, { useEffect, useState} from "react";
import words from "./data/words.js";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Footer = ({selectCount})=>{

  return(
      <div className="main-container">
        <div className="count-btn">
                { 
                  words.map((word)=>(
                    <div onClick={()=>selectCount(word)}>
                          <button>{word.count}</button>
                    </div>
                  ))
               }
        </div>
    
  </div>
    )
}

export default Footer;