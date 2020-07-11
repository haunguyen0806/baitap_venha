import React from 'react';

import './App.css';
import RenderingElements from "./rendering-elements";
// import Baitap1 from "./baitap_1"
// import Baitap2 from "./baitap_2"
import HandlingEvent from "./handing-event";
import ExampleHandlingEvent from './handing-event/example';
import State from './state';
import ListKeys from "./list-keys";
import BaitapCar from "./baitap_car"
import BaitapList from "./Baitap_venha"
function App() {
  return (
    <div>
      <State />
      <hr/>
      <ExampleHandlingEvent />
      <hr/>
      <HandlingEvent /> 
      <hr/>
      <RenderingElements />
      <hr/>
      <ListKeys />
      <hr/>
      <BaitapCar />
      <BaitapList />
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
    </div>
  );
}

export default App;
