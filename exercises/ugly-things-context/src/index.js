import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UglyProvider from "./UglyProvider"
require ("./App.css")
export const {Provider, Consumer} = React.createContext()


ReactDOM.render(
    <UglyProvider>
        <App />
    </UglyProvider>, 
document.getElementById('root'));


