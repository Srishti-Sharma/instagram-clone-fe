import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function SignUp() {
  const styles = useStyles();

  const [name, setName] = useState("");
  // const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = () => {
    fetch(`http://localhost:5000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      mode: "cors",
    })
      .then((res) => {
        console.log("res ", res);
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        if (data) return data;
      })
      .catch((err) => console.log({ err }));
  };

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
              // id="outlined-basic"
              label="Full Name"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              fullWidth
              // id="outlined-basic"
              label="Email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              fullWidth
              // id="outlined-basic"
              label="Password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item mt={2} mb={2}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => handleSubmit()}
            >
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
