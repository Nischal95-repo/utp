import { Route, withRouter } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import HomePage from "./Pages/HomePage";

import ContactPage from "./Pages/ContactPage";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#E33E7F",
    },
    primary: {
      main: "#0b5589",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Route path="/product-list" component={ProductPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/contact-us" component={ContactPage} />
      <Route exact path="/" component={HomePage} />
    </MuiThemeProvider>
  );
}

export default withRouter(App);
