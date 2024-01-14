import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { increment, decrement, ICounterState } from "./redux/counterSlice";
import Tally from "./components/Tally";
function App() {
  const counter = useAppSelector<ICounterState>((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <section className="border h-screen flex gap-40 justify-center items-center">
        <div>
          <div className="text-center bg-cyan-400 rounded p-3 text-white">
            <h2 className="font-bold text-xl">{counter.value}</h2>
            <h1>Count</h1>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => dispatch(increment())}
              className="px-3 px-5 bg-gray-400 rounded text-white text-center m-1 transition-transform hover:scale-[1.2]"
            >
              +1
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="px-3 px-5 bg-gray-400 rounded text-white text-center m-1 transition-transform hover:scale-[1.2]"
            >
              -1
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-wrap w-40 text-xl">
          <Tally />
        </div>
      </section>
    </>
  );
}

export default App;
