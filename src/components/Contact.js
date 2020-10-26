import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


const Contact = ({ online, name, picture }) => (
    < div className="Contact" >
        <img className="avatar" src={picture} alt="" />
        <div>
            <h3 className="name">{name}</h3>
            <div className="status">
                <div className={online ? "status-online" : "status-offline"}></div>
                <p className="status-text">{online ? "Online" : "Offline"}</p>
            </div>
        </div>
    </div >
)

Contact.propTypes = {
    picture: PropTypes.string.isRequired,
    // firstName: PropTypes.string.isRequired,
    // lastName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired

};

export default Contact;

