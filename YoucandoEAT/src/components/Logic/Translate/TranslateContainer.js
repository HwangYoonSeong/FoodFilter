import React, { useState, useCallback } from "react";
import TranslatePresenter from "./TranslatePresenter";
import axios from "axios";
import ipObj from "../../../key";

function TranslateContainer ({ history }) {
    const [inputs, setInputs] = useState("");
    const onChangeInputs = useCallback(
        (e) => {
            console.log(e.target.value);
            setInputs(e.target.value)
        },
        [inputs]
    );
    return (
        <>
            <TranslatePresenter inputs={inputs} onChangeInputs={onChangeInputs} />
        </>
    );
}

export default React.memo(TranslateContainer);
