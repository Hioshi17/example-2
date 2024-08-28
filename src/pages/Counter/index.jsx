import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const minusCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Счетчик: {count} </h2>
            <button onClick={increaseCount}>+</button>
            <button onClick={minusCount}>-</button>
        </div>
    );
};

export default Counter;
