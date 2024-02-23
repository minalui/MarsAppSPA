import ComplexCounterButton from "./ComplexCounterButton";
import ComplexCounterMessage from "./ComplexCounterMessage";
import {useState} from "react";
import { Context } from "./context";

const ComplexCounter = () => {

    const [count, setCount] = useState(0);

    const handleClick: () => void = () => {
        setCount(count => count + 1);
    }

    return (
        <>
            <Context.Provider value={count}>
                <ComplexCounterButton handleClick={handleClick}/>
                <ComplexCounterMessage/>
            </Context.Provider>
        </>
    )
}

export default ComplexCounter;