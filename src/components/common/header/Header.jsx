import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./Header.module.css";
import MenuContainer from "../menu/MenuContainer";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import CartModalContainer from "../cartModal/CartModalContainer";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";

const Header = ({
  size,
  navigate,
  menu,
  open,
  handleOpen,
  handleClose,
  user,
  isLogged,
  logout,
  userInitials,
}) => {
  const dispatch = useDispatch();

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className={styles.navBarContainer}
        sx={{
          backgroundColor: "primary.second",
        }}
        position="static"
      >
        <Toolbar className={styles.bar}>
          {size.width < 900 ? (
            <>
              <MenuContainer />
              <img
                src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
                alt="title"
                className={styles.name}
                onClick={() => navigate("/")}
              />
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <IconButton className={styles.menu}>
                <MenuIcon />
              </IconButton>
              <img
                src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
                alt="title"
                className={styles.name}
                onClick={() => navigate("/")}
              />
            </Box>
          )}

          <Box className={styles.items}>
            {menu.map((item) => {
              return (
                <Link
                  key={item.id}
                  sx={{ flexGrow: 1 }}
                  className={styles.item}
                  to={item.path}
                >
                  {item.title}
                </Link>
              );
            })}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {isLogged ? (
              <>
                <div
                  style={{
                    alignItems: "center",
                    backgroundColor: "white",
                    border: "2px solid #d87d4a",
                    borderRadius: "20px",
                    display: "flex",
                    height: "35px",
                    justifyContent: "center",
                    width: "35px",
                  }}
                >
                  <p
                    style={{
                      color: "#d87d4a",
                      fontSize: "1em",
                    }}
                  >
                    {userInitials}
                  </p>
                </div>
                <p style={{ padding: "5px 10px" }}>
                  {user.name} {user.lastName}
                </p>
                <hr />
                <Typography
                  sx={{ cursor: "pointer", padding: "5px 10px" }}
                  variant="body1"
                  onClick={() => dispatch(logout())}
                >
                  Log Out{" "}
                </Typography>
              </>
            ) : (
              <Box className={styles.usersContainer}>
                <Box className={styles.loginBox}>
                  <Link to="/register" className={styles.linkSign}>
                    Register
                  </Link>
                  <hr />
                  <Link to="/login" className={styles.linkSign}>
                    Log In
                  </Link>
                </Box>
              </Box>
            )}
            <Box>
              <IconButton
                className={styles.cartIcon}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ padding: "5px 20px" }}
                onClick={() => handleOpen()}
              >
                <ShoppingCartOutlinedIcon sx={{ fontSize: "1.5rem" }} />
              </IconButton>
              <CartModalContainer open={open} handleClose={handleClose} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
