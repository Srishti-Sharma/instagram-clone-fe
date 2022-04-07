import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function SignUp() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Box
        className={styles.container}
        sx={{
          width: 400,
          minHeight: 300,
        }}
      >
        <Grid item mb={4} mt={4}>
          <Typography variant="h5">Instagram</Typography>
        </Grid>
        <Grid container flexDirection={"column"} spacing={2} pl={5} pr={5}>
          <Grid item>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              label="Full Name"
              type={"text"}
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              label="Mobile Number"
              type={"number"}
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              label="Username"
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              label="Password"
              type={"password"}
            />
          </Grid>

          <Grid item mt={2} mb={2}>
            <Button color="primary" variant="contained" fullWidth>
              SignUp
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ width: 400, maxHeight: 85 }}
        mt={4}
        className={styles.container}
      >
        <Grid item mb={2} mt={2}>
          <Typography>
            Already have an account?
            <Button component={Link} to="/login">
              Login
            </Button>
          </Typography>
        </Grid>
      </Box>
    </div>
  );
}
