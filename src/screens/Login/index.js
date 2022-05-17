import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomContext from "../../context";
import { validateEmail } from "../utils";
import useStyles from "./styles";

export default function Login() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CustomContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({
    type: "info",
    message: "",
    open: false,
  });

  const handleLogin = () => {
    let isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setToast({
        open: true,
        message: "Email is not valid",
        type: "error",
      });
      return;
    }
    fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
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
        } else if (data?.token) {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          setToast({
            open: true,
            message: "Signedin successfully",
            type: "success",
          });
          navigate("/");
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
          <Typography variant="h5" className={styles.title}>
            Instagram
          </Typography>
        </Grid>
        <Grid container flexDirection={"column"} spacing={2} pl={5} pr={5}>
          <Grid item>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              label="Password"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          <Grid item mt={2} mb={2}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => handleLogin()}
            >
              Login
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
            Don't have an account?
            <Button component={Link} to="/signup">
              Signup
            </Button>
          </Typography>
        </Grid>
      </Box>
    </div>
  );
}
