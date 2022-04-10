import React from "react";
import styled from "styled-components";

//image
import image1 from "../image/image1.svg";

function Section1() {
  return (
    <Container>
      <InnerContainer>
        <Header>
          <h1>Build Your</h1>
          <h1>
            Dream <span>House</span>
          </h1>
        </Header>
        <ImageContainer>
          <TextContainer>
            <Text>
              The first and most trusted marketplace of design & build house in
              The World. 100% guaranteed build safe, comfortable and transparent
              with a project management for the best result.
            </Text>
            <Button>Free Consultation</Button>
          </TextContainer>
          <Img>
            <img src={image1} alt="image1" />
          </Img>
        </ImageContainer>
      </InnerContainer>
    </Container>
  );
}

export default Section1;

const Container = styled.div`
  margin-bottom: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin: 50px 0;
  h1,
  span {
    font-family: "NYExtraLarge";
    font-size: 80px;
    letter-spacing: 2px;
  }

  span {
    color: #fd665e;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;

  @media screen and (max-width: 1053px) {
    grid-template-columns: 1fr;
  }
`;

const TextContainer = styled.div``;

const Text = styled.div`
  font-family: "Light";
  font-size: 20px;
`;

const Button = styled.button`
  margin: 50px 0;
  padding: 15px 25px;
  border: none;
  border-radius: 3px;
  outline: none;
  background-color: #fd665e;
  color: white;
  font-family: "Medium";
  font-size: 16px;

  cursor: pointer;
`;

const Img = styled.div`
  img {
    width: 100%;
    user-select: none;
  }
`;
