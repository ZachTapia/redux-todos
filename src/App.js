import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodosList from "./components/TodosList/TodosList";

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

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${dark};
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <TodosList />
      </AppContainer>
    </>
  );
};

export default App;
