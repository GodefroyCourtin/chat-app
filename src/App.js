import React from 'react';
import Contact from './components/Contact';


const usersFromApi = {
  name: "Jean-Michel",
  online: true
}

function App() {
  return (
    <div className="App">
      <Contact users={usersFromApi} />
    </div>
  );
}

export default App;
