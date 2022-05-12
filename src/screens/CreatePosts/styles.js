import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  container: {
    margin: "auto",
    marginTop: 100,
  },
  uploadBtn: {
    // margin: "10px !important",
    alignContent: "start",
  },
  filePreviewText: {
    color: theme.palette.primary.medium + "!important",
  },
}));

export default styles;
