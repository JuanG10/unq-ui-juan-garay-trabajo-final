import opciones from '../ENUMs/Opciones.js'
import resultados from '../ENUMs/ResultadoCombate'

import Piedra from '../Imagenes/Piedra.png'
import Papel from '../Imagenes/Papel.png'
import Tijera from '../Imagenes/Tijera.png'
import Lagarto from '../Imagenes/Lagarto.png'
import Spock from '../Imagenes/Spock.png'

export function seleccionarImgDeJugada(opc) {

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

export function determinarVictoria(jugada1, jugada2) {

    if (jugada1 === jugada2) return resultados.EMPATE

    if (jugada1 === opciones.PIEDRA) {

        switch (jugada2) {
            case opciones.LAGARTO:
                return resultados.VICTORIA
            case opciones.TIJERA:
                return resultados.VICTORIA
            case opciones.PAPEL:
                return resultados.DERROTA
            case opciones.SPOCK:
                return resultados.DERROTA
            default: 'Error en' + jugada1 + '. por favor reportar'
        }

    } else if (jugada1 === opciones.PAPEL) {

        switch (jugada2) {
            case opciones.PIEDRA:
                return resultados.VICTORIA
            case opciones.SPOCK:
                return resultados.VICTORIA
            case opciones.TIJERA:
                return resultados.DERROTA
            case opciones.LAGARTO:
                return resultados.DERROTA
            default: 'Error en' + jugada1 + '. por favor reportar'
        }

    } else if (jugada1 === opciones.TIJERA) {

        switch (jugada2) {
            case opciones.PAPEL:
                return resultados.VICTORIA
            case opciones.LAGARTO:
                return resultados.VICTORIA
            case opciones.PIEDRA:
                return resultados.DERROTA
            case opciones.SPOCK:
                return resultados.DERROTA
            default: 'Error en' + jugada1 + '. por favor reportar'
        }

    } else if (jugada1 === opciones.LAGARTO) {

        switch (jugada2) {
            case opciones.PAPEL:
                return resultados.VICTORIA
            case opciones.SPOCK:
                return resultados.VICTORIA
            case opciones.TIJERA:
                return resultados.DERROTA
            case opciones.PIEDRA:
                return resultados.DERROTA
            default: 'Error en' + jugada1 + '. por favor reportar'
        }

    } else if (jugada1 === opciones.SPOCK) {

        switch (jugada2) {
            case opciones.TIJERA:
                return resultados.VICTORIA
            case opciones.PIEDRA:
                return resultados.VICTORIA
            case opciones.PAPEL:
                return resultados.DERROTA
            case opciones.LAGARTO:
                return resultados.DERROTA
            default: 'Error en' + jugada1 + '. por favor reportar'
        }

    } else return '¡¿Qué jugada hiciste?! Eso no está en las reglas.'
}