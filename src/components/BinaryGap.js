import "./BinaryGap.css";

const BinaryGap = (props) => {
  const binaryString = props.number.toString(2);
  let tempCounter = 0;
  let zeroCounter = 0;

  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "0") {
      tempCounter++;
    }
    if (binaryString[i] === "1") {
      if (tempCounter > zeroCounter) {
        zeroCounter = tempCounter;
      }
      tempCounter = 0;
    }
  }

  return (
    <>
      <h3>Your Binary Conversion Is</h3>
      <h4>{binaryString}</h4>
      <h3>Which Has a Binary Gap of</h3>
      <h4>{zeroCounter}</h4>
    </>
  );
};

export default BinaryGap;
