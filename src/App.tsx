
import { decrement, increment, incrementByAmount } from './redux/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hooks'

function App() {
  const {count} = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()
  return (
    <>
      <h1>Tech net</h1>
      <div>
        <button onClick={()=>dispatch(increment())}>Increament</button>
        <br />
        <button onClick={()=>dispatch(incrementByAmount(5))}>Increament by 5</button>
        <div>{count}</div>
        <button onClick={()=>dispatch(decrement())}>Decreament</button>
      </div>
    </>
  )
}

export default App
