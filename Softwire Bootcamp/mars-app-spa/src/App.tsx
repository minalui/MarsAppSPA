import React from 'react';
import './App.css';
import IntroductionTemplate from "./components/IntroductionTemplate";
import Counter from "./components/Counter";
import ComplexCounter from "./components/ComplexCounter";

function App() {
  return (
    <div className="App">
        <IntroductionTemplate header_title={"NASA"} image_src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"} image_alt={"NASA logo"} first_paragraph_content={"National Aeronautics and Space Administration"} second_paragraph_content={"NASA is a U.S. government agency that is responsible for science and technology related to air and space."}/>
        <Counter/>
        <ComplexCounter/>
    </div>
  );
}

export default App;
