type NavBarProps = {
  balance: number;
};

const Navbar = (props: NavBarProps) => {
  return (
    <div className="nav">
      <h1>Bank app</h1>
      <p>{props.balance}</p>
    </div>
  );
};

export default Navbar;
