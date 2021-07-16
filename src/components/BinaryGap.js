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

  props.onInput(binaryString, zeroCounter)

  return null
};

export default BinaryGap;
