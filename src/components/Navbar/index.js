import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Grid } from "@mui/material";

import useStyles from "./styles";
import CustomContext from "../../context";

const Navbar = () => {
  let styles = useStyles();

  const { state, dispatch } = useContext(CustomContext);
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.main} position="static" color="inherit">
        <Toolbar>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid
              item
              xs={4}
              style={{
                justifyContent: "flex-start",
              }}
            >
              <Grid item xs={2}>
                <Link
                  href={"/"}
                  labeltext="Home"
                  className={styles.removeUnderline}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    className={styles.logoColor}
                  >
                    Instagram
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid
              item
              container
              flexDirection={"row"}
              xs={6}
              style={{
                justifyContent: "flex-end",
              }}
            >
              {state ? (
                <>
                  <Grid item xs={2}>
                    <Link
                      href={"/"}
                      labeltext="Home"
                      className={styles.removeUnderline}
                    >
                      <Typography variant="body">Home</Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Link
                      href={"/profile"}
                      labeltext="Profile"
                      className={styles.removeUnderline}
                    >
                      <Typography variant="body">Profile</Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Link
                      href={"/create"}
                      labeltext="Create"
                      className={styles.removeUnderline}
                    >
                      <Typography variant="body">Create</Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Link
                      labeltext="Logout"
                      className={styles.logoutButton}
                      onClick={() => {
                        localStorage.clear();
                        dispatch({ type: "CLEAR" });
                        navigate("/signin");
                      }}
                    >
                      <Typography variant="body">Logout</Typography>
                    </Link>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={2}>
                    <Link
                      href={"/signin"}
                      labeltext="Login"
                      className={styles.removeUnderline}
                    >
                      <Typography variant="body">Login</Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Link
                      href={"/signup"}
                      labeltext="Signup"
                      className={styles.removeUnderline}
                    >
                      <Typography variant="body">Signup</Typography>
                    </Link>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
