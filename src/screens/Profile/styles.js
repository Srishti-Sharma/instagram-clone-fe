import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {},
  container: {
    padding: "50px 0px 0px 30px ",
  },
  main1: {},
  main2: {},
  profileName: {
    marginRight: "15px",
  },
  profileButton: {
    color: "black",
  },
  profileImage: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
  },

  divider: {
    marginTop: 20,
    marginLeft: 60,
    width: "89%",
    border: `1px solid #F0F1F0`,
  },

  gallery: {
    height: "300px",
    width: "300px",
    objectFit: "cover",
  },
  gridContainer: {
    backgroundColor: "white",
  },
}));

export default styles;
