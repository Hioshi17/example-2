import Message from '../../components/Message';
import './Chat.css';
// import { messages } from '../../utils';
import { useEffect, useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('Компонент погрузился');
    }, []);

    const addMessage = () => {
        const newMessage = {
            author: 'Operator',
            content: text,
            timestamp: '10:25 AM',
        };

        setMessages([...messages, newMessage]);

        clear();
    };

    const onEnterMessage = event => {
        if (event.key === 'Enter') {
            addMessage();
        }
    };

    const onClickMessage = event => {
        addMessage();
    };

    const clear = () => {
        setText('');
    };

    const onChangeText = event => {
        setText(event.target.value);
    };


    return (
        <div className="chat">
            {messages.map((message, index) => {
                return (
                    <Message
                        key={index}
                        isMyMessage={message.author === 'Operator'}
                        content={message.content}
                        author={message.author}
                        timestamp={message.timestamp}
                    />
                );
            })}
            <input className="chat__input" value={text} onChange={onChangeText} onKeyUp={onEnterMessage} type="text" />
            <button onClick={onClickMessage}>Отправить</button>
            <button onClick={clear}>Очистить</button>
        </div>
    );
};

export default Chat;
