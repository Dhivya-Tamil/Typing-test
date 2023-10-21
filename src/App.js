import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import TypingBox from "./Components/TypingBox";
import Statistics from "./Components/Statistics";
import Footer from "./Components/Footer";
import words from "./Components/data/words";

import "./App.css";
import ColorTheme from "./Components/ColorTheme";

const App = ()=>{

const[wordCount,setWordCount] = useState(50);

  return(
    <div className="App">
      <Header />
      <TypingBox  displayCount = {wordCount}/>
      <Statistics />
      <Footer selectCount = {setWordCount}/>
      <ColorTheme />
    </div>
  )
}
export default App;