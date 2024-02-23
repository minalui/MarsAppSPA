import {useEffect, useState} from "react";

// a ?? b
const Counter = () => {

    const localStorageCreated = localStorage.getItem('count');
    const initialCount = localStorageCreated ? parseInt(localStorageCreated) : 0;
    console.log(initialCount);

    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        const storedCount = localStorage.getItem('count');
        if(storedCount) {
            setCount(parseInt(storedCount));
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('count', count.toString())
    }, [count])

    return(
        <>
            <p>Clicks:</p>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>Click</button>
        </>
    )
}

export default Counter;