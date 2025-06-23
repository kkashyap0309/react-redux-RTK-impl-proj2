import { useSelector, useDispatch } from "react-redux";
import { counterSliceActions } from "../store/counter-slice.js";
import classes from "./Counter.module.css";

const Counter = () => {
  function fetchReduxStateCounterData(state) {
    return state.counter.counter;
  }

  function fetchReduxStateVisibleCounter(state) {
    return state.counter.counterVisible;
  }

  // fetchReduxStateData  funciton will be executed by react-redux
  const counter = useSelector(fetchReduxStateCounterData);

  //we can use mutliple times the useSelector to find the chunk of required state from store
  const showCounter = useSelector(fetchReduxStateVisibleCounter);

  // useDispatch doesnt accepts any argument but it returns a function, which will dispatch
  // a function against a redux store
  const dispatch = useDispatch();

  function handleIncrementButtonClick() {
    dispatch(counterSliceActions.increment());
  }

  function handleDecrementButtonClick() {
    dispatch(counterSliceActions.decrement());
  }

  function handleIncreseButtonClick() {
    dispatch(counterSliceActions.increase({ factor: 5 })); //of course factor can also be dynamic and can be taken into consideration by using input box
  }

  function handleCounterToggleClickEvent() {
    dispatch(counterSliceActions.toggle());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrementButtonClick}>Increment</button>
        <button onClick={handleIncreseButtonClick}>Increment By 5</button>
        <button onClick={handleDecrementButtonClick}>decrement</button>
      </div>

      <button onClick={handleCounterToggleClickEvent}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
