import React, { useState } from "react";
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";
import Search from "./components/Search";
import Accordion from "./components/Accordion";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework.'
  },
  {
    title: 'why use react?',
    content: 'React is a favorite library used by engineers.'
  },
  {
    title: 'how do you use react?',
    content: 'React is used by creating components.'
  }
]

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
  
  return ( 

    <React.Fragment>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>

      <Route path='/list'>
        <Search />
      </Route>

      <Route path='/dropdown'>
        <DropDown
          label='Select a Color'
          options={options} 
          selected={selected}
          onSelectedChange={setSelected}

        />
      </Route>

      <Route path='/translate'>
        <Translate />
      </Route>
    </React.Fragment>
  ); 
}

export default App;
