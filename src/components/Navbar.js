import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";


function Navbar() {
  return (
    <Container>
      <InnerContainer>
        <Logo>Arch Home</Logo>
        <NavLinks>
          <Link>Design Gallery</Link>
          <Link>List of Architect</Link>
          <Link>Articles</Link>
          <Link>How it Works</Link>
        </NavLinks>
        <Buttons>
          <Search>
            <SearchIcon />
          </Search>
          <Signin>Sign In</Signin>
          <Login>Sign Up</Login>
        </Buttons>
      </InnerContainer>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  width: 100vw;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #585858;
`;

const InnerContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-family: "Hand";
  font-size: 30px;
  font-weight: 800;
  color: #fd665e;
`;

const NavLinks = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    width: 60%;
  }
  @media screen and (max-width: 784px) {
    width: 70%;
  }
`;

const Link = styled.div`
  font-family: "Light";
  cursor: pointer;
`;

const Buttons = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1230px) {
    width: 30%;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-family: "Medium";
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Signin = styled(Button)``;

const Login = styled(Button)`
  background-color: #fd665e;
  color: white;
`;
