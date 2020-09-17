import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/actions";

const dark = "#151319";
const light = "#E7EAEC";
const lightAccent = "#507C83";

const Title = styled.h1`
  padding: 2vh 0 0 1vw;
  color: ${dark};
  font-size: 2vw;
`;

const Input = styled.input`
  width: 20vw;
  height: 5vh;
  font-size: 1.5vw;
  padding: 1%;
  margin: 2vh 1vw 0;
`;

const Button = styled.button`
  color: ${light};
  font-size: 1vw;
  padding: 0.5vw;
  border-radius: 5px;
  background-color: ${lightAccent};
`;

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <>
      <Title>Add Todo</Title>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={() => dispatch(addTodo(text))}>ADD</Button>
    </>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAddTodo: (text) => dispatch(addTodo(text))
//   };
// };

export default AddTodo;
