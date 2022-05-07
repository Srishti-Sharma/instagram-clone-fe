import "./App.css";
import { AppBar } from "../components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import useStyles from "./styles";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Create from "../screens/CreatePosts";

function App() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Router>
        <AppBar />
        {/* <div className={styles.root}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
