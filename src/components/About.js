import React from 'react'
import SliderAbout from './SliderAbout';
import '../css/About.scss';
import '../css/GlitchEffect2.scss';


const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-section__left">
                <h4 className="display-2">O que é AlarmEvil</h4>
                <h1 className="display-1 glitch-overlay" data-content="UM MINI">
                    <span>UM MINI</span>
                </h1>
                <h1 className="display-1 glitch-overlay" data-content="RPG">
                    <span>RPG</span>
                </h1>
                <hr className="line-separator"/>
                <div className="text-container">
                <p className="about-text-info">
    Prepare-se para um desafio épico em <span className="negrite">AlarmEvil</span>, um RPG de <span className="negrite">5 rodadas intensas</span>.
    Seu objetivo é derrotar seu arqui-inimigo em uma batalha que testa estratégia e coragem. A cada rodada, você deve decidir: 
    <span className="negrite">mais força</span> para golpes devastadores ou <span className="negrite">mais agilidade</span> para esquivas e ataques rápidos.
    <br/><br/>
    Suas escolhas impactam diretamente o desfecho dessa jornada, onde cada decisão pode ser a diferença entre <span className="underline">vida e morte.</span>
</p>

                </div>
            </div>
            <div className="about-section__right">
                <SliderAbout/>
            </div>
        </section>
    )
}

export default About
