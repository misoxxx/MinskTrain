import React from 'react'
function switchTooltip(id){
    return (
            <p>
                Pojde rovno, ak vo vagone 
                <i>
                {' '+String.fromCharCode(65+id)+' '}
                </i>
                bude 0.
            </p>
        )
}

const tooltips = {
    'VAGON': () => {
        <p>Kliknutím môžeš zmeniť číslo v tomto vagóne</p>
    },
    'UDPLUSONE': (id) => {
        return (
            <p>
                Pripocita 1 k vagonu 
                <i>
                {' '+String.fromCharCode(65+id)+' '}
                </i>
            </p>
        )
    },
    'LRPLUSONE': (id) => {
        return (
            <p>
                Pripocita 1 k vagonu 
                <i>
                 {' '+String.fromCharCode(65+id)+' '}
                </i>
            </p>
        )
    },
    'LRMINUSONE': (id) => {
        return (
            <p>
                Odpocita 1 od vagona 
                <i>
                 {' '+String.fromCharCode(65+id)+' '}
                </i>
            </p>
        )
    },
    'UDMINUSONE': (id) => {
        return (
            <p>
                Odpocita 1 od vagona 
                <i>
                 {' '+String.fromCharCode(65+id)+' '}
                </i>
            </p>
        )
    },
    'DRU': switchTooltip,
    'LDR': switchTooltip,
    'RUL': switchTooltip,
    'ULD': switchTooltip,
    'DLU': switchTooltip,
    'LUR': switchTooltip,
    'RDL': switchTooltip,
    'URD': switchTooltip,
    'LRSETX': (id) => {
        return (
            <p>
                Zmeni cislo vo vagone  
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)+' '}
                </i>
                na cislo z vagona
                <i>
                 {' '+String.fromCharCode(65+id.vagonFrom)}
                </i>
            </p>
        )
    },
    'UDSETX': (id) => {
        return (
            <p>
                Zmeni cislo vo vagone  
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)+' '}
                </i>
                na cislo z vagona
                <i>
                 {' '+String.fromCharCode(65+id.vagonFrom)}
                </i>
            </p>
        )
    },
    'LRPLUS': (id) => {
        return (
            <p>
                Scita cisla vo vagonoch  
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> a <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                a vysledok da do vagona
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'UDPLUS': (id) => {
        return (
            <p>
                Scita cisla vo vagonoch  
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> a <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                a vysledok da do vagona
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'LRMINUS': (id) => {
        return (
            <p>
                Odcita cislo vo vagone
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromB)+' '}
                </i> od vagona <i>{' '+String.fromCharCode(65+id.vagonFromA)+' '}</i>
                a vysledok da do vagona
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'UDMINUS': (id) => {
        return (
            <p>
                Odcita cislo vo vagone
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromB)+' '}
                </i> od vagona <i>{' '+String.fromCharCode(65+id.vagonFromA)+' '}</i>
                a vysledok da do vagona
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'LRMUL': (id) => {
        return (
            <p>
                Vynasobi cisla vo vagonoch  
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> a <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                a vysledok da do vagona
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'UDMUL': (id) => {
        return (
            <p>
                Vynasobi cisla vo vagonoch  
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> a <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                a vysledok da do vagona
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'LRDIV': (id) => {
        return (
            <p>
                Vydeli cislo vo vagone
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> cislom vo vagone <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                a celociselny vysledok da do vagona
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'UDDIV': (id) => {
        return (
             <p>
                Vydeli cislo vo vagone
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> cislom vo vagone <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                a celociselny vysledok da do vagona
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'LRMOD': (id) => {
        return (
            <p>
                Zvysok 
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> po deleni cislom <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                da do vagona
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'UDMOD': (id) => {
        return (
              <p>
                Zvysok 
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> po deleni cislom <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                da do vagona
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    }
}

export default tooltips