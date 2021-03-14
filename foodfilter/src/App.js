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
    height: "100%",
    width: "100%",
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

  function dataURItoBlob (dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }
  function getThumbFile (image, file) {
    var canvas = document.createElement("canvas");
    var base_size = 1024000; //1MB (썸네일 작업 유무 기준 사이즈)
    var comp_size = 102400;  //100KB (썸네일 작업 결과물 사이즈, 50~200KB 수준으로 압축됨)
    var width = image.width;
    var height = image.height;
    var size = file.size;

    if (size > base_size) {
      var ratio = Math.ceil(Math.sqrt((size / comp_size), 2));
      width = image.width / ratio;
      height = image.height / ratio;
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(image, 0, 0, width, height);
      var tmpThumbFile = dataURItoBlob(canvas.toDataURL("image/png")); //dataURLtoBlob 부분은 이전 포스팅 참조
      return tmpThumbFile;
    } else {
      return "";
    }
  }

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        let fReader = new FileReader();
        fReader.readAsDataURL(target.files[0]);
        fReader.onload = (e) => {
          var img = new Image;
          img.src = fReader.result;
          img.onload = function () {
            var thumbFile = getThumbFile(img, file);
            setSource(thumbFile);
          }
          img.onerror = function () {
            //에러가 나는 경우 처리를 할 수 있음
          };


        };
        // console.log(target.files[0].name);
        const newUrl = URL.createObjectURL(file);
        setImg(newUrl);
        //setSource(file);
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
          setResult(JSON.stringify(response.data.result));
        }
      })
      .catch((err) => {
        console.log(err.response);
        setResult(err.response.statusText);
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
            <div>{result}</div>
          </label>
        </Grid>
      </Grid>
    </div>
  );
}


export default App;