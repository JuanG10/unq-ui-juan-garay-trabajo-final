import React from 'react';

import '../CSSs/SectorDeJuego.css'

import PPTLS from '../Imagenes/PPTLS.png'
import Piedra from '../Imagenes/Piedra.png'
import Papel from '../Imagenes/Papel.png'
import Tijera from '../Imagenes/Tijera.png'
import Lagarto from '../Imagenes/Lagarto.png'
import Spock from '../Imagenes/Spock.png'

import opciones from './Opciones.js'

function opcionAleatoria() {
    const random = Math.floor(Math.random() * 5); // Devuelve un número del 0 al 4.

    switch (random) {
        case 0:
            return opciones.PIEDRA
        case 1:
            return opciones.PAPEL
        case 2:
            return opciones.TIJERA
        case 3:
            return opciones.LAGARTO
        case 4:
            return opciones.SPOCK
        default:
            return 'No tendrías que haber llegado acá. Esto es un error así que reportalo.'
    }
}

const SectorDeJuego = ({props}) => {

    const jugar = (jugada) => {
        props.history.push('/Resultado')
    }

    return (
        <div id="sectorDeJuego">
            <div id="imgBasePPTLS">
                <div id="imgTijera" className="imagenesDeJuego" onClick={() => jugar(opciones.TIJERA)}>
                    <img src={Tijera} alt={opciones.TIJERA} />
                </div>
                <div id="spockPapel">
                    <div className="imagenesDeJuego" onClick={() => jugar(opciones.SPOCK)}>
                        <img src={Spock} alt={opciones.SPOCK} />
                    </div>
                    <div>
                        <img src={PPTLS} alt="PPTLS" /> {/* Cambiar esto urgente por algo funcional */}
                    </div>
                    <div className="imagenesDeJuego" onClick={() => jugar(opciones.PAPEL)}>
                        <img src={Papel} alt={opciones.PAPEL} />
                    </div>
                </div>
                <div id="lagartoPiedra">
                    <div className="imagenesDeJuego" onClick={() => jugar(opciones.LAGARTO)}>
                        <img src={Lagarto} alt={opciones.LAGARTO} />
                    </div>
                    <div className="imagenesDeJuego" onClick={() => jugar(opciones.PIEDRA)}>
                        <img src={Piedra} alt={opciones.PIEDRA} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectorDeJuego