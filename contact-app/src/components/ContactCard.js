import React from "react";
import user from "../images/user.png";

// functional component
// props - pass data from component to component
const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
                {/* inline style */}
                <i className="trash alternate outline icon" 
                style={{color:"red", marginTop:"7px"}}></i>
            </div>
        </div>
    );
};

export default ContactCard;