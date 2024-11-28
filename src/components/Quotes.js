import React from 'react'
import Button from './Button';
import CardTestimonial from './CardTestimonial';
import { Testimonial_1, Testimonial_2, Testimonial_3 } from '../utils/Images';
import '../css/Quotes.scss';
import '../css/GlitchEffect2.scss';

const Quotes = () => {
    const button_info = {
        text: 'Ler mais comentários',
        price_text: '', 
        type: 'normal-button' 
    }
    return (
        <section className="quotes-section" id="quotes">
            <div className="quotes-section__left">
                <h4 className="display-2">O que as pessoas acham?</h4>
                
                <h1 className="display-1 glitch-overlay" data-content="COMENTÁRIOS">
                    <span>COMENTÁRIOS</span>
                </h1>
                <div className="text">
                    <p>
                    Nosso objetivo é criar um jogo que você adore e queira jogar. É por isso que estamos constantemente trabalhando para melhorar a experiência, ajustando cada detalhe e ouvindo atentamente o que nossos jogadores têm a dizer. Sua opinião é o que nos guia para tornar cada partida ainda mais épica!
                    </p>
                </div>
                <Button {...button_info}/>
            </div>
            <div className="quotes-section__right">
                <CardTestimonial testimonial={{
                    img_src: Testimonial_1,
                    img_name: 'evan img',
                    name: 'Gabriel José',
                    code_name: 'Entusiasta',
                    content: 'Jogo do ano pode ter certezaa',
                    date: '28 de outubro, 2024'
                }}/>
                <CardTestimonial testimonial={{
                    img_src: Testimonial_2,
                    img_name: 'jada img',
                    name: 'Gabriela',
                    code_name: 'Gamer',
                    content: 'gostei muito da dinamica e achei a idéia original',
                    date: '21 de novembro, 2024'
                }}/>
                <CardTestimonial testimonial={{
                    img_src: Testimonial_3,
                    img_name: 'aaron img',
                    name: 'Wendell Borges',
                    code_name: 'Gamer',
                    content: 'pai que fez, ficou mt bom',
                    date: '22 de outubro, 2024'
                }}/>
                
            </div>
        </section>
    )
}

export default Quotes
