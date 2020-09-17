import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { changeVisibility } from "../redux/actions";
import TodoItem from "./TodoItem";

const light = "#E7EAEC";

const Wrapper = styled.div``;

const Title = styled.h1`
  display: inline-block;
  margin: 2vh 7vw 0 1vw;
  color: ${light};
  font-size: 2vw;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3vh;
  width: 50%;
`;

const Dropdown = styled.select`
  background-color: ${light};
  font-size: 1vw;
  border-radius: 5px;
  margin-left: auto;
`;

const TodosList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);
  const visibility = useSelector((state) => state.visibility.visibility);

  const renderedTodos = todos.map((todo) => {
    switch (visibility) {
      case "completed": {
        if (todo.completed) {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
            />
          );
        }
        return null;
      }

      case "incompleted": {
        if (!todo.completed) {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
            />
          );
        }
        return null;
      }
      default: {
        return (
          <TodoItem
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            id={todo.id}
          />
        );
      }
    }
  });

  return (
    <Wrapper>
      <Title>Things to do:</Title>
      <Dropdown onChange={(e) => dispatch(changeVisibility(e.target.value))}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </Dropdown>
      <ListContainer>{renderedTodos}</ListContainer>
    </Wrapper>
  );
};

export default TodosList;
