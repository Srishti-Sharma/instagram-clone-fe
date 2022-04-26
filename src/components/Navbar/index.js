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
                  labelText="Home"
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
              <Grid item xs={1}>
                <Link
                  href={"/profile"}
                  labelText="Profile"
                  className={styles.removeUnderline}
                >
                  <Typography variant="body">Profile</Typography>
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  href={"/login"}
                  labelText="Login"
                  className={styles.removeUnderline}
                >
                  <Typography variant="body">Login</Typography>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link
                  href={"/signup"}
                  labelText="Signup"
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
