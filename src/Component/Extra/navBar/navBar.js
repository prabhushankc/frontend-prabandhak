import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import { singleUser } from "../../redux/actions/Auth";
import decode from "jwt-decode";
import { LOGOUT } from "../../redux/constants/actionTypes";

const pages = ["home", "food", "room", "contact"];
const ResponsiveAppBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [aUser, setaUser] = React.useState();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  const { AsingleUser } = useSelector(state => state.Auth);
  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    navigate("/auth");
  };
  React.useEffect(() => {
    const token = user?.token;
    return () => {
      if (token) {
        const decodedToken = decode(token);
        dispatch(singleUser(user?.result?._id));
        if (decodedToken.exp * 1000 < new Date().getTime()) setUser(null);
      }
      setUser(JSON.parse(localStorage.getItem("profile")));
    };
  }, [location]);
  React.useEffect(() => {
    setaUser(AsingleUser);
  }, [AsingleUser, dispatch]);
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "rgba(0,0,0, 0.2)",
        // boxShadow: 'none',
        backgroundBlendMode: "darken",
        zIndex: "100",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          margin: "0",
          padding: "0",
        }}
      >
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              "@media (max-width: 600px)": {
                fontSize: "1rem",
              },
              "@media (max-width: 350px)": {
                fontSize: "0.8rem",
              },
            }}
          >
            Prabandak
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  backgroundColor: "rgba(0,0,0, 0.2)",
                },
              }}
            >
              {pages.map(page => (
                <NavLink
                  to={`${page}`}
                  key={page}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    style={{
                      color: "black",
                      fontWeight: 300,
                      fontSize: "1.1rem",
                      marginTop: "0.5rem",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                    }}
                  >
                    {page}
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            style={{
              paddingLeft: "7rem",
            }}
          >
            {pages.map(page => (
              <NavLink
                to={`${page}`}
                key={page}
                textalign="center"
                style={{
                  marginRight: "4rem",
                  textDecoration: "none",
                }}
              >
                <MenuItem
                  onClick={handleCloseNavMenu}
                  style={{
                    color: "white",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                  }}
                >
                  {page}
                </MenuItem>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <Tooltip title="Open Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={`${user?.result?.name}`}
                    src={`${user?.result?.selectedFile}`}
                    style={{
                      backgroundColor: "#595775 ",
                    }}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Login">
                <NavLink
                  to="/auth"
                  style={{
                    textDecoration: "none",
                    color: "White",
                  }}
                >
                  <MenuItem
                    key={"auth"}
                    onClick={handleCloseUserMenu}
                    sx={{
                      fontWeight: 600,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      backgroundColor: "transparent",
                      borderRadius: "5%",
                      border: "1px solid white",
                      marginRight: "3rem",
                      padding: "0.4rem 1.4rem",
                      "@media (max-width: 600px)": {
                        fontSize: "0.9rem",
                        marginRight: "2rem",
                        minHeight: "auto",
                        padding: "0.4rem 1.2rem",
                      },
                      "@media (max-width: 400px)": {
                        fontSize: "0.8rem",
                        marginRight: "1rem",
                        padding: "0.4rem 1rem",
                      },
                      "@media (max-width: 350px)": {
                        fontSize: "0.8rem",
                        marginRight: "0.2rem",
                        padding: "0.3rem 0.8rem",
                      },
                    }}
                  >
                    Sign In
                  </MenuItem>
                </NavLink>
              </Tooltip>
            )}

            {user && (
              <Menu
                sx={{ mt: "45px" }}
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
                <NavLink
                  to="profile"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    margin: "auto",
                  }}
                >
                  <Tooltip title="Profile">
                    <MenuItem
                      key={"profile"}
                      onClick={handleCloseUserMenu}
                      style={{
                        fontWeight: 300,
                        letterSpacing: "2px",
                        fontSize: "1.1rem",
                        marginLeft: "0.4rem",
                        textTransform: "capitalize",
                        margin: "auto",
                      }}
                    >
                      <PermIdentityIcon
                        style={{
                          textAlign: "center",
                          margin: "auto",
                          color: "rgb(32, 41, 75)",
                        }}
                      />
                    </MenuItem>
                  </Tooltip>
                </NavLink>
                <Button
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  onClick={logout}
                >
                  <Tooltip title="Logout">
                    <MenuItem
                      key={"Logout"}
                      onClick={handleCloseUserMenu}
                      style={{
                        fontWeight: 300,
                        letterSpacing: "2px",
                        textTransform: "capitalize",
                      }}
                    >
                      <LogoutIcon
                        style={{
                          textAlign: "center",
                          margin: "auto",
                          color: "rgb(32, 41, 75)",
                        }}
                      />
                    </MenuItem>
                  </Tooltip>
                </Button>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
