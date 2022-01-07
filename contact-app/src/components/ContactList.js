import React from "react";
import ContactCard from "./ContactCard";

// functional component
// props - pass data from parent to child
const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact}></ContactCard>;
    });

    //reference variable in jsx
    return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;