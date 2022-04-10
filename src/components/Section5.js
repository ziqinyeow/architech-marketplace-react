import React from "react";
import styled from "styled-components";

//image
import image10 from "../image/image10.svg";

function Section5() {
  return (
    <Container>
      <InnerContainer>
        <Img>
          <img src={image10} alt="image10" />
        </Img>
        <Title>
          <h1>
            Realize your dream project with <span>Archmove</span>
          </h1>
          <ButtonContainer>
            <Button>Free Consultation</Button>
          </ButtonContainer>
        </Title>
      </InnerContainer>
    </Container>
  );
}

export default Section5;

const Container = styled.div`
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;

const Img = styled.div``;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1,
  span {
    font-family: "NYExtraLarge";
    font-size: 50px;
  }

  span {
    color: #fd665e;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 55px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  background-color: #fd665e;
  color: white;
  font-family: "Medium";
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
`;
