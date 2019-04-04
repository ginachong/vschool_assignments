import React from 'react';
// import "./App.css"
import {withTheme} from "./ThemeProvider"


const App = (props) => (

      <div className={props.theme}>
        <h1>Click the button to change themes</h1>
        <button onClick={props.handleClick}>Click to change</button>
      </div>)


export default withTheme(App);


// const App = props => (

//   <Consumer>
//     {value => (<div className={value.theme}>
//       <h1>Click the button to change themes</h1>
//       <button onClick={value.handleClick}>Click to change</button>
//     </div>)}
//   </Consumer>
// )

// export default App;

