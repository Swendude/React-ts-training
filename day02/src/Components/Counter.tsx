import { useEffect } from "react";

type CounterProps = {
  count: number;
};

const Counter = (props: CounterProps) => {
  useEffect(() => {
    console.log("Dit is het begin (mount) van dit component");
  }, []);

  useEffect(() => {
    console.log("Counter is aangepast");
  }, [props.count]);
  return <p>{props.count}</p>;
};

export default Counter;
