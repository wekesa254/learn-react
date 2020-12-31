import React, {useState} from 'react';

function Counter(){
    const [count, setCount] =useState(0)
    return(
        <div>
            <h2>
                {count}
            </h2>
            <h2 onClick={() => setCount(count + 1)}>
                <button className="btn btn-primary">Plus</button>
            </h2>
            <h2 onClick={() => setCount(count - 1)}>
                <button className="btn btn-primary">Plus</button>
            </h2>
        </div>
    )
}

export default Counter;