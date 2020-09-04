import * as Yup from "yup";

const vSchema = Yup.object().shape({
  artist_name: Yup.string()
    .required("Artist name is required")
    // .matches(
    //   /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/,
    //   'Please enter your real name.'
    // )
    .min(2, "Artist name is too short.")
    .max(80, "Artist name is too long."),
  song_name: Yup.string()
    .required("Song name is required")
    // .matches(
    //   /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/,
    //   'Please enter your real name.'
    // )
    .min(2, "Song name is too short.")
    .max(80, "Song name is too long."),

  lyrics: Yup.string()
    .required("Lyrics field is required")
    // .matches(
    //   /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/,
    //   'Please enter your real name.'
    // )
    .min(100, "Lyrics field is too short.")
    .max(10000, "Lyrics field is too long."),
});

export default vSchema;
