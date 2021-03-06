import React, {useState} from 'react';
import '../styles/Card.css';
import texts from '../data/texts.json';


function Card({language, image, title, text, link}) {

    const [isShown, setIsShown] = useState(false);

    const openLink = () => {
        window.open(link)
    };


    return (
        <div 
            className="Card"
            onMouseEnter={()=>setIsShown(true)}
            onMouseLeave={()=>setIsShown(false)}
        >
            <div className='image-container'>
                <img className='card-image' src={image} alt="" />
            </div>
            <div className={'card-info' + (isShown ? ' show' : ' hide')}>
                <h3>{title}</h3>
                <p>{text}</p>
                <button onClick={openLink}>{texts.projectsLink[language.sign]}</button>
            </div>
        </div>
    )
}

export default Card