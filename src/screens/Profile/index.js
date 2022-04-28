import { Button, Grid, Typography } from "@mui/material";
import { MY_POSTS } from "./dummy";
import useStyles from "./styles";

export default function Profile() {
  const styles = useStyles();
  const username = "meghan_mark";
  const posts = 10,
    followers = 25,
    followings = 42,
    fullName = "Meghan Markle",
    bio = `Harleys in Hawaii\nFounder & CEO\nKosmeTiks`;

  return (
    <div className={styles.root}>
      <Grid container className={styles.container}>
        <Grid item xs={4} className={styles.main1}>
          <img
            className={styles.profileImage}
            src={
              "https://images.unsplash.com/photo-1649242066527-249a4986aa90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2624&q=80"
            }
            // src={profilePic}
          />
        </Grid>
        <Grid item className={styles.main2}>
          <Grid item container>
            <Grid item mr={3}>
              <Typography variant="title1">{username}</Typography>
            </Grid>
            <Grid item>
              <Button
                size="small"
                variant={"outlined"}
                className={styles.profileButton}
              >
                Edit Profile
              </Button>
            </Grid>
          </Grid>
          <Grid item container mt={2} mb={2}>
            <Grid item mr={3}>
              <Typography variant="subtitle1" className={styles.profileName}>
                {posts} posts
              </Typography>
            </Grid>
            <Grid item mr={3}>
              <Typography variant="subtitle1" className={styles.profileName}>
                {followers} followers
              </Typography>
            </Grid>
            <Grid item mr={3}>
              <Typography variant="subtitle1" className={styles.profileName}>
                {followings} followings
              </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Typography variant="subtitle1" className={styles.profileName}>
              {fullName}
            </Typography>
          </Grid>
          <Grid item container>
            {bio.split("\n").map((bioText) => {
              console.log({ bioText });
              return (
                <>
                  <Typography
                    variant="subtitle1"
                    className={styles.profileName}
                  >
                    {bioText}
                  </Typography>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      {/* divider starts */}
      <hr className={styles.divider} />
      {/* divider ends */}

      {/* user-gallery */}
      <Grid container justifyContent={"space-evenly"} pt={2} pb={2} mt={5}>
        {MY_POSTS.map((post) => {
          return (
            <div className={styles.gridContainer}>
              <img className={styles.gallery} src={post.url} />
            </div>
          );
        })}
      </Grid>
    </div>
  );
}
