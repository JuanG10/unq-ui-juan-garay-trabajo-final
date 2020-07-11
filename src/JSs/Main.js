import React from 'react';
import PPTLS from '../Mockups/PPTLS.png'

const textoIntroductorio = () => {
    return (
        <div id="espacioIntroductorio">
            <p className="tituloPrincipal">¡ Bienvenido a:</p>
            <p>
                <span id="piedra">Piedra, </span>
                <span id="papel">Papel, </span>
                <span id="tijera">Tijera, </span>
                <span id="lagarto">Lagarto </span>
                <span id="spock">o Spock </span>
                <span className="tituloPrincipal">!</span>
            </p>
        </div>
    )
}

const Main = () => {
    return (
        <div id="mainBody">
            {textoIntroductorio()}
            <div>
                <h1>VS</h1>
            </div>
            <div>
                <img src={PPTLS} alt="ruleta de juego"></img>
                <img src={PPTLS} alt="ruleta de juego"></img>
            </div>
            <div>
                <button>Posteriormente: Consejos o simil</button>
            </div>
        </div>
    );
}

export default Main;