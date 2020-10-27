import React from "react";
import Contact from "./Contact";

const usersFromApi = [
    {
        id: 1,
        name: "Jean-Michel",
        connected: true,
        picture: "https://randomuser.me/api/portraits/men/68.jpg"
    },
    {
        id: 2,
        name: "Michelle",
        connected: false,
        picture: "https://randomuser.me/api/portraits/women/70.jpg"
    },
    {
        id: 3,
        name: "Mickael",
        connected: false,
        picture: "https://randomuser.me/api/portraits/men/56.jpg"
    },
    {
        id: 4,
        name: "Eve",
        connected: false,
        picture: "https://randomuser.me/api/portraits/women/55.jpg"
    },
    {
        id: 5,
        name: "Michel",
        connected: true,
        picture: "https://randomuser.me/api/portraits/men/16.jpg"
    }
];

const ContactList = () => (
    <div className="ContactList">
        {usersFromApi.map((user) => (<Contact key={user.id} connected={user.connected} name={user.name} picture={user.picture} />))}
    </div>
)

export default ContactList;