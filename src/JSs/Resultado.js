import React from 'react';

import '../CSSs/Resultado.css'

import resultados from '../ENUMs/ResultadoCombate'

import { Button } from 'react-bootstrap';

import { seleccionarImgDeJugada, determinarVictoria } from './JugadasPosibles'

const Resultado = (props) => {

    const jugada1 = props.location.state.jugada1
    const jugada2 = props.location.state.jugada2

    const resultadoEnfrentamiento = determinarVictoria(jugada1, jugada2)

    function fondoDeResultado(resultado) {
        if (resultado === resultados.VICTORIA) return 'cadetblue'
        else if (resultado === resultados.DERROTA) return 'darkred'
        else return 'gray'
    }

    function bordeDeResultado(resultado) {
        if (resultado === resultados.VICTORIA) return 'aqua'
        else if (resultado === resultados.DERROTA) return 'crimson'
        else return 'white'
    }

    const background = { backgroundColor: fondoDeResultado(resultadoEnfrentamiento) }

    const colorDeBordes = { borderColor : bordeDeResultado(resultadoEnfrentamiento) }

    // Quizá deba replantearme lo de los bordes...

    return (
        <div id="pantallaResultado" style={background}>
                <div className="contenedor">
                    <img className="jugada" style={colorDeBordes} src={seleccionarImgDeJugada(jugada1)} alt="Jugada del jugador 1" />
                    <h2>VICTORIAS 9000</h2>
                </div>
                <div className="contenedor" id="mensajeYBotonVolver">
                    <h3 id="mensajeResultado">{resultadoEnfrentamiento}</h3>
                    <Button onClick={() => props.history.goBack()} > Volver a Jugar </Button>
                    <p>Soy un comentario random para el futuro.</p>
                </div>
                <div className="contenedor">
                    <img className="jugada" style={colorDeBordes} src={seleccionarImgDeJugada(jugada2)} alt="Jugada del jugador 2" />
                    <h2>VICTORIAS 9000</h2>
                </div>
        </div>
    )
}

export default Resultado