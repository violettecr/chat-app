import React from 'react';
import Contact from './components/Contact.js';



function App() {
  return(
    <div className="App">
      <Contact
        name="Max Tell"
        avatar="https://randomuser.me/api/portraits/men/27.jpg"
      />
      <Contact
        name="LoverBoy"
        avatar="https://randomuser.me/api/portraits/men/65.jpg"
      />
      <Contact
        name="Roger Rogers"
        avatar="https://randomuser.me/api/portraits/men/60.jpg"
      />     
    
    </div>
  );
}
export default App;