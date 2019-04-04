import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SeasonProvider from './SeasonProvider';
require ("./App.css")
export const {Provider, Consumer} = React.createContext()


ReactDOM.render(
    <SeasonProvider>
        <App />
    </SeasonProvider>, 
document.getElementById('root'));

