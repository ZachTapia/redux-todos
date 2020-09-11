import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodosList from "./components/TodosList";
import AddTodo from "./components/AddTodo";

const dark = "#151319";
const darkAccent = "#657683";
const mainColor = "#595D64";
const light = "#E7EAEC";
const lightAccent = "#507C83";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial';
    color: ${dark};
  }
`;

const AppContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${light};
`;

const FlexContainer = styled.section`
  display: flex;
  position: absolute;
  width: 100vw;
  height: 80vh;
  background-color: ${dark};
  bottom: 0;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <AddTodo />
        <FlexContainer>
          <TodosList />
        </FlexContainer>
      </AppContainer>
    </>
  );
};

export default App;
