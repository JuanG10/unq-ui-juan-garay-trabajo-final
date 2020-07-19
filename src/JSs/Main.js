import React from 'react';

import GridInformacionVS from './GridInformacionVS'
import TextoIntroductorio from './TextoIntroductorio'

import Button from 'react-bootstrap/Button'
import PPTLS from '../Mockups/PPTLS.png'

const Main = () => {
    return (
        <div id="mainBody">
            <TextoIntroductorio />
            <GridInformacionVS />
            <div>
                <img src={PPTLS} alt="ruleta de juego"></img>
                <img src={PPTLS} alt="ruleta de juego"></img>
            </div>
            <div>
                <Button>Posteriormente: Consejos o simil</Button>
            </div>
        </div>
    );
}

export default Main;