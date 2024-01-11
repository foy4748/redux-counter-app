import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { increment, decrement } from "./redux/counterSlice";
function App() {
  const { counter } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  return (
    <>
      <section className="border h-screen flex justify-center items-center">
        <div>
          <h1>Count: {counter.value}</h1>
          <div className="flex justify-between">
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
