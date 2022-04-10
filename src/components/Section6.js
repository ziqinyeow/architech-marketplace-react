import React from "react";
import styled from "styled-components";

//images
import image11 from "../image/image11.svg";
import image12 from "../image/image12.svg";
import image13 from "../image/image13.svg";
import image14 from "../image/image14.svg";
import image15 from "../image/image15.svg";

function Section6() {
  return (
    <Container>
      <InnerContainer>
        <h1>Our Partners</h1>
        <Partners>
          <img src={image11} alt="image11" />
          <img src={image12} alt="image12" />
          <img src={image13} alt="image13" />
          <img src={image14} alt="image14" />
          <img src={image15} alt="image15" />
        </Partners>
      </InnerContainer>
    </Container>
  );
}

export default Section6;

const Container = styled.div`
  margin: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 70%;
  h1 {
    font-family: "NYExtraLarge";
    font-size: 50px;
  }
`;

const Partners = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
