import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    textAlign: 'center',
  },
  imgBox: {
    maxWidth: "80%",
    maxHeight: "80%",
    margin: "10px"
  },
  img: {
    height: "inherit",
    maxWidth: "inherit",
  },
  input: {
    display: "none"
  }
}));


function App () {
  const classes = useStyles();

  const [source, setSource] = useState("");
  const [img, setImg] = useState("");
  const [result, setResult] = useState("");
  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        // let fReader = new FileReader();
        // fReader.readAsDataURL(target.files[0]);
        // fReader.onload = (event) => {
        //   //setSource(event.target.result);
        //   var data = (event.target.result).split(',')[1];
        //   var binaryBlob = atob(data);
        //   setSource(binaryBlob);
        //   //console.log('Encoded Binary File String:', binaryBlob);

        // };
        // console.log(target.files[0].name);
        const newUrl = URL.createObjectURL(file);
        setImg(newUrl);
        setSource(file);
      }
    }
  };

  const kakaoOCR = () => {
    let form = new FormData();
    //console.log(source);
    form.append("image", source);
    axios
      .post(`https://dapi.kakao.com/v2/vision/text/ocr`, form, {
        headers: {
          "Authorization": "KakaoAK e2e76efe2b926e912bf4d8ed8879f5f2",
          "Content-Type": "multipart/form-data",
        }
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setResult(response.data.result[0].recognition_words[0]);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <h5>Capture your image</h5>
          {source &&
            <Box display="flex" justifyContent="center" border={1} className={classes.imgBox}>
              <img src={img} alt={"snap"} className={classes.img}></img>
            </Box>}

          {
            source &&
            <button onClick={() => { kakaoOCR() }}>Detect</button>
          }

          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCameraRoundedIcon fontSize="large" color="primary" />
            </IconButton>
            {/* <div>{result}</div> */}
          </label>
        </Grid>
      </Grid>
    </div>
  );
}


export default App;