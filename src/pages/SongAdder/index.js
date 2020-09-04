import React, { useContext } from "react";
import {
  Typography,
  Container,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  CircularProgress,
  Hidden,
} from "@material-ui/core";
import { Styled } from "./style";
import { Formik, ErrorMessage } from "formik";
import Axios from "axios";
import { AuthContext } from "../../context/auth-context";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../context/data-context";
import { ReactComponent as CoverIconSvg } from "../../assets/icons/bx-image-add.svg";
import { ReactComponent as VideoIconSvg } from "../../assets/icons/bx-video-plus.svg";
import { useState } from "react";
import { useEffect } from "react";
import firebase, { storage } from "../../config/firebase";
import { v4 as uuid } from "uuid";
import vSchema from "./validation";

const SongAdder = () => {
  const history = useHistory();
  const { token } = useContext(AuthContext);
  const { songs, setSongs } = useContext(DataContext);
  const [imageProgress, setImageProgress] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  // const [coverUrl, setCoverUrl] = useState(null);
  // const [videoUrl, setVideoUrl] = useState(null);

  return (
    <Container>
      <Styled.SongAdder className="page">
        <Typography variant="h4" className="hero-title">
          Add song.
        </Typography>
        <div className="form">
          <Formik
            validationSchema={vSchema}
            // validateOnMount={true}
            initialValues={{
              artist_name: "",
              song_name: "",
              lyrics: "",
              cover_file: null,
              video_file: null,
              ratings_number: Math.floor(Math.random() * 10000),
              rating: 4.8,
            }}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              const submit = async () => {
                setSubmitting(true);

                try {
                  // Upload cover
                  if (!values.cover_file || !values.video_file) {
                    setSubmitting(false);
                    return;
                  }

                  return new Promise(function (resolve, reject) {
                    let newSong = {};

                    // Generate a unique name for the image
                    let imageName = `cover-${uuid()}`;
                    // Storage reference
                    let uploadRef = storage.ref(`images/${imageName}`);
                    // Uplaod file
                    const uploadTask = uploadRef.put(values.cover_file);
                    // Get the download link
                    uploadTask.on(
                      "state_changed",
                      function (snapshot) {
                        // Observe state change events such as progress, pause, and resume
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        var progress =
                          (snapshot.bytesTransferred / snapshot.totalBytes) *
                          100;
                        console.log("Upload is " + progress + "% done");
                        setImageProgress(progress);
                        switch (snapshot.state) {
                          case firebase.storage.TaskState.PAUSED: // or 'paused'
                            console.log("Upload is paused");
                            break;
                          case firebase.storage.TaskState.RUNNING: // or 'running'
                            console.log("Upload is running");
                            break;
                        }
                      },
                      function (error) {
                        // Handle unsuccessful uploads
                        reject(uploadTask);
                      },
                      async function () {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        await uploadTask.snapshot.ref
                          .getDownloadURL()
                          .then(async function (downloadURL) {
                            console.log("File available at", downloadURL);
                            newSong.cover_image = downloadURL;

                            // Generate a unique name for the video
                            let videoName = `video-${uuid()}`;
                            // Storage reference
                            let uploadRef = storage.ref(`videos/${videoName}`);
                            // Uplaod file
                            const uploadTask = uploadRef.put(values.video_file);

                            uploadTask.on(
                              "state_changed",
                              function (snapshot) {
                                // Observe state change events such as progress, pause, and resume
                                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                                var progress =
                                  (snapshot.bytesTransferred /
                                    snapshot.totalBytes) *
                                  100;
                                console.log("Upload is " + progress + "% done");
                                setVideoProgress(progress);
                                switch (snapshot.state) {
                                  case firebase.storage.TaskState.PAUSED: // or 'paused'
                                    console.log("Upload is paused");
                                    break;
                                  case firebase.storage.TaskState.RUNNING: // or 'running'
                                    console.log("Upload is running");
                                    break;
                                }
                              },
                              function (error) {
                                // Handle unsuccessful uploads
                                setSubmitting(false);
                              },
                              async function () {
                                // Handle successful uploads on complete
                                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                                await uploadTask.snapshot.ref
                                  .getDownloadURL()
                                  .then(async function (downloadURL) {
                                    console.log(
                                      "File available at",
                                      downloadURL
                                    );
                                    newSong.video_url = downloadURL;
                                    await Axios.post(
                                      `${process.env.REACT_APP_SERVER_URL}/api/songs/add`,
                                      {
                                        artist_name: values.artist_name,
                                        song_name: values.song_name,
                                        lyrics: values.lyrics,
                                        ratings_number: values.ratings_number,
                                        rating: values.rating,
                                        ...newSong,
                                      },
                                      {
                                        headers: {
                                          "auth-token": token,
                                        },
                                      }
                                    )
                                      .then((res) => {
                                        let parsedSong = {
                                          id: res.data._id,
                                          artistName: res.data.artist_name,
                                          coverImage: res.data.cover_image,
                                          videoUrl: res.data.video_url,
                                          songName: res.data.song_name,
                                          ratingsNumber:
                                            res.data.ratings_number,
                                          rating: res.data.rating,
                                          lyrics: res.data.lyrics,
                                        };
                                        setSongs([parsedSong, ...songs]);
                                        resolve(uploadTask);
                                        setSubmitting(false);
                                        history.push("/songs-list");
                                      })
                                      .catch((err) => {
                                        setFieldError("general", err);
                                        console.error(err);
                                        setSubmitting(false);
                                      });
                                  });
                              }
                            );
                          });
                      }
                    );
                  });
                } catch (error) {
                  console.error(error);
                }
                setSubmitting(false);
              };
              submit();
            }}
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              isValid,
              setFieldValue,
            }) => (
              <form
                onSubmit={handleSubmit}
                noValidate
                encType="multipart/form-data"
              >
                <TextField
                  type="text"
                  name="song_name"
                  value={values.song_name}
                  placeholder="Song name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Song name"
                  error={touched.song_name && errors.song_name ? true : false}
                  variant="filled"
                  helperText={
                    touched.song_name && errors.song_name ? (
                      <ErrorMessage name="song_name" />
                    ) : null
                  }
                />

                <TextField
                  type="text"
                  name="artist_name"
                  value={values.artist_name}
                  placeholder="Artist name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Artist name"
                  error={
                    touched.artist_name && errors.artist_name ? true : false
                  }
                  variant="filled"
                  helperText={
                    touched.artist_name && errors.artist_name ? (
                      <ErrorMessage name="artist_name" />
                    ) : null
                  }
                />

                <TextField
                  type="text"
                  name="lyrics"
                  value={values.lyrics}
                  placeholder="Lyrics"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Lyrics"
                  error={touched.lyrics && errors.lyrics ? true : false}
                  variant="filled"
                  multiline
                  rows={6}
                  helperText={
                    touched.lyrics && errors.lyrics ? (
                      <ErrorMessage name="lyrics" />
                    ) : null
                  }
                />

                <input
                  accept="image/*"
                  id="contained-button-cover"
                  type="file"
                  style={{ display: "none" }}
                  name="cover_file"
                  values={values.cover_file}
                  onChange={(event) => {
                    setFieldValue("cover_file", event.currentTarget.files[0]);
                  }}
                />
                <label htmlFor="contained-button-cover">
                  <Button
                    color="primary"
                    component="span"
                    startIcon={<CoverIconSvg />}
                    className="file-input"
                  >
                    Choose cover image
                  </Button>
                </label>

                <input
                  accept="video/mp4,video/x-m4v,video/*"
                  id="contained-button-video"
                  type="file"
                  style={{ display: "none" }}
                  name="video_file"
                  values={values.video_file}
                  onChange={(event) => {
                    setFieldValue("video_file", event.currentTarget.files[0]);
                  }}
                />

                <label htmlFor="contained-button-video">
                  <Button
                    color="primary"
                    component="span"
                    startIcon={<VideoIconSvg />}
                    className="file-input"
                  >
                    Choose video
                  </Button>
                </label>

                {touched.general && errors.general ? (
                  <ErrorMessage name="general" />
                ) : null}

                <div className="form-controlers">
                  <div className="upload-progress">
                    <Typography variant="body1">
                      {videoProgress > 0 && `${videoProgress.toFixed(0)}%`}
                    </Typography>
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting || !isValid}
                  >
                    {!isSubmitting ? "Add song" : "Uploading, please wait"}
                    {isSubmitting && (
                      <CircularProgress
                        style={{ marginInlineStart: "16px" }}
                        size={20}
                        variant="static"
                        value={videoProgress}
                      />
                    )}
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Styled.SongAdder>
    </Container>
  );
};

export default SongAdder;
