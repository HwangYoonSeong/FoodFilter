import React, { useState, useCallback } from "react";
import WritePostPresenter from "./WritePostPresenter"
import axios from "axios";
import ipObj from "../../../key"

function WritePostContainer ({ history }) {
  const [image, setImage] = useState(null);
  const [inputs, setInputs] = useState({
    title: '',
    content: ''
  });

  const onChangeImage = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) files = e.dataTransfer.files;
    else if (e.target) files = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      setImage(reader.result)
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
    axios
      .post(`${ipObj.ip}/postInput`, { "inputs": inputs, "writerId": uid }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        history.goBack();
      })
      .catch((err) => {
        console.error(err.response);
      });


    console.log(image);
    console.log(inputs);
  }, [image, inputs]);

  return (
    <>
      <WritePostPresenter onChangeImage={onChangeImage} onClick={onClick} inputs={inputs} onChangeInputs={onChangeInputs} />
    </>
  );
}


export default React.memo(WritePostContainer);
