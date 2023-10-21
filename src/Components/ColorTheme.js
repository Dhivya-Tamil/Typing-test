import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";


const ColorTheme = ()=>{

    return(
        <div className="footer">
      <div className="social">
        <a href="www.instagram.com"><BsInstagram
          style={{ color: "red", fontSize: "20px", cursor: "pointer" }}
        />
        </a>
        <a href="www.linkedin.com"><BsLinkedin
          style={{ color: "blue", fontSize: "20px", cursor: "pointer" }}
        ></BsLinkedin>
        </a>
        <a href="www.gmail.com">
        <AiOutlineMail
          style={{ color: "blue", fontSize: "20px", cursor: "pointer" }}
        ></AiOutlineMail>
        </a>
        <a href="www.github.com">
        <BsGithub
          style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
        ></BsGithub>
        </a>
      </div>
      <div className="theme">
        <select className="select">
          <option style={{ color: "white", fontSize: "20px", cursor: "pointer" }}>Darken-black</option>
          <option id="grey">Colored-Grey</option>
          <option id="pink">Colored-Pink</option>
          <option id="green">Colored-Green</option>
          <option id="blue">Colored-Blue</option>
          <option id="white">Lighten-White</option>
          <option id="purple">Colored-lightPurple</option>
        </select>
      </div>
    </div>
    )
}

export default ColorTheme;