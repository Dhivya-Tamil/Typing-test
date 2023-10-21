import React, { useState ,useEffect} from "react";
import words from "./data/words";

const TypingBox = ({displayCount})=>{
const[time,setTime] = useState(15);
// let displayText = "apple orange fruits banana vegetables dog animal cat tiger lion";
// let keyChar = 0;

let defaultWords = "In a bustling city, people hurriedly moved along the crowded streets. The urban landscape was a fusion of towering skyscrapers and historic landmarks. Commuters navigated the bustling subway system while tourists marveled at the architecture. It was a city of diversity, where cultures and ideas converged, creating a vibrant and dynamic atmosphere.";
const[wordCount,setWordCount] = useState(defaultWords);

function count(){
    setWordCount("");
}


function starttimer(){
    const interval = setInterval(()=>{
        setTime(timer => timer - 1)
    },1000);
    return ()=>clearInterval(interval)
}
    return(
        <div>
            <div className="row-1">
                <p>{time}</p>
                <div>
                    <button onClick={()=>{setTime(15)}}>15</button>
                    <button onClick={()=>{setTime(30)}}>30</button>
                    <button onClick={()=>{setTime(60)}}>60</button>
                </div>
                </div>
            <div className="text-box"
            onClick={()=>{
                starttimer();
                count();
            }}>
                {/* {displayText.split("").map((char)=>(<span key={'char' + (keyChar++)}>{char}</span>))} */}
                
                <p>{wordCount} </p> 
                
                {
                 displayCount && (
                    <div>
                        <p
                        onClick={()=>{
                            count();
                        }}>{displayCount.word}</p>
                       
                    </div>
                 )
                
            }
        
            </div> 
        </div>
    )
}

export default TypingBox;