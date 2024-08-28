import './Message.css';

const Message = ({ isMyMessage = false, author, timestamp, content }) => {
    return (
        <div className={`message ${isMyMessage ? 'my-message' : ''}`}>
            <div className="message__header">
                <h3 className="message__author">{author}</h3>
                <span className="message__timestamp">{timestamp}</span>
            </div>
            <div className="message__content">{content}</div>
        </div>
    );
};

export default Message;
