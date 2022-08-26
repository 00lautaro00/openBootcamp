import { Modal } from "../modals/modal"


export const ContactTable = ({user, del, add, modal, setModal, stateContact}) => {
    return(
        <>
            <tr>
            <td>{user.id}</td>
            <td>
                {user.name}
            </td>
            <td>
                {user.email}
            </td>
            <td>
                <button className={user.isOnline ? 'btn btn-state' : 'btn btn-offline'} onClick={() => stateContact(user)}>
                    {user.isOnline ? 'online' : 'offline'}
                </button>
            </td>
            <td>
                <button className="btn btn-del" onClick={(e) => del(e,user)}>del</button>
                <button className="btn btn-add" onClick={() => setModal( modal = true)}>add</button>
                {modal ? <Modal modal={modal} setModal={setModal} add={add} user={user}/> : console.log('nothing')}
            </td>
            </tr>
        </>
    )
}