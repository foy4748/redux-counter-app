import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import {
  LuTally1,
  LuTally2,
  LuTally3,
  LuTally4,
  LuTally5,
} from "react-icons/lu";
import { increment, decrement } from "./redux/counterSlice";
function App() {
  const { counter } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  type TallyProp = {
    count: number;
  };
  const Tally = ({ count }: TallyProp) => {
    const numberOfTally = Math.floor(count / 5);
    const tallyMark = count % 5;
    const tallySet = [
      <span>
        <LuTally1 />
      </span>,
      <span>
        <LuTally2 />
      </span>,
      <span>
        <LuTally3 />
      </span>,
      <span>
        <LuTally4 />
      </span>,
      <span>
        <LuTally5 />
      </span>,
    ];
    const tallies = Array(numberOfTally).fill(tallySet[4]);
    tallies.push(tallySet[tallyMark - 1]);
    return tallies;
  };

  return (
    <>
      <section className="border h-screen flex justify-center items-center">
        <div>
          <h1>Count: {counter.value}</h1>
          <div className="flex justify-between">
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
          </div>
          <div className="flex">
            <Tally count={counter.value} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
