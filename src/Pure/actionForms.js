export const actionForms = (contactUser, setContactUser, stateContactCurrent,setStateContact) =>{

    const search = (e) => {
        e.preventDefault();
        let table = [];
        const textSearch = e.target.value;
        const searchTable = contactUser.map(value => value.name.toLowerCase().includes(textSearch.toLowerCase()) ? value.name : 'not found');
        const user = searchTable.filter(user => user !== 'not found');
        user.map(value => {
            console.log(value)
            const newTable = contactUser.filter(contact => contact.name.toLowerCase() === value);
            table = [...table,...newTable];
            return table
        });
        textSearch !== '' ? setContactUser(table) : setContactUser(stateContactCurrent); 
     
    }

    const add = (newContact) => {
        const newContactTable = [...contactUser, newContact];
        setContactUser(newContactTable);
        setStateContact(newContactTable)
    }

    const del = (e, user) => {
        e.preventDefault();
        const index = contactUser.indexOf(user);
        const newContactTable = [...contactUser];
        newContactTable.splice(index, 1);
        setContactUser(newContactTable)
        setStateContact(newContactTable)

    }

    const stateContact = (user) => {
        const index = contactUser.indexOf(user);
        contactUser[index].isOnline = !contactUser[index].isOnline
        const newContactTable = [...contactUser];
        setContactUser(newContactTable)
        setStateContact(newContactTable)
    }

    return {
        add,
        del,
        stateContact,
        search
    }
}