import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import axios from "axios";
import IntroductionTemplate from "../components/IntroductionTemplate";
import './HomePage.css';

interface SelectOption {
    value: string,
    label: string
}

interface ApodInfo {
    copyright: string,
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
}

function HomePage() {

    const navigate = useNavigate();
    const [selectedRoverOption, setSelectedRoverOption] = useState<SelectOption|null>(null);
    const [selectedCameraOption, setSelectedCameraOption] = useState<SelectOption|null>(null);
    const [roverOptions, setRoverOptions] = useState<SelectOption[]|undefined>(undefined);
    const [cameraOptions, setCameraOptions] = useState<SelectOption[]|undefined>(undefined);
    const [images, setImages] = useState<String[]|null>(null);
    const [apod, setApod] = useState<ApodInfo|null>(null);

    const imageNotFoundUrl = "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.pallenz.co.nz%2Fpage&psig=AOvVaw1lU1SWKELIhHbT4OnnjhC3&ust=1709113434580000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPiPmO2dy4QDFQAAAAAdAAAAABAE";

    useEffect(() => {
        if (roverOptions === undefined){
            axios.get('http://localhost:8000/rovers')
                .then(response => {
                    let options = response.data.map((option:string) => ({value: option, label: option}));
                    setRoverOptions(options);
                })
                .catch(error => {
                    console.error(error);
                })
        }
    },[]);

    useEffect(() => {
        if(selectedRoverOption != null && cameraOptions === undefined) {
            axios.get(`http://localhost:8000/rovers/${selectedRoverOption.value}`)
                .then(response => {
                    let options = response.data.map((option:string) => ({value: option, label: option}));
                    setCameraOptions(options);
                })
        }
    }, [selectedRoverOption]);

    useEffect(() => {
        if(selectedRoverOption != null && selectedCameraOption != null) {
            axios.get(`http://localhost:8000/rovers/${selectedRoverOption.value}/photos/${selectedCameraOption.value}`)
                .then(response => {
                    setImages(response.data);
                })
        }
    }, [selectedCameraOption])

    useEffect(() => {
        if(apod === null) {
            axios.get(`http://localhost:8000/apod`)
                .then(response => {
                    setApod(response.data);
                })
        }
    }, []);

    const handleRoverChange = (option: SelectOption | null) => {
        if (option) {
            setSelectedRoverOption(option);
        }
    }

    const handleCameraChange = (option: SelectOption | null) => {
        if (option) {
            setSelectedCameraOption(option);
        }
    }

    return (
        <div className="App">
            <IntroductionTemplate header_title={"NASA"} image_src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"} image_alt={"NASA logo"} first_paragraph_content={"National Aeronautics and Space Administration"} second_paragraph_content={"NASA is a U.S. government agency that is responsible for science and technology related to air and space."}/>
            <h3>Astronomy of the Day</h3>
            <img src={apod? apod.url : imageNotFoundUrl}/>
            <p>{apod?.title}</p>
            <p>{apod?.explanation}</p>
            <h3>Select a rover and camera to see the images!</h3>
            <Select
                onChange={handleRoverChange}
                options={roverOptions}
                isSearchable={true}
            />
            <Select
                onChange={handleCameraChange}
                options={cameraOptions}
                isSearchable={true}
            />
            <div className="RoverImageList">
                {images ? images.map((image) => (<li className="RoverImageList__Item"><img className="RoverImageList__Item__Image" src={image.toString()}/></li>)): <p>No images found</p>}
            </div>

            <button onClick={() => navigate('/counter')}>Counters</button>
        </div>
    );
}

export default HomePage;
