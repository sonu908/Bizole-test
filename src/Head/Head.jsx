import React from "react";
import "../Head/Head.css";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsBuildings, BsFileEarmarkArrowUp, BsBank } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";
import { LiaSuitcaseSolid, LiaCoinsSolid } from "react-icons/lia";
import { BiSolidCoupon } from "react-icons/bi";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import Body from "../Components/Body/Body";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Head() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {" "}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className="Navbar_container">
          <Toolbar className="whole_navigation">
            <div className="navigation_left_end">
              <IconButton>
                {!open && (
                  <img
                    src="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/3d/ed/a7/3deda752-931f-f55f-bf99-529806760478/source/512x512bb.jpg"
                    className="Company_logo"
                    alt=""
                  />
                )}
              </IconButton>
              <IconButton
                className="toggle-button"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <CgMenuRightAlt />
              </IconButton>
              <div className="input_stack">
                <input
                  style={{ boxShadow: "none" }}
                  className="input_bar"
                  type="text"
                />
                <BsSearch />
              </div>
            </div>

            <div className="navigation_right_end">
              <MdOutlineNotificationsActive className="bell-icon" />
              <div className="user-profile">
                <img
                  src="https://images.nightcafe.studio//assets/man-in-suit.jpg?tr=w-1600,c-at_max"
                  alt="User Profile"
                />
              </div>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <DrawerHeader className="HeaderBlock">
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <></>
              ) : (
                <div className="Logo_header">
                  <img
                    src="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/3d/ed/a7/3deda752-931f-f55f-bf99-529806760478/source/512x512bb.jpg"
                    className="Company_logo"
                    alt=""
                  />
                  <h2>Bizpole</h2>
                </div>
              )}
            </IconButton>
          </DrawerHeader>

          <List className="List_sidebar_icons">
            {[
              { text: "Dashboard", icon: <RxDashboard />, active: true },
              {
                text: "Leads & Enquiries",
                icon: <TfiHeadphoneAlt />,
                active: false,
              },
              { text: "Customers", icon: <BsFillPeopleFill />, active: false },
              { text: "Business", icon: <BsBuildings />, active: false },
              { text: "Orders", icon: <BsFileEarmarkArrowUp />, active: false },
              { text: "Check List", icon: <IoIosPaper />, active: false },
              { text: "Coupons", icon: <BiSolidCoupon />, active: false },
            ].map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    backgroundColor: item.active
                      ? " rgb(221, 217, 212)"
                      : "initial",
                    borderLeft: item.active ? " 4px solid #2E6ADF" : "initial",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: item.active ? "#2E6ADF" : ": rgba(0, 0, 0, 0.54)",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" sx={{ fontSize: "11px" }}>
                        {item.text}
                      </Typography>
                    }
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className="List_sidebar_icons">
            {[
              {
                text: "Services & Packages",
                icon: <LiaSuitcaseSolid />,
                active: false,
              },
              {
                text: "Filings & Compilances",
                icon: <BsBank />,
                active: false,
              },
              {
                text: "Data Management",
                icon: <LiaCoinsSolid />,
                active: false,
              },
            ].map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      border: item.active ? "1px solid blue" : "none",
                      borderRight: item.active ? "red" : "none",
                      backgroundColor: item.active
                        ? " rgb(221, 217, 212)"
                        : "none",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" sx={{ fontSize: "11px" }}>
                        {item.text}
                      </Typography>
                    }
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 6 }}>
          <div style={{ padding: "1px", fontSize: 9 }}>
            Home <MdOutlineArrowForwardIos /> Customers{" "}
            <MdOutlineArrowForwardIos /> Addnew{" "}
          </div>
          <Body />
        </Box>
      </Box>
      <div className="footer">
        <p>POWERED BY QUINOID BUISNESS SOLUTIONS</p>
      </div>
    </>
  );
}

export default Head;
