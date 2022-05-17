import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  Input,
  TextField,
  Typography,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import useStyles from "./styles";
import ImageIcon from "@mui/icons-material/Image";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";

const CLOUD_NAME = "danhvh7wi";
const UPLOAD_PRESET = "instagram-clone";
const CLOUD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

const Create = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [url, setUrl] = useState([]);
  const [toast, setToast] = useState({
    type: "info",
    message: "",
    open: false,
  });

  const handleSubmit = () => {
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", UPLOAD_PRESET);
    data.append("cloud_name", CLOUD_NAME);

    // uploads image to cloud and gets the url
    fetch(CLOUD_URL, {
      method: "PUT",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl([data.url]);
        if (data.url) {
          // create post - with title, description and image-url from cloud
          fetch("/createpost", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              title,
              description,
              image_url: url[0],
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.post && data?.post?.title) {
                setToast({
                  open: true,
                  message: "Post created successfully",
                  type: "success",
                });
                navigate("/profile");
              }
            })
            .catch((err) =>
              setToast({
                open: true,
                message: err,
                type: "error",
              })
            );
        }
      })
      .catch((err) => err);
  };

  const handleClose = () =>
    setToast({
      open: false,
    });

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={toast.open}
      >
        <Alert onClose={handleClose} severity={toast.type}>
          {toast.message}
        </Alert>
      </Snackbar>
      <Card sx={{ maxWidth: 680, maxHeight: 500 }} className={styles.container}>
        <CardContent>
          <Grid container flexDirection="column">
            <FormControl fullWidth>
              <Grid item>
                <TextField
                  id="standard-basic"
                  label="Title"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="standard-basic"
                  label="Description"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item mt={2}>
                <div style={{ maxHeight: 280, overflowY: "auto" }}>
                  {files.map((fileObj, index) => {
                    return (
                      <Grid
                        container
                        direction="row"
                        mb={2}
                        mt={2}
                        key={fileObj.name + index}
                        alignItems="center"
                      >
                        <Grid item xs={1}>
                          <ImageIcon />
                        </Grid>
                        <Grid item>
                          <Typography classes={styles.filePreviewText}>
                            {fileObj.name}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton
                            onClick={() => {
                              let newFiles = files.filter(
                                (file) => file.name !== fileObj.name
                              );
                              setFiles(newFiles);
                            }}
                          >
                            <HighlightOffIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    );
                  })}
                </div>
              </Grid>
              <Grid item mt={2} flexDirection="row">
                <label htmlFor="contained-button-file">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Button
                      fullWidth
                      variant="contained"
                      component="span"
                      // className={styles.uploadBtn}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Upload
                    </Button>
                    <Input
                      fullWidth
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        setFiles([...files, ...e.target.files]);
                      }}
                    />
                  </div>
                </label>
              </Grid>
              <Grid item mt={3} mb={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  component="span"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </FormControl>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Create;
