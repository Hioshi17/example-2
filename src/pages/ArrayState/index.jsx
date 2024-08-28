import { useState } from 'react';

const ArrayState = () => {
    const [users, setUsers] = useState([]);

    const addMisha = () => {
        const newUser = { name: 'Миша', surname: 'Svartzneger' };

        setUsers([...users, newUser]);
    };

    return (
        <div>
            <h2>Пользователи</h2>
            {users.map(user => {
                return (
                    <div>
                        <div>{user.name}</div>
                        <div>{user.surname}</div>
                    </div>
                );
            })}
            <button onClick={addMisha}>Добавить Мишу</button>
        </div>
    );
};

export default ArrayState;
