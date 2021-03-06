import React, { useState } from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


const Contact = ({ connected, name, picture }) => {
    const [online, setOnline] = useState(connected)


    return (
        < div className="Contact" >
            <img className="avatar" src={picture} alt="" />
            <div>
                <h3 className="name">{name}</h3>
                <div className="status" onClick={() => { setOnline(!online) }}>
                    <div className={online ? "status-online" : "status-offline"} ></div>
                    <p className="status-text" >{online ? "Online" : "Offline"} </p>
                </div>
            </div>
        </div >
    )
}

Contact.propTypes = {
    picture: PropTypes.string.isRequired,
    // firstName: PropTypes.string.isRequired,
    // lastName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    connected: PropTypes.bool.isRequired

};

export default Contact;

