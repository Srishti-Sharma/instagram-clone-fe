import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  removeUnderline: {
    textDecoration: "none !important",
  },
  spacing: {
    marginRight: "10px",
    backgroundColor: "thistle",
  },
  logoColor: {
    color: theme.palette.text,
  },
}));
