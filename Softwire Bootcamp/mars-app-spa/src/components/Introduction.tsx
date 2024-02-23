import './Introduction.css'
function Introduction() {
    return (
        <div className="Introduction">
            <h1 className="Introduction__header">NASA</h1>
            <img className="Introduction__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png" alt="NASA logo"/>
            <p className="Introduction__subheader">National Aeronautics and Space Administration</p>
            <p className="Introduction__paragraph">NASA is a U.S. government agency that is responsible for science and technology related to air and space.</p>
        </div>
    );
}

export default Introduction;