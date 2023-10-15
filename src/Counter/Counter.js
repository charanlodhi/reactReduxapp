import {useSelector, useDispatch} from "react-redux"
import { increament, decreament, increamentBy } from '../redux/slice/slice';


const Counter =() =>{
    const counter = useSelector(state => state.counter.counter)
 const dispatch = useDispatch()
    return (
       <>
         <div>{counter}</div>
        <button onClick={() => dispatch(increament())}>increament</button>
        <button onClick={() =>dispatch(decreament())}>decreament</button>
        <button onClick={() =>dispatch(increamentBy(20))}>increamentBy</button>
       </>
    )
}

export default Counter;