export const actionForms = (contactUser, setContactUser) =>{

    const add = (newContact) => {
        const newContactTable = [...contactUser, newContact];
        setContactUser(newContactTable)
    }

    const del = (e, user) => {
        e.preventDefault();
        const index = contactUser.indexOf(user);
        const newContactTable = [...contactUser];
        newContactTable.splice(index, 1);
        setContactUser(newContactTable)

    }

    const stateContact = (user) => {
        const index = contactUser.indexOf(user);
        contactUser[index].isOnline = !contactUser[index].isOnline
        const newContactTable = [...contactUser];
        setContactUser(newContactTable)
    }
    return {
        add,
        del,
        stateContact
    }
}