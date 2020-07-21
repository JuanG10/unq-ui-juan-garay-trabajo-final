import React from 'react';

import { Button } from 'react-bootstrap';

import { seleccionarImgDeJugada, determinarVictoria } from './JugadasPosibles'

const Resultado = (props) => {

    const jugada1 = props.location.state.jugada1
    const jugada2 = props.location.state.jugada2

    return (
        <div>
            <img src={seleccionarImgDeJugada(jugada1)} alt="Jugada del jugador 1" />
            <img src={seleccionarImgDeJugada(jugada2)} alt="Jugada del jugador 2" />
            <p>{determinarVictoria(jugada1, jugada2)}</p>
            <Button onClick={() => props.history.goBack()} > Volver a Jugar </Button>
        </div>
    )
}

export default Resultado