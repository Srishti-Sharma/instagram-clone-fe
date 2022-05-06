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
import { Favorite, FavoriteBorder, Share } from "@material-ui/icons";
import { useState } from "react";

export const CardPost = ({ data }) => {
  const styles = useStyles();

  const [isFavorite, setFavorite] = useState(false);

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
          className={styles.cardMedia}
          src={posts.url}
          alt="green iguana"
        />
        <CardActions>
          <IconButton
            aria-label="like"
            onClick={() => {
              setFavorite(!isFavorite);
            }}
          >
            {isFavorite ? <Favorite color="secondary" /> : <FavoriteBorder />}
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
        <CardContent className={styles.cardContent}>
          <Typography variant="h5" component="div">
            {posts.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {posts.description}
          </Typography>
        </CardContent>
      </Card>
    );
  });
};

export default function Home() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <CardPost data={PUBLIC_POSTS} />
    </div>
  );
}
