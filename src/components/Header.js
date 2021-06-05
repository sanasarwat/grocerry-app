import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Header.css";
import { IconContext } from "react-icons";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#fff",
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
}));

function Header() {
  const classes = useStyles();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div> */}
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Grid container alignItems="center">
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
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
        <nav
          className={sidebar ? "nav-menu active" : "nav-menu"}
          onClick={showSidebar}
        >
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Header;
