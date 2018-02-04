
import React from 'react';
import ReactDOM from 'react-dom';
// import './common/style/main.css';

/*
    这里使用样式的方式就需要 所谓的css的模块化
    实际就会引入的类名时另外的一种形式
    我们如果想适应相应的类 不能直接使用它的名称 
    而是使用另外的一种形式 
*/ 

import style from './common/style/main.css';
import reset from './common/style/reset.css'

// 这里使用的reset里面的样式会覆盖相应的
// import 'font-awesome/css/font-awesome.css'

console.log(style);
ReactDOM.render(
    <div className={style.ot}>
        <span className={reset.ot}>react</span>
    </div>,
    document.getElementById('root')
);
