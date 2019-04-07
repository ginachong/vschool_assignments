import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataProvider from './DataProvider';
import { BrowserRouter } from "react-router-dom"

export const {Provider, Consumer} = React.createContext()


ReactDOM.render(
<BrowserRouter>
    <DataProvider>
        <App />
    </DataProvider>
</BrowserRouter>, 
document.getElementById('root'));


// TO DO:

// -celebration when nirvana is reached
// -a way to reset the progress bar
// - why do the menu links not work when the fixed bar is scrolled down??