import React from 'react';
import InfoBox from "./InfoBox"

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  margin: "10px",
  gridGap: "10px",
}

const App = () => {
  return (
      <div style={containerStyle} className="info">
          <InfoBox 
          backgroundColor="pink" 
          title="Person1" 
          subtitle="cat lover"
          info="this is a person" />
          <InfoBox
          backgroundColor="lightyellow" 
          title="Person2" 
          subtitle="dog lover"
          info="this is another person" />
          <InfoBox
          backgroundColor="lightblue" 
          title="Person3" 
          subtitle="rabbit lover"
          info="this is different person" />
          <InfoBox
          backgroundColor="lavender" 
          title="Person4" 
          subtitle="fox lover"
          info="this is cool person" />
      </div>
  )
}


export default App;
