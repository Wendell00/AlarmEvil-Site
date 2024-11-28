import React from 'react'
import '../css/Features.scss';
import '../css/GlitchEffect2.scss';

const Features = () => {
    return (
        <section className="features-section" id="gamefeature">
            <div className="features-section__content-margin-right"></div>
            <div className="features-section__content">
                <h4 className="display-2">O QUE TEM DE ESPECIAL?</h4>
                <h1 className="display-1 glitch-overlay" data-content="NOVIDADES">
                    <span>NOVIDADES</span>
                </h1>

                <div className="features-accordion">
                    <div className="item-1">
                        <div className="features-accordion-title">
                            <button className="option option-1 activeted"></button>
                            <h2>MATE SEU ARQUI-INIMIGO</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            Enfrente seu arqui-inimigo em uma batalha final épica. Use sua força para golpes devastadores ou sua agilidade para escapar e contra-atacar. Cada escolha importa!
                            </p>
                        </div>
                    </div>
                    <div className="item-2">
                        <div className="features-accordion-title">
                            <span className="option option-2"></span>
                            <h2>CRIE SUA ESTRATÉGIA</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            Em cada rodada, você decide: aumentar sua força ou agilidade. Adapte-se ao inimigo, leia seus movimentos e prepare-se para o confronto final.
                            </p>
                        </div>
                    </div>
                    <div className="item-3">
                        <div className="features-accordion-title">
                            <span className="option option-3"></span>
                            <h2>IMPRESSIONE COM SUAS HABILIDADES</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            Mostre sua maestria em combate e surpreenda a todos com decisões estratégicas. Lembre-se: suas escolhas podem ser a diferença entre vida e morte.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features
