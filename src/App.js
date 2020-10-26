import React from "react";
import Contact from "./components/Contact";

const usersFromApi = [
  {
    id: 1,
    name: "Jean-Michel",
    online: true,
    picture: "https://randomuser.me/api/portraits/men/68.jpg"
  },
  {
    id: 2,
    name: "Michelle",
    online: false,
    picture: "https://randomuser.me/api/portraits/women/70.jpg"
  },
  {
    id: 3,
    name: "Michel",
    online: true,
    picture: "https://randomuser.me/api/portraits/men/55.jpg"
  }
];

function App() {
  return (
    <div className="App">
      {usersFromApi.map((user) => (<Contact key={user.id} online={user.online} name={user.name} picture={user.picture} />))}
    </div>
  );
}

export default App;