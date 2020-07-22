import React from 'react';

import GridInformacionVS from './GridInformacionVS'
import TextoIntroductorio from './TextoIntroductorio'
import SectorDeJuego from './SectorDeJuego'

import Button from 'react-bootstrap/Button'

const Main = (props) => {
    return (
        <div id="mainBody">
            <TextoIntroductorio />
            <GridInformacionVS props={props}/>
            <SectorDeJuego props={props}/>
            <div>
                <Button>Posteriormente: Consejos o simil</Button>
            </div>
        </div>
    );
}

export default Main;