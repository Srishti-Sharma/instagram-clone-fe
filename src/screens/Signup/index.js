import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../utils";
import useStyles from "./styles";

export default function SignUp() {
  const styles = useStyles();
  const navigate = useNavigate();

  // const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({
    type: "info",
    message: "",
    open: false,
  });
  const [loading, setLoading] = useState("");

  const handleSubmit = () => {
    let isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setToast({
        open: true,
        message: "Email is not valid",
        type: "error",
      });
      return;
    }
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
      .then((res) => res.json())
      .then((data) => {
        if (data?.error) {
          setToast({
            open: true,
            message: data.error,
            type: "error",
          });
        } else if (data?.message) {
          setToast({
            open: true,
            message: data.message,
            type: "success",
          });
          navigate("/signin", { replace: true });
        }
      })
      .catch((err) =>
        setToast({
          open: true,
          message: err,
          type: "error",
        })
      );
  };

  const handleClose = () =>
    setToast({
      open: false,
    });

  return (
    <div className={styles.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={toast.open}
      >
        <Alert onClose={handleClose} severity={toast.type}>
          {toast.message}
        </Alert>
      </Snackbar>
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
            <Button component={Link} to="/signin">
              Login
            </Button>
          </Typography>
        </Grid>
      </Box>
    </div>
  );
}
