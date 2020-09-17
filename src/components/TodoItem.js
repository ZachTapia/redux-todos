import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { toggleTodoComplete, deleteTodo, focusTodo } from "../redux/actions";

const light = "#E7EAEC";
const mainColor = "#595D64";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 25vw;
  height: 10vh;
  background-color: ${light};
  border-radius: 7px;
  margin: 3vh 0;
`;

const Title = styled.p`
  font-size: 1.5vw;
  text-decoration: ${(props) => (props.completed ? "line-through" : null)};
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  height: 1vw;
  width: 1vw;
`;

const Button = styled.button`
  width: 5vw;
  height: 4vh;
  border-radius: 5px;
  font-size: 1vw;
  padding: 1%;
  background-color: ${mainColor};
  color: ${light};
`;

const TodoItem = ({ title, completed, id }) => {
  const dispatch = useDispatch();

  return (
    <ItemContainer
      onClick={() =>
        dispatch(focusTodo({ id: id, title: title, completed: completed }))
      }
    >
      <Checkbox
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete(id))}
      />
      <Title completed={completed}>{title}</Title>

      <Button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteTodo(id));
        }}
      >
        DELETE
      </Button>
    </ItemContainer>
  );
};

export default TodoItem;
