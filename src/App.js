import { useState } from "react";
import DropDown from "./components/DropDown";
// import Search from "./components/Search";
// import Accordion from "./components/Accordion";

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript framework.'
//   },
//   {
//     title: 'why use react?',
//     content: 'React is a favorite library used by engineers.'
//   },
//   {
//     title: 'how do you use react?',
//     content: 'React is used by creating components.'
//   }
// ]

const options = [
  {
    label: 'The Color Red',
    value: 'Red'
  },
   {
    label: 'The Color Green',
    value: 'Green'
  },
  {
    label: 'A Shade Of Blue',
    value: 'Blue'
  }
];
function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return ( 

    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ? <DropDown selected = {selected} onSelectedChange = {setSelected} options={options } />: null}
      {/* <Accordion items={ items} /> */}
      {/* <Search /> */}
    </div>
  ); 
}

export default App;
