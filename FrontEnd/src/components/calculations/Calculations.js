import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, DecrementByThree, incrementByTwo, incrementByAmount } from '../../state/counter/counterSlice'


function Calculations() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    // function reducer(state, action) {
    //     switch (action.type) {
    //         case "increment":
    //             return state + 1;
    //         case "decrement":
    //             return state - 1;
    //         case "incrementBytwo":
    //             return state + 2;
    //         case "incrementBythree":
    //             return state + 3;
    //         default:
    //             throw new Error("not an action")
    //     }
    // }

    // const [state, dispatch] = useReducer(reducer, 0)
    return (<>
        <div style={{ marginBottom: "10px" }}> <h1>Calculations</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByTwo())}> Increment by 2</button>
            <button onClick={() => dispatch(DecrementByThree())} > Decrement by 3</button >
            <button onClick={() => dispatch(incrementByAmount(10))} > Decrement by 10</button >
        </div >
    </>
    )
}

export default Calculations