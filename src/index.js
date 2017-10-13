import React from 'react';
import ReactDOM from 'react-dom';
import ListDemo from './ListDemo';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Reservation from "./Reservation";
import StateLift from "./StateLift";

ReactDOM.render(
    <div>
        <ListDemo/>
        <hr/>
        <Reservation/>
        <hr/>
        <StateLift/>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
