import React, { useState, useCallback } from "react";
import WritePostPresenter from "./WritePostPresenter"
import axios from "axios";
import { useSelector } from "react-redux";
import ipObj from "../../../key"

function WritePostContainer ({ history }) {
  const uid = useSelector((state) => state.uid);
  const [image, setImage] = useState(null);
  const [inputImg, setInputImg] = useState({});

  const [inputs, setInputs] = useState({
    title: '',
    content: ''
  });

  const onChangeImage = (e) => {
    e.preventDefault();
    let files;
    // if (e.dataTransfer) files = e.dataTransfer.files;
    // else if (e.target) files = e.target.files;
    if (e.target) files = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    setImage(files[0]);
    reader.onload = () => {
      setInputImg({ "fileName": files[0].name, "url": reader.result });
    }
  }

  const onChangeInputs = useCallback(
    (e) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );


  const onClick = useCallback(() => {
    // uid, image, title, content
    // 서버로 보내기
    var form = new FormData();
    form.append("title", inputs.title);
    form.append("content", inputs.content);
    form.append("uid", uid);
    form.append("postImg", image);

    axios
      .post(`${ipObj.ip}/postInput`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("url:", "POST /postInput", "\nstatus:", response.status, "\nstatusText:", response.statusText);
        history.goBack();
      })
      .catch((err) => {
        console.error(err.response);
      });
  }, [image, inputs, history, uid]);

  return (
    <>
      <WritePostPresenter inputImg={inputImg} onChangeImage={onChangeImage} onClick={onClick} inputs={inputs} onChangeInputs={onChangeInputs} />
    </>
  );
}


export default React.memo(WritePostContainer);
