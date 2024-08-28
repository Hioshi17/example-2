import './User.css';

const User = props => {
    return (
        <div className="user-card">
            <div className="user-avatar">
                <img src={props.avatar} alt="User Avatar" />
            </div>
            <div className="user-info">
                <h2 className="user-name">{props.name}</h2>
                <p className="user-title">{props.title}</p>
                <p className="user-location">{props.location}</p>
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
