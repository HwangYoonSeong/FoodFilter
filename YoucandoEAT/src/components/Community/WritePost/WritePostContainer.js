import React, { useState } from "react";
import WritePostPresenter from "./WritePostPresenter"
import axios from "axios";
import ipObj from "../../../key"

function WritePostContainer ({ history, uid }) {
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

    const onChangeInputs = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onClick = () => {
        // uid, image, title, content
        // 서버로 보내기
        // console.log(image)

        axios
            .post(`${ipObj.ip}/postInput`, { "inputs": inputs, "uid": uid }, {
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

    }

    return (
        <>
            <WritePostPresenter onChangeImage={onChangeImage} onClick={onClick} inputs={inputs} onChangeInputs={onChangeInputs} />
        </>
    )
}

export default WritePostContainer