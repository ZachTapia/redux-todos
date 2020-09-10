import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import * as actionTypes from "../redux/actions/actionTypes";
import TodoItem from "./TodoItem";

const dark = "#151319";
const darkAccent = "#657683";
const mainColor = "#595D64";
const light = "#E7EAEC";
const lightAccent = "#507C83";

const Wrapper = styled.div`
  width: 100%;
`;
const Title = styled.h1`
  margin: 2vh 0 0 1vw;
  color: ${light};
  font-size: 2vw;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3vh;
  width: 50%;
`;

const TodosList = ({ todos }) => {
  const renderedTodos = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        title={todo.title}
        completed={todo.completed}
        id={todo.id}
      />
    );
  });

  return (
    <Wrapper>
      <Title>Things to do:</Title>
      <ListContainer>{renderedTodos}</ListContainer>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: () => dispatch({ type: actionTypes.addTodo })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
