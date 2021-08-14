import { Notes, Create } from "./pages";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { amber, teal } from "@material-ui/core/colors";
import { Layout } from "./components";

function App() {
  const theme = createTheme({
    palette: {
      primary: teal,
      secondary: amber,
    },
    typography: {
      fontFamily: "Titillium Web, sans-serif",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
