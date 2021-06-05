import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Toolbar,
  CssBaseline,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Grid,
  Badge,
  InputBase,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  useTheme,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { Controls } from "./controls/Controls";
import Popup from "./Popup";
import EmployeeForm from "../pages/employee/EmployeeForm";

import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: "#fff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 2,
    padding: theme.spacing(3),
  },
}));

function SideMenu(props) {
  const { history } = props;
  const { window } = props;
  const classes = useStyles();
  const listItems = [
    {
      text: "DashBoard",

      icon: <AiIcons.AiFillDashboard size="1.5rem" />,
      onClick: () => {
        history.push("/");
      },
    },
    {
      text: "Employees",
      icon: <FaIcons.FaUserFriends size="1.5rem" />,
      onClick: () => {
        history.push("/employees");
      },
    },
    {
      text: "Customers",
      icon: <HiIcons.HiUserGroup size="1.5rem" />,
      onClick: () => {
        history.push("/customers");
      },
    },
    {
      text: "Products",
      icon: <FaIcons.FaShoppingBasket size="1.5rem" />,
      onClick: () => {
        history.push("/products");
      },
    },
    {
      text: "Categories",
      icon: <FiIcons.FiBox size="1.5rem" />,
      onClick: () => {
        history.push("/categories");
      },
    },
    {
      text: "Orders",
      icon: <FaIcons.FaBox size="1.5rem" />,
      onClick: () => {
        history.push("/orders");
      },
    },
    {
      text: "Coupans",
      icon: <RiIcons.RiCouponLine size="1.5rem" />,
      onClick: () => {
        history.push("/");
      },
    },
    {
      text: "Setting",
      icon: <AiIcons.AiFillSetting size="1.5rem" />,
      onClick: () => {
        history.push("/");
      },
    },
  ];
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {listItems.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Grid container alignItems="center">
            <Grid item>
              <InputBase
                placeholder="Search topics"
                className={classes.searchInput}
                startAdornment={<SearchIcon fontSize="small" />}
              />
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsNoneIcon fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color="primary">
                  <ChatBubbleOutlineIcon fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <PowerSettingsNewIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

SideMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(SideMenu);
