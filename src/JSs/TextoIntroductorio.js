import React from 'react'

import '../CSSs/TextoIntroductorio.css'

const TextoIntroductorio = () => {
    // El título y básicamente toda la división de la parte superior.
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

export default TextoIntroductorio