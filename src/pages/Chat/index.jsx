import Message from '../../components/Message';
import './Chat.css';
import { messages } from '../../utils';

const Chat = () => {
    return (
        <div className="chat">
            {messages.map(message => {
                return <Message isMyMessage={message.author === 'Operator'} content={message.content} author={message.author} timestamp={message.timestamp} />;
            })}
            <input className="chat__input" type="text" />
        </div>
    );
};

export default Chat;
