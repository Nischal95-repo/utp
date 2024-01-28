import React, { useState } from "react";
import logo from "../../Assets/Images/logo.jpg";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const btwSmallndMedium = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawer, toggleDrawer] = useState(false);
  console.log("breakpoint", btwSmallndMedium);
  const menuList = [
    { name: "Home", link: "/home" },
    { name: "Product List", link: "/product-list" },
    { name: "About Us", link: "/home#about-us" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <>
      {!btwSmallndMedium ? (
        <header className="header">
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, paddingLeft: "40px" }}>
              <img src={logo} style={{ height: "55px" }} />
            </div>

            <div style={{ flex: 2, alignSelf: "flex-end", textAlign: "right" }}>
              <ul id="menu" style={{ marginTop: "8px", paddingLeft: "0px" }}>
                {menuList.map((ele) => {
                  return (
                    <li>
                      <Link to={ele.link}>{ele.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </header>
      ) : (
        <>
          <Drawer
            open={drawer}
            anchor="left"
            onClose={() => toggleDrawer(false)}
          >
            <ul
              id="menu1"
              style={{ marginTop: "8px", padding: "10px", width: "200px" }}
            >
              {menuList.map((ele) => {
                return (
                  <li style={{ padding: "10px" }}>
                    <Link to={ele.link}>{ele.name}</Link>
                  </li>
                );
              })}
            </ul>
          </Drawer>
          <div className={classes.root}>
            <AppBar position="fixed">
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={() => toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Unitech Products
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
