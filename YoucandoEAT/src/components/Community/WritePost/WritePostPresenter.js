import React from "react";
import styled from "styled-components"

const WriteContainer = styled.div`
    margin-top:55px;

`

const InputTitleContainer = styled.div`
    display:flex;
    justify-content:center;
`

const InputTitle = styled.input`
    border:none;
    margin:0 1rem 0 1rem;
    padding:0.5rem;
    width:100%;
    font-size:1.4rem;
    border-bottom:solid 1px #adb5bd;

    &:focus{
        outline:none;
    }
`

const InputContentContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-top:1rem;
`

const InputContent = styled.textarea`
    border:none;
    margin:0 1rem 0 1rem;
    width:100%;
    height:100%;
    font-size:1.05rem;

    &:focus{
        outline:none;
    }
`

function WritePostPresenter() {
    return (
        <>
            <WriteContainer>
                <InputTitleContainer>
                    <InputTitle placeholder="Title"></InputTitle>
                </InputTitleContainer>

                <InputContentContainer>
                    <InputContent rows="30" placeholder="Enter the contents."></InputContent>
                </InputContentContainer>

            </WriteContainer>
        </>
    )
}

export default WritePostPresenter