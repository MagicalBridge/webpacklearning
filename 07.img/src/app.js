
import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/main.css'

import dog from './common/img/dogs.jpg'
console.log(dog) // 这里面打印的是 图片处理后的路径
ReactDOM.render(
    <div>
        <img src={dog} alt=""/>
    </div>,
    document.getElementById('root')
);
