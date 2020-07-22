import React from 'react';

import '../CSSs/Resultado.css'

import variantes from '../ENUMs/UsoDeResultado'
import resultados from '../ENUMs/ResultadoCombate'

import { Button } from 'react-bootstrap';

import { seleccionarImgDeJugada, determinarVictoria } from './JugadasPosibles'
import varianteDeResultado from './VarianteDeResultado'

const Resultado = (props) => {

    let victoriasJug1 = props.location.state.contVictoriasJug1
    let victoriasJug2 = props.location.state.contVictoriasJug2

    const jugada1 = props.location.state.jugada1
    const jugada2 = props.location.state.jugada2

    const resultadoEnfrentamiento = determinarVictoria(jugada1, jugada2)

    const background = { backgroundColor: varianteDeResultado(resultadoEnfrentamiento, variantes.COLORFONDO) }

    const colorDeBordes = { borderColor: varianteDeResultado(resultadoEnfrentamiento, variantes.COLORBORDE) }

    // Quizá deba replantearme lo de los bordes...

    function sumar() {
        switch (resultadoEnfrentamiento) {
            case resultados.VICTORIA:
                victoriasJug1 += 1
                break
            case resultados.DERROTA:
                victoriasJug2 += 1
                break
            default: 
        }
    }   

    return (
        <div id="pantallaResultado" style={background}>
            {sumar()}
            <div id="metaContenedor">
                <div className="contenedor">
                    <img className="jugada" style={colorDeBordes} src={seleccionarImgDeJugada(jugada1)} alt="Jugada del jugador 1" />
                    <h2>VICTORIAS {victoriasJug1}</h2>
                </div>
                <div className="contenedor" id="mensajeYBotonVolver">
                    <h3 id="mensajeResultado">{resultadoEnfrentamiento}</h3>
                    <Button onClick={() => props.history.push('/', { victoriasJug1, victoriasJug2 })}>Volver a Jugar</Button>
                    <p>Soy un comentario random para el futuro.</p>
                </div>
                <div className="contenedor">
                    <img className="jugada" style={colorDeBordes} src={seleccionarImgDeJugada(jugada2)} alt="Jugada del jugador 2" />
                    <h2>VICTORIAS {victoriasJug2}</h2>
                </div>
            </div>
        </div>
    )
}

export default Resultado