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

    const background = { backgroundColor: fondoDeResultado(resultadoEnfrentamiento) }

    return (
        <div id="pantallaResultado" style={background}>
                <div className="contenedor">
                    <img className="jugada" src={seleccionarImgDeJugada(jugada1)} alt="Jugada del jugador 1" />
                    <h2>VICTORIAS 9000</h2>
                </div>
                <div className="contenedor" id="mensajeYBotonVolver">
                    <h3 id="mensajeResultado">{resultadoEnfrentamiento}</h3>
                    <Button onClick={() => props.history.goBack()} > Volver a Jugar </Button>
                    <p>Soy un comentario random para el futuro.</p>
                </div>
                <div className="contenedor">
                    <img className="jugada" src={seleccionarImgDeJugada(jugada2)} alt="Jugada del jugador 2" />
                    <h2>VICTORIAS 9000</h2>
                </div>
        </div>
    )
}

export default Resultado