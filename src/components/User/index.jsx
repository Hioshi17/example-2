import "./User.css";

const User = () => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        <img src="https://via.placeholder.com/150" alt="User Avatar" />
      </div>
      <div className="user-info">
        <h2 className="user-name">John Doe</h2>
        <p className="user-title">Software Engineer</p>
        <p className="user-location">San Francisco, CA</p>
        <div className="user-stats">
          <div className="stat">
            <h3>Followers</h3>
            <p>1200</p>
          </div>
          <div className="stat">
            <h3>Posts</h3>
            <p>35</p>
          </div>
          <div className="stat">
            <h3>Following</h3>
            <p>180</p>
          </div>
        </div>
        <button className="follow-button">Follow</button>
      </div>
    </div>
  );
};

export default User;
