import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Book } from "@mui/icons-material";
import { makeStyles , withStyles} from "@mui/styles";
import MuiListItem from "@material-ui/core/ListItem";
import AssessmentIcon from "@mui/icons-material/Assessment";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "white"
   },
  }));
  
  const ListItem = withStyles({
    root: {
      "&:hover": {
        backgroundColor: "black",
        color: "white",
        "& .MuiListItemIcon-root": {
          color: "white",
        },
      },
    },
    selected: {},
  })(MuiListItem);
  
  
function PersistentDrawerLeft() {
  const drawerWidth = 240;
  
  
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const user = useSelector((state) => state.user);
  const settings = [ user.email, "Logout"];
  return (
    <div className="classes.root">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="static" style={{ background: "black" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Book
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  color: "#F2EAD3",
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/home"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "serif",
                  fontWeight: 700,
                  color: "#F2EAD3",
                  textDecoration: "none",
                }}
              >
                La-La Music
              </Typography>

              <Box
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              ></Box>
              <Book
                sx={{
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                  color: "#F2EAD3",
                }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "serif",
                  fontWeight: 700,
                  color: "#F2EAD3",
                  textDecoration: "none",
                }}
              >
                La-La Music
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/home">
                  <Button onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "#F2EAD3" }}>
                      Home
                    </Typography>
                  </Button>
                </Link>
                <Link to="/">
                  <Button onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "#F2EAD3" }}>
                      Login
                    </Typography>
                  </Button>
                </Link>
                <Link to="/sign">
                  <Button onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "#F2EAD3" }}>
                      Sign Up
                    </Typography>
                  </Button>
                </Link>
                <Link to="/pro">
                  <Button onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "#F2EAD3" }}>
                      Premium
                    </Typography>
                  </Button>
                </Link>
                <Link to='/feedback'>
                <Button onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "#F2EAD3" }}>
                      Feedback
                    </Typography>
                  </Button>
                  </Link>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <ManageAccountsIcon sx={{ color: "#F2EAD3" }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px", color: "#F2EAD3" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={handleCloseUserMenu}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#DFD7BF",
                          color: "white",
                        },
                      }}
                    >
                      <Typography textAlign="center" component="a" href="/">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>

          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
              backgroundColor: "#F5F5F5",
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem disablePadding>
                <Link to="/like"><ListItemButton>
                  <ListItemIcon>
                  <FontAwesomeIcon icon={faHeart} />
                  </ListItemIcon>
                  <ListItemText primary="Liked Song" />
                </ListItemButton></Link>
              </ListItem>
              <ListItem disablePadding>
               <Link to='/play'><ListItemButton>
                  <ListItemIcon>
                    <AssessmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="PlayList" />
                </ListItemButton></Link> 
              </ListItem>
              {/* <ListItem disablePadding>
               <ListItemButton>
                  <ListItemIcon>
                  <FontAwesomeIcon icon={faDownload} />
                  </ListItemIcon>
                  <ListItemText 
                  primary="Feedback" />
                </ListItemButton>
              </ListItem>  */}
              <ListItem disablePadding>
              <Link to='/do'><ListItemButton>
                  <ListItemIcon>
                  <FontAwesomeIcon icon={faMusic} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Genre"/>
                </ListItemButton></Link>
              </ListItem>
            </List>
            <Divider />
          </Drawer>
        </AppBar>
      </Box>
    </div>
  );
}
export default PersistentDrawerLeft;