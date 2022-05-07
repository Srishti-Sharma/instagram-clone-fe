// import { styled } from "@material-ui/styles";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  Input,
  TextField,
} from "@mui/material";
import useStyles from "./styles";

// const Input = styled("input")({
//   display: "none",
// });

const Create = () => {
  const styles = useStyles();
  return (
    <Card sx={{ maxWidth: 470, maxHeght: 500 }} className={styles.container}>
      <CardContent>
        <Grid container flexDirection="column">
          <FormControl fullWidth>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" component="span">
                Submit
              </Button>
            </Grid>
          </FormControl>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Create;
