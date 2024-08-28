const ArrayState = () => {
  const [users, setUsers] = useState([]);
  const addMisha = () => {
    const newuser = { name: "Миша", surname: "Pupkin" };

    setUsers((prevUsers) => [...prevUsers, newuser]);
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.name}>
          <h2>{user.name}</h2>
          <p>{user.title}</p>
          <p>{user.location}</p>
          <img src={user.avatar} alt={user.name} />
          <p>Followers: {user.followers}</p>
          <p>Posts: {user.posts}</p>
          <p>Following: {user.following}</p>
        </div>
      ))}
      <button onClick={addMisha}>Добавить Мишу</button>
    </div>
  );
};

export default ArrayState;
