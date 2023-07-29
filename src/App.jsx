// Write your Color component here
import { useState } from "react";
const Color = (props) => {

  let tempClassName = props.color
  props.color === props.currentColor ? tempClassName += " selected" : tempClassName = props.color;
  
  return <div className={tempClassName}
  onClick={
    () => {props.setSelectedColor(props.color)
      
    
    }
  }
  
  ></div>
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("violet");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
      <Color color="violet" setSelectedColor={setSelectedColor} currentColor = {selectedColor} />
      <Color color="black" setSelectedColor = {setSelectedColor} currentColor = {selectedColor}  />
      <Color color="orange" setSelectedColor= {setSelectedColor} currentColor = {selectedColor}  />{
      /* colors go here */
      
      }</div>
    </div>
  );
};

export default App;
