import React from 'react';
import Contact from './components/Contact.js';



function App() {
  return(
    <div className="App">
      <Contact
        name="Max Tell"
        online= {true}
        avatar="https://randomuser.me/api/portraits/men/27.jpg"
      />
      <Contact
        name="Patate Canapé"
        online={false}
        avatar="https://randomuser.me/api/portraits/men/65.jpg"
      />
      <Contact
        name="Roger Rogers"
        online={true}
        avatar="https://randomuser.me/api/portraits/men/65.jpg"
      />     
    
    </div>
  );
}
export default App;