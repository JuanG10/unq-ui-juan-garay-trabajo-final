import resultados from '../ENUMs/ResultadoCombate'
import variantes from '../ENUMs/UsoDeResultado'

function varianteDeResultado(resultado, variante) {

    const errorEn = () => 'Error al determinar ' + variante + ' con resultado ' + resultado

    if (resultado === resultados.VICTORIA) return victoriaVariante()
    else if (resultado === resultados.DERROTA) return derrotaVariante()
    else return empateVariante()

    function victoriaVariante() {
        switch (variante) {
            case variantes.COLORFONDO:
                return 'cadetblue'
            case variantes.COLORBORDE:
                return 'aqua'
            default: errorEn()
        }
    }

    function derrotaVariante() {
        switch (variante) {
            case variantes.COLORFONDO:
                return 'darkred'
            case variantes.COLORBORDE:
               return 'crimson'
            default: errorEn()
        }
    }

    function empateVariante() {
        switch (variante) {
            case variantes.COLORFONDO:
                return 'gray'
            case variantes.COLORBORDE:
                return 'white'
            default: errorEn()
        }
    }
}

export default varianteDeResultado