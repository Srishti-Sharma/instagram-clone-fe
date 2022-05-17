import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    minWidth: "100%",
  },
  removeUnderline: {
    textDecoration: "none !important",
  },
  logoutButton: {
    textDecoration: "none !important",
    cursor: "pointer",
  },
  spacing: {
    marginRight: "10px",
    backgroundColor: "thistle",
  },
  logoColor: {
    color: theme.palette.text,
  },
}));
