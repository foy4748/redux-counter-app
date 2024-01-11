import { useAppSelector } from "../hooks/useRedux";
import {
  LuTally1,
  LuTally2,
  LuTally3,
  LuTally4,
  LuTally5,
} from "react-icons/lu";

const Tally = () => {
  const { counter } = useAppSelector((state) => state);
  const count = counter.value;
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

  // Creating the 5 tiles
  const tallies = Array(numberOfTally).fill(tallySet[4]);

  // Adding the modulus tiles
  tallies.push(tallySet[tallyMark - 1]);

  return tallies;
};

export default Tally;
