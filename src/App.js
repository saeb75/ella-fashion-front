import { Container } from "react-bootstrap";
import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./styles/styles.scss";
import { GlobalStyle, theme } from "./Global";
import Home from "./Pages/Home/Home";
import CategorySearch from "./Pages/CategorySearch/CategorySearch";
import { AnimatePresence } from "framer-motion";

function App() {
  let location = useLocation();
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/category" component={CategorySearch} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
