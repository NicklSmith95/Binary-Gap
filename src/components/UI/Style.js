import styled from "styled-components";

export const Card = styled.div`
  display: block;
  background: whitesmoke;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 10px;
  margin: auto;
  width: 500px;
  height: 125px;
`;

export const Form = styled.form`
  input {
    display: block;
    width: 80%;
    border-style: solid;
    border-width: 2px;
    border-radius: 10px;
    border-color: #00bdec;
    text-align: center;
    height: 20px;
    padding: 5px;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    font-size: 15px;
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
  }

  div {
    font-size: 30px;
    text-align: center;
  }

  button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    padding: 10px;
    border-width: 0px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    background-color: white;
    font-size: 15px;
  }
  button:hover {
    background-color: #00bdec;
    color: white;
  }
`;

export const Results = styled.div`
  h3 {
    color: white;
    text-align: center;
    font-size: 30px;
  }

  h4 {
    color: white;
    text-align: center;
    font-size: 25px;
  }
`;

export const Main = styled.body`
  height: 100vh;
  min-height: 100vh;
  background-color: #00bdec;
  margin: 0;
  font-family: "Roboto Condensed", sans-serif;

  h1 {
    color: white;
    font-size: 50px;
    text-align: center;
    margin: 0;
    padding: 30px;
  }
`;

export const Modal = styled.div`
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
border-radius: 6px;
background-color: white;
padding: 1rem;
text-align: center;
width: 30rem;
z-index: 10;
position: fixed;
top: 20vh;
left: calc(50% - 15rem);
`;
export const Footer = styled.footer`
text-align: center;
  svg {
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 44vh;
    fill: white;
  }

  svg:hover {
    fill: grey;
  }
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`
