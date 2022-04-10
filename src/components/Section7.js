import React from "react";
import styled from "styled-components";

function Section7() {
  return (
    <Container>
      <InnerContainer>
        <Links>
          <Link>About Us</Link>
          <Link>How it Works</Link>
          <Link>FAQ</Link>
          <Link>Contact Us</Link>
          <Link>Privacy Policy</Link>
        </Links>
        <Logo>
          <h1>Arch Home</h1>
        </Logo>
      </InnerContainer>
    </Container>
  );
}

export default Section7;

const Container = styled.div`
  margin: 200px 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Links = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled.div`
  font-family: "Medium";
  font-size: 18px;
  cursor: pointer;
`;

const Logo = styled.div`
  h1 {
    font-family: "Hand";
    font-size: 30px;
    font-weight: 800;
    color: #fd665e;
  }
`;
