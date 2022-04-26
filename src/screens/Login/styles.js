import { makeStyles } from "@material-ui/core/styles";
// import GrandHotelRegular from "public/fonts/GrandHotel-Regular";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
  container: {
    border: "1px solid #EFEFEF",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontFamily: "GrandHotelRegular",
  },
}));
