import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Box, Button, Drawer, IconButton, Link, makeStyles, MenuItem } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style:{
        backgroundColor: trigger ? "white" : "transparent",  
        color: trigger ? "rgba(0,0,0,.7)" : "white",
        transition: trigger ? "0.5s" : "0.5s",
        transform : trigger ? "scale(1)" : "scale(1.05)",      
    }
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

//Appbar content

const headersData = [
    {
      label: "HOME",
      href: "#home",
    },
    {
      label: "ABOUT",
      href: "#about",
    },
    {
      label: "SERVICE",
      href: "#service",
    },
    {
      label: "PROTFOLIO",
      href: "#protfolio",
    },
    {
       label: "TESTIMONIAL",
       href: "#testimonial",
    },
    {
        label: "CONTACT",
        href: "#contact",
    },
  ];

  const useStyles = makeStyles(() => ({
    header: {
      paddingRight: "79px",
      paddingLeft: "79px",
      position: "fixed",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      //color: "#FFFEFE",
      color: "#82B440",
      textAlign: "left",
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
    homeBody: {
      marginTop: "-64px",
    }
  }));

export default function Header(props) {
    const {children} = props;

    const { header, logo, menuButton, toolbar, drawerContainer, homeBody } = useStyles();

    const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
    
        window.addEventListener("resize", () => setResponsiveness());
      }, []);
    
      const displayDesktop = () => {
        return (
          <Toolbar className={toolbar}>
            {femmecubatorLogo}
            <div>{getMenuButtons()}</div>
          </Toolbar>
        );
      };
    
      const displayMobile = () => {
        const handleDrawerOpen = () =>
          setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
          setState((prevState) => ({ ...prevState, drawerOpen: false }));
    
        return (
          <Toolbar>
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon />
            </IconButton>
    
            <Drawer
              {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
            >
              <div className={drawerContainer}>{getDrawerChoices()}</div>
            </Drawer>
    
            <div>{femmecubatorLogo}</div>
          </Toolbar>
        );
      };
    
      const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Link
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
      };

      const femmecubatorLogo = (
        <Typography variant="h6" component="h1" className={logo}>
          MOON
        </Typography>
      );

      const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton,
              }}
            >
              {label}
            </Button>
          );
        });
      };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
          {/* <Toolbar>
            <Typography variant="h6">MOON</Typography>
          </Toolbar> */}
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box className={homeBody}>
        {children}
      </Box>
    </React.Fragment>
  );
}
