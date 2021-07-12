import { useState, useRef } from "react";
import BinaryGap from "./BinaryGap";
import Card from "./UI/Card";
import "./BGInput.css";

const BGInput = () => {
  const [enteredNumber, setEnteredNumber] = useState(0);
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredNumber(+inputRef.current.value);
    console.log(typeof enteredNumber);
  };

  return (
    <>
      <Card>
        <form onSubmit={submitHandler}>
          <div className="input__label">
            Input Your Number
            <input className="input" type="number" ref={inputRef} />
          </div>
          <button className="submit__button" type="submit">
            Submit
          </button>
        </form>
      </Card>
      <BinaryGap number={enteredNumber} />
    </>
  );
};

export default BGInput;
