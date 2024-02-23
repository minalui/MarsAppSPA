import {useCountContext} from "./context";

type Props = {
    count: number
}
const ComplexCounterCount = () => {
    const count = useCountContext();
    return (
        <>
            <p>Count: {count}</p>
        </>
    )
}

export default ComplexCounterCount;