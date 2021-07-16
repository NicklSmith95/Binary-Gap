import { useState } from "react";
import BinaryGap from "./BinaryGap";
import InfoModal from "./UI/InfoModal";
import Backdrop from "./UI/Backdrop";
import { Card, Form, Results, Modal, Footer } from "./UI/Style";

const BGInput = () => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [binaryString, setBinaryString] = useState(0);
  const [zeroCounter, setZeroCounter] = useState(0);
  const [displayModal, setDisplayModal] = useState(false);

  const openModalHandler = () => {
    setDisplayModal(true)
  }

  const closeModalHandler = () => {
    setDisplayModal(false)
  }

  const inputHandler = (event) => {
    setEnteredNumber(+event.target.value);
  };

  const randomHandler = (event) => {
    event.preventDefault();
    setEnteredNumber(Math.floor(Math.random() * 1000));
  };

  const inputHelper = (binaryString, zeroCounter) => {
    setBinaryString(binaryString);
    setZeroCounter(zeroCounter);
  };

  console.log(binaryString);

  return (
    <>
      <h1>Binary Gap</h1>
      {displayModal && (<InfoModal/>)}
      {displayModal && (<Backdrop onClick={closeModalHandler}/>)}
      <Card>
        <Form>
          <div className="input__label">
            Input Your Number
            <input
              className="input"
              type="number"
              onChange={inputHandler}
              value={enteredNumber || ""}
            />
          </div>
          <button className="submit__button" onClick={randomHandler}>
            Random
          </button>
        </Form>
      </Card>
      <BinaryGap number={enteredNumber} onInput={inputHelper} />
      <Results>
        <h3>Your Binary Conversion Is</h3>
        <h4>{binaryString}</h4>
        <h3>Which Has a Binary Gap of</h3>
        <h4>{zeroCounter}</h4>
      </Results>
      <Footer>
        <a href="https://github.com/NicklSmith95/Binary-Gap" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="25"
          height="25"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
        </a>
        <svg
        onClick={openModalHandler}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="25"
        height="25"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"
        ></path>
      </svg>
      </Footer>
    </>
  );
};

export default BGInput;
