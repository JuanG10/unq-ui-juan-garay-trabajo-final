import React from 'react';

import GridInformacionVS from './GridInformacionVS'
import TextoIntroductorio from './TextoIntroductorio'
import SectorDeJuego from './SectorDeJuego'

const Main = (props) => {
    return (
        <div id="mainBody">
            <TextoIntroductorio />
            <GridInformacionVS />
            <SectorDeJuego props={props}/>
        </div>
    );
}

export default Main;