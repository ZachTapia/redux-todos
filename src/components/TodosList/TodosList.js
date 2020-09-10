import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import * as actionTypes from "../../redux/actions/actionTypes";
import TodoItem from "../TodoItem/TodoItem";

const lightAccent = "#507C83";

const Wrapper = styled.div`
  width: 100%;
`;
const Title = styled.h1`
  color: ${lightAccent};
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
