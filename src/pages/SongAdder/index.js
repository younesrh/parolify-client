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

const SongAdder = () => {
  const history = useHistory();
  const { token } = useContext(AuthContext);
  const { songs, setSongs } = useContext(DataContext);
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
            // validationSchema={vSchema}
            validateOnMount={true}
            initialValues={{
              artist_name: "",
              song_name: "",
              lyrics: "",
              cover_file: null,
              video_file: null,
              ratings_number: Math.floor(Math.random() * 10000),
              rating: 4.8,
            }}
            onSubmit={async (values, { setSubmitting, setFieldError }) => {
              setSubmitting(true);

              let coverUrl = "";
              let videoUrl = "";

              try {
                // Upload cover
                const formData = new FormData();
                formData.append("coverFile", values.cover_file);

                await Axios.post(
                  `${process.env.REACT_APP_SERVER_URL}/api/songs/cover/upload`,
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  }
                )
                  .then(async (response) => {
                    coverUrl = (await "static/") + response.data.filename;
                  })
                  .then(async () => {
                    // Upload video
                    const formData2 = new FormData();
                    formData2.append("videoFile", values.video_file);

                    await Axios.post(
                      `${process.env.REACT_APP_SERVER_URL}/api/songs/video/upload`,
                      formData2,
                      {
                        headers: {
                          "Content-Type": "multipart/form-data",
                        },
                      }
                    )
                      .then(async (response) => {
                        videoUrl = (await "static/") + response.data.filename;
                      })
                      .then(async () => {
                        await Axios.post(
                          `${process.env.REACT_APP_SERVER_URL}/api/songs/add`,
                          {
                            artist_name: values.artist_name,
                            song_name: values.song_name,
                            lyrics: values.lyrics,
                            cover_image: coverUrl,
                            video_url: videoUrl,
                            ratings_number: values.ratings_number,
                            rating: values.rating,
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
                              ratingsNumber: res.data.ratings_number,
                              rating: res.data.rating,
                              lyrics: res.data.lyrics,
                            };
                            setSongs([parsedSong, ...songs]);
                            setSubmitting(false);
                            history.push("/songs-list");
                          })
                          .catch((err) => {
                            console.error(err);
                            setSubmitting(false);
                          });
                      })
                      .catch((err) => {
                        setSubmitting(false);
                        console.error(err);
                      });
                  })
                  .catch((err) => {
                    setSubmitting(false);
                    console.error(err);
                  });
              } catch (error) {
                console.error(error);
              }
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
                />
                {touched.song_name && errors.song_name ? (
                  <ErrorMessage name="song_name" />
                ) : null}

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
                />
                {touched.artist_name && errors.artist_name ? (
                  <ErrorMessage name="artist_name" />
                ) : null}

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
                />
                {touched.lyrics && errors.lyrics ? (
                  <ErrorMessage name="lyrics" />
                ) : null}

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

                {touched.video_url && errors.video_url ? (
                  <ErrorMessage name="video_url" />
                ) : null}

                <div className="form-controlers">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting || !isValid}
                  >
                    {isSubmitting ? "Add song" : "Uploading, please wait"}
                    {isSubmitting && (
                      <CircularProgress
                        style={{ marginInlineStart: "16px" }}
                        size={20}
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
