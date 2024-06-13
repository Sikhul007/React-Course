function Hello() {
  let myName = "Shihab";

  let message = () => {
    return "this is ver 1st message";
  };
  return (
    <h3>
      Here we start Dynamic Codin and my name is {myName} and {message()}
    </h3>
  );
}

export default Hello;
