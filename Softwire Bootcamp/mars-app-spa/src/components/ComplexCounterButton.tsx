interface Props {
    handleClick: () => void;
}

const ComplexCounterButton = ({handleClick}:Props) => {

    return (
        <>
            <button onClick = {handleClick}>Click</button>
        </>
    )
}

export default ComplexCounterButton;