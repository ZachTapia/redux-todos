import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as actionTypes from "../redux/actions/actionTypes";

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

const Label = styled.label`
  font-size: 1.5vw;
  text-decoration: ${(props) => (props.completed ? "line-through" : null)};
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 1vw;
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

const TodoItem = ({
  title,
  completed,
  id,
  onToggleTodo,
  onDeleteTodo,
  onFocusTodo
}) => {
  return (
    <ItemContainer
      onClick={() =>
        onFocusTodo({ id: id, title: title, completed: completed })
      }
    >
      <Label completed={completed} onClick={(e) => onToggleTodo(e, id)}>
        <Checkbox checked={completed} onClick={(e) => e.stopPropagation()} />
        {title}
      </Label>
      <Button onClick={(e) => onDeleteTodo(e, id)}>DELETE</Button>
    </ItemContainer>
  );
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    onToggleTodo: (e, id) => {
      e.stopPropagation();
      dispatch({ type: actionTypes.toggleTodoComplete, payload: { id: id } });
    },

    onDeleteTodo: (e, id) => {
      e.stopPropagation();
      dispatch({
        type: actionTypes.deleteTodo,
        payload: { id: id }
      });
    },

    onFocusTodo: (focusedTodo) =>
      dispatch({
        type: actionTypes.focusTodo,
        payload: { focusedTodo: focusedTodo }
      })
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
