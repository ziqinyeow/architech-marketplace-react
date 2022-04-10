import React from "react";
import styled from "styled-components";

//image
import image5 from "../image/image5.svg";
import image6 from "../image/image6.svg";
import image7 from "../image/image7.svg";
import image8 from "../image/image8.svg";

function Section3() {
  return (
    <Container>
      <InnerContainer>
        <Header>
          <h1>Build your needs</h1>
          <h1>with Archmove</h1>
        </Header>
        <Main>
          <Img>
            <img src={image5} alt="image5" />
          </Img>
          <TextContainer>
            <Text>
              <img src={image6} alt="image6" />
              <Description>
                <h1>100% guaranteed project completion</h1>
                <p>
                  Build safe, comfortable and transparent with a project
                  management application with a joint account.
                </p>
              </Description>
            </Text>
            <Text>
              <img src={image7} alt="image7" />
              <Description>
                <h1>No additional fees</h1>
                <p>
                  There are no hidden costs. The value of the offer you get is
                  the value you paid.
                </p>
              </Description>
            </Text>
            <Text>
              <img src={image8} alt="image8" />
              <Description>
                <h1>Get escort from the Team</h1>
                <p>
                  Monitor reports from the Arsitag team who check directly in
                  the field.
                </p>
              </Description>
            </Text>
            <Buttons>
              <Button>Free Consultation</Button>
            </Buttons>
          </TextContainer>
        </Main>
      </InnerContainer>
    </Container>
  );
}

export default Section3;

const Container = styled.div`
  margin-bottom: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 70%;
`;

const Header = styled.div`
  margin: 50px 0;
  h1 {
    font-family: "NYExtraLarge";
    font-size: 50px;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px;

  @media screen and (max-width: 1290px) {
    grid-template-columns: 1fr;
  }
`;

const Img = styled.div`
  img {
    width: 100%;
  }
  @media screen and (max-width: 1290px) {
    img {
      width: 80%;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Text = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 30px;
  }
`;

const Description = styled.div`
  margin-left: 30px;
  h1 {
    font-family: "Bold";
    font-size: 27px;
  }
  p {
    font-family: "Light";
    font-size: 15px;
  }
`;

const Buttons = styled.div``;

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 2px;
  outline: none;
  padding: 15px 30px;
  background-color: #fd665e;
  color: white;
  font-family: "Medium";
  font-size: 16px;
`;
