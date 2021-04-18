import React from "react";
import styled from "styled-components";
const Container = styled.div`
  text-align: -webkit-center;
  margin-top: 80px;
`;
const Title = styled.div`
  font-size:20px;
`;

const Allergy = styled.div`
  margin:20px 0 0 20px;
  text-align: left;
  vertical-align:center;
`;
const Item = styled.div`
display:flex;
align-items:center;

`
const CheckBox = styled.input`
  margin-top:20px;
`;
const FoodImg = styled.img`
   width:100px;
   height:100px;
`;

function SAPresenter ({ AllergyList }) {
    return (
        <>
            <Container>
                <Title>Select from <br></br>21 Food Allergy Trigger</Title>
                <Allergy>
                    {
                        AllergyList.map((el, idx) => {
                            return (
                                <Item key={idx}>
                                    <CheckBox type="checkbox" />&nbsp;<FoodImg src={el.image} alt="FoodImg" />&nbsp;{el.name}
                                </Item>
                            )
                        })
                    }
                </Allergy>

            </Container>
        </>
    );
}

export default SAPresenter;
