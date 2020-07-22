import React, { useState } from 'react'

import '../CSSs/GridInformacionVS.css'

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import oponentes from '../ENUMs/Oponentes'

const GridInformacionVS = (props) => {
    // Barra que señala el lado del jugador y el CPU. Pudiendo seleccionar el oponente.
    const [jugadorActivo, setActivo] = useState(oponentes.NADASELECCIONADO)

    const victoriasJug1 = props.props.location.state ? props.props.location.state.victoriasJug1 : 0
    const victoriasJug2 = props.props.location.state ? props.props.location.state.victoriasJug2 : 0

    return (
        <div id="gridInfoVS">
            <div id="jugadorPrincipal"> <h2>Jugador</h2> <h2>VICTORIAS {victoriasJug1}</h2> </div>
            <div id="VS"> <h1>VS</h1> </div>
            <div id="botonCPUJugador">
                <DropdownButton id="dropdown-basic-button" title={jugadorActivo}>
                    <Dropdown.Item href="#/action-1" onClick={() => setActivo(oponentes.CPU)}>CPU</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={() => setActivo(oponentes.JUGADOR)}>Jugador</Dropdown.Item>
                </DropdownButton>
                <h2>VICTORIAS {victoriasJug2}</h2>
            </div>
        </div>
    )
}

export default GridInformacionVS