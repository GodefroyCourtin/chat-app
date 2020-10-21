import React from 'react';
import './Contact.css';

const Contact = ({ users }) => (
    < div className="Contact" >
        <img className="avatar" src="https://randomuser.me/api/portraits/men/68.jpg" alt="" />
        <div>
            <h3 className="name">{users.name}</h3>
            <div className="status">
                <div className={users.online ? "status-online" : "status-offline"}></div>
                <p className="status-text">{users.online ? "Online" : "Offline"}</p>
            </div>
        </div>
    </div >
)

export default Contact;