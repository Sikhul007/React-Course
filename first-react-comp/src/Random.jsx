function Random() {
  let number = () => {
    return Math.round(Math.random() * 100);
  };

  return (
    <p style={{ "background-color": "red" }}>
      Random number is : {Math.round(number())}
    </p>
  );
}

export default Random;
