import { useState } from "react"
import { contact } from "../models/contact"
import { actionForms } from "../Pure/actionForms";
import { ContactTable } from "./ContactTable"
import { Search } from "./search/Search";


export const ContactList = () => {
    
    const [contactUser, setContactUser] = useState(contact);
    const [stateContactCurrent, setStateContact] = useState(contactUser)
    const {add,del, stateContact, search} = actionForms(contactUser, setContactUser, stateContactCurrent, setStateContact);
    const [modal, setModal] = useState(false);

    return (
        <>
        <div className="container">
        <Search search={search} />
        <table>
            <thead>
                <tr>
                <th>Id</th>
                <th>name</th>
                <th>email</th>
                <th>online</th>
                <th>action</th>
                </tr>
            </thead>
            <tbody>
                {
                    contactUser.map((user, index) => 
                    <ContactTable 
                    key={index}
                    user={user}
                    add={add}
                    del={del}
                    modal={modal}
                    setModal={setModal}
                    stateContact={stateContact}
                    />)
                }
            </tbody>
        </table>
        </div>
        </>
    )
} 