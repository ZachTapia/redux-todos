import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as actionTypes from "../redux/actions/actionTypes";

const light = "#E7EAEC";

const ItemContainer = styled.div`
  width: 50%;
  height: 15vh;
  background-color: ${light};
  border-radius: 7px;
  margin: 3vh 0;
  padding: 2.5%;
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

const TodoItem = ({ title, completed, id, onToggleTodo }) => {
  return (
    <ItemContainer>
      <Label completed={completed}>
        <Checkbox checked={completed} onClick={() => onToggleTodo(id)} />
        {title}
      </Label>
    </ItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) =>
      dispatch({ type: actionTypes.toggleTodoComplete, payload: { id: id } })
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
