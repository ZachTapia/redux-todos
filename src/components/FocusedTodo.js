import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { deleteTodo } from "../redux/actions";

const darkAccent = "#657683";
const mainColor = "#595D64";
const light = "#E7EAEC";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 40vw;
  height: 40vh;
  margin: 4vh 0;
  background-color: ${mainColor};
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 5vw;
  color: ${light};
`;

const Button = styled.button`
  width: 8vw;
  height: 8vh;
  border-radius: 5px;
  font-size: 1.5vw;
  padding: 1%;
  background-color: ${darkAccent};
  color: ${light};
`;

const FocusedTodo = ({ focusedTodo, onDeleteTodo }) => {
  return (
    <Wrapper>
      <Title>
        {focusedTodo.title === undefined ? "Select a Todo" : focusedTodo.title}
      </Title>
      <Button onClick={() => onDeleteTodo(focusedTodo.id)}>DELETE</Button>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  focusedTodo: state.focusedTodo.focusedTodo
});

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteTodo: (id) => dispatch(deleteTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FocusedTodo);
