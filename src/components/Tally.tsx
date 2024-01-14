import { ICounterState } from "../redux/counterSlice";
import { useAppSelector } from "../hooks/useRedux";
import {
  LuTally1,
  LuTally2,
  LuTally3,
  LuTally4,
  LuTally5,
} from "react-icons/lu";

const Tally = () => {
  const counter = useAppSelector<ICounterState>((state) => state.counter);
  const count = counter.value;
  const numberOfTally = Math.floor(count / 5);
  const tallyMark = count % 5;
  const tallySet = [
    <LuTally1 key={"I"} className="animate-tally" />,
    <LuTally2 key={"II"} className="animate-tally" />,
    <LuTally3 key={"III"} className="animate-tally" />,
    <LuTally4 key={"IV"} className="animate-tally" />,
  ];

  // Creating the 5 tiles
  // Duplicate key warning resolve
  // https://stackoverflow.com/questions/49677220/reactjs-array-fill-with-key-in-jsx-element
  const tallies = Array.from({ length: numberOfTally }, (_, i) => {
    return <LuTally5 key={"V" + i} className="animate-tally" />;
  });

  // Adding the modulus tiles
  tallies.push(tallySet[tallyMark - 1]);

  return tallies;
};

export default Tally;
