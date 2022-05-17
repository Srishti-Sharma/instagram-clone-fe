import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";

import { PUBLIC_POSTS } from "./dummy";
import useStyles from "./styles";
import { Favorite, FavoriteBorder, Share } from "@material-ui/icons";
import { useEffect, useState } from "react";

export const CardPost = ({}) => {
  const styles = useStyles();

  const [isFavorite, setFavorite] = useState(false);
  const [posts, setPosts] = useState([]);

  //  fetch all-posts
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    fetch("/allposts", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((err) => err);
  }, []);

  return posts?.map((item, index) => {
    const { postedBy, description, title, photo } = item;
    const { name, _id } = postedBy;
    return (
      <Card
        className={styles.cardSpace}
        sx={{ maxWidth: 470 }}
        variant="outlined"
        key={_id + index}
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
          title={name}
          subheader={posts?.date ? posts?.date : "please add a date"}
          titleTypographyProps={{ textAlign: "start" }}
          subheaderTypographyProps={{ textAlign: "start" }}
        />
        <CardMedia
          component="img"
          height="auto"
          className={styles.cardMedia}
          src={photo !== "no photo" && photo}
          alt={photo === "no photo" ? "No Image" : "Photo"}
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
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
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
