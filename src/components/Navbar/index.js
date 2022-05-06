import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useStyles from "./styles";
import { Grid, Link } from "@mui/material";

const Navbar = () => {
  let styles = useStyles();
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
                  href={"/login"}
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
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
