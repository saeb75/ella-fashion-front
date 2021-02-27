import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./styles/styles.scss";
import { GlobalStyle, theme } from "./Global";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
