import React from 'react';
import Counter from "../components/Counter";
import ComplexCounter from "../components/ComplexCounter";

function CounterPage() {
    return (
        <div className="App">
            <Counter/>
            <ComplexCounter/>
        </div>
    );
}

export default CounterPage;
