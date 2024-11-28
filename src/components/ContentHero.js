import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from './Button';
import '../css/ContentHero.scss';
import '../css/GlitchEffect2.scss';


const ContentHero = () => {
    const button_info = {
        text: 'Jogue em itch.io agora',
    }

    useEffect(() =>{
        Aos.init();
    }, []);

    return (
        <div 
            data-aos="fade-up"
        > 
            <div className="hero-content">
                <h1 className="hero-content__title-1 glitch-overlay" data-content="MATE SEU DEMÔNIO">
                    <span>
                    MATE SEU DEMÔNIO
                    </span>
                </h1>
                {/* <h1 className="hero-content__title-1">
                    MATE SEU DEMÔNIO
                </h1> */}
                <h4 className="hero-content__title-2">Experimente um novo jogo de arqui-inimigo</h4>
                <Button {...button_info}/>
            </div>
        </div>
    )
}

export default ContentHero;
