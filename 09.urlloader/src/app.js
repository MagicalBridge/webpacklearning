
import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/main.css'

import dog from './common/img/dogs.jpg'
import kb from './common/img/3kb.jpg'
const giphy = require('./common/img/giphy.gif')
ReactDOM.render(
    <div>
        <img src={dog} alt=""/> 
        <img src={kb} alt=""/> 
        <img src={giphy} alt=""/> 
        <img src={require('./common/img/sc.png')} alt=""/> 
    </div>,
    document.getElementById('root')
);
