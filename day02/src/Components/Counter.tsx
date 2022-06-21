type CounterProps = {
  count: number;
};

const Counter = (props: CounterProps) => {
  return <p>{props.count}</p>;
};

export default Counter;
