let ShowTime = () => {
  let time = new Date();
  return (
    <p className="fs-4">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default ShowTime;
