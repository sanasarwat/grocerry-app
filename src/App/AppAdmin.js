import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import SideMenu from "../components/SideMenu";
import { makeStyles, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employees from "../pages/employee/";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Customers from "../pages/Customers";
import Home from "../pages/Home";
import Categories from "../pages/Categories";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

function AppAdmin() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <SideMenu />
          <Switch>
            <Route path="/employees" exact component={Employees} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/products" exact component={Products} />
            <Route path="/customers" exact component={Customers} />
            <Route path="/" exact component={Home} />
            <Route path="/categories" exact component={Categories} />
          </Switch>
        </div>
      </Router>

      <CssBaseline />
    </ThemeProvider>
  );
}

export default AppAdmin;
