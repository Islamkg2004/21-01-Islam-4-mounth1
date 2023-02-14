import React from 'react';


function Welcome(props)  {
  return (
    
        <h1>Привет, {props.name}</h1>
    
  );
}


function App() {
  return (
    <div>
      <Welcome name="Mango" />
      <Welcome name="Poly" />
      <Welcome name="Ajax" />
    </div>
  );
}


// class Welcome extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Привет, {this.props.name} </h1>
//       </div>
//     );
//   }
// }



export default App;
