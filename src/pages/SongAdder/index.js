import React, { useContext } from "react";
import {
  Typography,
  Container,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  CircularProgress,
} from "@material-ui/core";
import { Styled } from "./style";
import { Formik, ErrorMessage } from "formik";
import Axios from "axios";
import { AuthContext } from "../../context/auth-context";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../context/data-context";

const SongAdder = () => {
  const history = useHistory();
  const { token } = useContext(AuthContext);
  const { songs, setSongs } = useContext(DataContext);
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
              cover_image: "",
              video_url: "",
              ratings_number: Math.floor(Math.random() * 10000),
              rating: 4.8,
            }}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              setSubmitting(true);

              Axios.post(
                "http://localhost:3001/api/songs/add",
                {
                  artist_name: values.artist_name,
                  song_name: values.song_name,
                  lyrics: values.lyrics,
                  cover_image: values.cover_image,
                  video_url: values.video_url,
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
            }) => (
              <form onSubmit={handleSubmit} noValidate>
                <TextField
                  type="text"
                  name="song_name"
                  value={values.song_name}
                  placeholder="Song name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Song name"
                  error={touched.song_name && errors.song_name ? true : false}
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
                />
                {touched.lyrics && errors.lyrics ? (
                  <ErrorMessage name="lyrics" />
                ) : null}

                <TextField
                  type="text"
                  name="video_url"
                  value={values.video_url}
                  placeholder="Enter video url (youtube)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Video Url"
                  error={touched.video_url && errors.video_url ? true : false}
                />
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
                    Add song
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
