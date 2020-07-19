import React, { useState } from 'react'

import '../CSSs/GridInformacionVS.css'

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import oponentes from './Oponentes'

const GridInformacionVS = () => {
    // Barra que señala el lado del jugador y el CPU. Pudiendo seleccionar el oponente.
    const [jugadorActivo, setActivo] = useState(oponentes.NADASELECCIONADO)

    return (
        <div id="gridInfoVS">
            <div id="jugadorPrincipal"> <h2>Jugador</h2> </div>
            <div id="VS"> <h1>VS</h1> </div>
            <div id="botonCPUJugador">
                <DropdownButton id="dropdown-basic-button" title={jugadorActivo}>
                    <Dropdown.Item href="#/action-1" onClick={() => setActivo(oponentes.CPU)}>CPU</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={() => setActivo(oponentes.JUGADOR)}>Jugador</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    )
}

export default GridInformacionVS