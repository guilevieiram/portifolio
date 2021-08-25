import React, {useState} from 'react';
import '../styles/Card.css';


function Card({image, title, text, link}) {

    const [isShown, setIsShown] = useState(false);

    const openLink = () => {
        window.open(link)
    };


    return (
        <div 
            className="Card"
            onMouseEnter={()=>setIsShown(true)}
            onMouseLeave={()=>setIsShown(false)}
            onTouchStart={()=>setIsShown(!isShown)}
        >
            <img className='card-image' src={image} alt="" />
            <div className={'card-info' + (isShown ? ' show' : '')}>
                <h3>{title}</h3>
                <p>{text}</p>
                <button onClick={openLink}>See more</button>
            </div>
        </div>
    )
}

export default Card