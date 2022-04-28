import {} from "@material-ui/core";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Button,
  Typography,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";

import { PUBLIC_POSTS } from "./dummy";
import useStyles from "./styles";

export const CardPost = ({ data }) => {
  const styles = useStyles();
  return data.map((item) => {
    const { username, posts } = item;
    return (
      <Card
        className={styles.cardSpace}
        sx={{ maxWidth: 470 }}
        variant="outlined"
        key={username}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={username}
          subheader={posts.date}
          titleTypographyProps={{ textAlign: "start" }}
          subheaderTypographyProps={{ textAlign: "start" }}
        />
        <CardMedia
          component="img"
          height="auto"
          style={{ maxHeight: "450px" }}
          src={posts.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {posts.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {posts.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  });
};

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        margin: "10px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CardPost data={PUBLIC_POSTS} />
    </div>
  );
}
