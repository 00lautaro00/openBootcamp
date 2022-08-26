import { useRef } from "react"

export const Modal = ({modal, setModal, add,user}) => {
    const nameRef= useRef('');
    const emailRef = useRef('');
    const isOnlineRef = true

    const addContact = (e) => {
        e.preventDefault();
        const newContact = {
            id: user.id + 1,
            name: nameRef.current.value,
            email: emailRef.current.value,
            isOnline: isOnlineRef
        }
        add(newContact);
        setModal(modal = false)
    }
    return(
        <>
        <div className="modal-background"></div>
        <div className="modal" style={{backgroundColor: 'white'}}>
            <form onSubmit={(e) => addContact(e)} style={{display: 'flex', flexDirection:'column'}}>
                <label >Name</label>
                <input ref={nameRef} placeholder="your name" type="text" />
                <label  >Email</label>
                <input ref={emailRef} placeholder="example@gmail.com" type="text" />
                <input type="submit" value={'add'} />
                <button className="close" onClick={() => setModal( modal = false)}> close</button>
            </form>
        </div>
        </>
    )
}