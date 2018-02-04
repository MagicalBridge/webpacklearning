
import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/main.css'

import dog from './common/img/dogs.jpg'
ReactDOM.render(
    <div>
        <img src={dog} alt=""/> 
    </div>,
    document.getElementById('root')
);
