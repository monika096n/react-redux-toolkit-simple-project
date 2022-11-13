import {useSelector,useDispatch} from 'react-redux';
import {incrementFn,decrementFn,multipleByNumFn} from './reducers/counterReducer'
function App() {
  const stateCount=useSelector(state=>state.counter);//access state value of store
  const dispatch=useDispatch(); //dispatcher
  console.log('count',stateCount)
  return (
    <div className="App">
      <header className="App-header">
         <b> Learn React</b>
          <p>React Redux with redux-toolkit In functional components (createSlice, configureStore --> enough , your redux setp with react is done!) </p>
          <p>createSlice ---> take cares of extracting it's own reducer state value , action creator , export reducer</p>
          <h3>Modified Count Value is:{stateCount.count}</h3>
          <button onClick={()=>dispatch(incrementFn())}> Increment </button>
          <button onClick={()=>dispatch(decrementFn())}> Decrement</button>
          <button onClick={()=>dispatch(multipleByNumFn(5))}> Multiply by 5</button>

      </header>
    </div>
  );
}

export default App;
