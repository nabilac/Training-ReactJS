import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm'

const Home = () => {
    const initialFormState = {
        id: null,
        name: '',
        username: ''
    }

    //isi data
    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
    ]

    //add
    const [users, setUsers] = useState(usersData)

    //edit
    const [editing, setEditing] = useState(false)

    const [currentUser, setCurrentUser] = useState(initialFormState)

    //CRUD operations
    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setEditing(false)

        setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = user => {
        setEditing(true)

        setCurrentUser({
            id: user.id,
            name: user.name,
            username: user.username
        })
    }

    return (
        <div>
            <h1>CRUD App with Hooks</h1>
            <hr />
            <div>
                {editing ? (
                    <div>
                        <h2>Edit user</h2>
                        <EditUserForm
                            editing={editing}
                            setEditing={setEditing}
                            currentUser={currentUser}
                            updateUser={updateUser}
                        />
                    </div>
                ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )}
            </div>
            <hr />
            <div>
                <h2>View User</h2>
                <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
            </div>
        </div>
    );
};

export default Home;