import "./App.css";
import { AppBar } from "../components";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Redirect,
  Navigate,
} from "react-router-dom";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import useStyles from "./styles";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Create from "../screens/CreatePosts";
import CustomContext from "../context";
import { useContext, useEffect, useReducer } from "react";
import userReducer from "../reducer/userReducer";

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CustomContext);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    if (userDetails) {
      dispatch({ type: "USER", payload: userDetails });
    } else {
      navigate("/signin");
    }
  }, []);

  return (
    // <Suspense
    //   fallback={({ text }) => (
    //     <>
    //       <LinearProgress />
    //       {text && (
    //         <Grid container justifyContent="center" alignItems="center">
    //           <Typography text={text} />
    //         </Grid>
    //       )}
    //     </>
    //   )}
    // >
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<Create />} />
    </Routes>
    // </Suspense>
  );
};

function App() {
  const styles = useStyles();

  const [state, dispatch] = useReducer(userReducer);
  return (
    <div className={styles.root}>
      <CustomContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <AppBar />
          <Routing />
        </BrowserRouter>
      </CustomContext.Provider>
    </div>
  );
}

export default App;
