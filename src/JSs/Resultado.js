import React from 'react';

import opciones from './Opciones.js'

import Piedra from '../Imagenes/Piedra.png'
import Papel from '../Imagenes/Papel.png'
import Tijera from '../Imagenes/Tijera.png'
import Lagarto from '../Imagenes/Lagarto.png'
import Spock from '../Imagenes/Spock.png'

import { Button } from 'react-bootstrap';

const Resultado = (props) => {

    const jugada = props.location.state.jugada
    const jugadaCPU = props.location.state.jugadaCPU

    function seleccionarImgDeJugada(opc) {

        switch (opc) {
            case opciones.PIEDRA:
                return Piedra
            case opciones.PAPEL:
                return Papel
            case opciones.TIJERA:
                return Tijera
            case opciones.LAGARTO:
                return Lagarto
            case opciones.SPOCK:
                return Spock
            default:
                return '¿Rompió el juego? Contame sobre el problema en un issue por favor.'
        }
    }

    return (
        <div>
            <img src={seleccionarImgDeJugada(jugada)} />
            <img src={seleccionarImgDeJugada(jugadaCPU)} />
            <Button onClick={() => props.history.goBack()} > Volver a Jugar </Button>
        </div>
    )
}

export default Resultado