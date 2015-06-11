import React from 'react';
import FluxComponent from 'flummox/component';
import AppFlux from './flux.js';

import Report from './components/Report';


const flux = new AppFlux();

React.render(
    <FluxComponent flux={flux}>
        <Report />
    </FluxComponent>
    , document.getElementById('app')
);
