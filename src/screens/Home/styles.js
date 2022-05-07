import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  container: {
    display: "flex",
    flex: 1,
    margin: "10px",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  cardSpace: {
    marginBottom: 20,
    marginTop: 10,
  },
  cardMedia: {
    maxHeight: "450px",
  },
  cardContent: {
    textAlign: "start",
  },
}));

export default styles;
