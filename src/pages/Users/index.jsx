import User from '../../components/User';
import './Users.css';
import { users } from '../../utils';

const Users = () => {
    return (
        <div>
            <h2 className="users">Все пользователи:</h2>
            <div className="container">
                {users.map(user => {
                    return <User name={user.name} title={user.title} avatar={user.avatar} location={user.location} />;
                })}
            </div>
        </div>
    );
};

export default Users;
