import User from "../../components/User";
import "./Users.css";
import { users } from "../../pages/Users/utils";

const Users = () => {
  return (
    <div>
      <h2 className="users">Все пользователи:</h2>
      <div className="container">
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};

export default Users;
