import ComplexCounterCount from "./ComplexCounterCount";

type Props = {
    count: number
}

const ComplexCounterMessage = () => {
    return (
        <>
            <ComplexCounterCount/>
            <p>I am part of a complex component tree!</p>
        </>
    )
}

export default ComplexCounterMessage;