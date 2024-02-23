import React from 'react';
import { useNavigate } from 'react-router-dom';
import IntroductionTemplate from "../components/IntroductionTemplate";


function HomePage() {

    const navigate = useNavigate();
    return (
        <div className="App">
            <IntroductionTemplate header_title={"NASA"} image_src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"} image_alt={"NASA logo"} first_paragraph_content={"National Aeronautics and Space Administration"} second_paragraph_content={"NASA is a U.S. government agency that is responsible for science and technology related to air and space."}/>
            <button onClick={() => navigate('/counter')}>Counters</button>
        </div>
    );
}

export default HomePage;
