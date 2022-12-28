import { useEffect, useState } from "react";
import { XyzTransitionGroup } from "@animxyz/react";

const Loader = () => {
  const [animDirection, setAnimDirection] = useState(false);

  useEffect(() => {
    setAnimDirection(true);
  }, [animDirection]);

  return (
    <XyzTransitionGroup
      className="mx-auto my-24 w-24 h-24 grid grid-cols-3 grid-rows-3 gap-2 drop-shadow-lg"
      xyz="fade small stagger duration-20 iterate-infinite"
    >
      {animDirection &&
        [...Array(9)].map((_, index) => (
          <div className="w-8 h-8 bg-white" key={index} />
        ))
      }
    </XyzTransitionGroup>
  );
};

export default Loader;
