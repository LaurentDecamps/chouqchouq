import "./assets/scss/style.scss";
import React, { useState } from 'react';

function App() {

  const [dressupState, setDressupState] = useState({
    dress: {current: 0, total: 2},
    gloves: {current: 0, total: 2},
    // mouth: {current: 0, total: 4},
    // nose: {current: 0, total: 3},
    // clothes: {current: 0, total: 3},  
  });

  function next(item){
    let next_num = dressupState[item].current + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < dressupState[item].total ? next_num : 0
    updateDressUp(item, new_current)
  }

  function updateDressUp(item,new_current){
    console.log(item);
    console.log(new_current);
    setDressupState({
      ...dressupState,
      [item]: {
        current: dressupState[item].current = new_current, 
        total: dressupState[item].total
      }
    })
  }

  return (
    <div className="App">
      <input type="button" value="Robe Suivante" onClick={() => next("dress")}/>
      <input type="button" value="Gants Suivants" onClick={() => next("gloves")}/>
      {/* <input type="button" value="Réinitialiser"></input> */}
      <div id="container">
        <div id="background">
          <div id="titre"></div>
          <div id="body"></div>
          <div id="dress" className={"dress"+(dressupState["dress"].current)}></div>
          <div id="gloves" className={"gloves"+(dressupState["gloves"].current)}></div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
