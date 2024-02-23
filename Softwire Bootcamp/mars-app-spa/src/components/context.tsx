import {createContext, useContext} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export const Context = createContext<number|undefined>(undefined);

export function useCountContext() {
    const count = useContext(Context);
    if(count === undefined) {
        throw new Error("useCountContext must be used with a Context");
    }
    return count;
}