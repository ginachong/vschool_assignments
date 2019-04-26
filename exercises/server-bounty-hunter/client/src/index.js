import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DBProvider from './DBProvider';
import { BrowserRouter } from 'react-router-dom'
export const {Provider, Consumer} = React.createContext()

ReactDOM.render(
<BrowserRouter>
    <DBProvider>
        <App />
    </DBProvider>
</BrowserRouter>, 
document.getElementById('root'));

