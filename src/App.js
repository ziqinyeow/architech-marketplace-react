import styled from "styled-components";

//Fonts
import "./font/FontsFree-Net-NewYork.ttf";
import "./font/FontsFree-Net-NewYorkExtraLargeRegular.ttf";
import "./font/sf-ui-display-bold-58646a511e3d9.woff";
import "./font/sf-ui-display-light-58646b33e0551.woff";
import "./font/sf-ui-display-medium-58646be638f96.woff";
import "./font/sf-ui-display-semibold-58646eddcae92.woff";
import "./font/DancingScript-Regular.ttf";

//Pages

//Components
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";

function App() {
  return (
    <Container>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </Container>
  );
}

export default App;

const Container = styled.div`
  overflow-x: hidden;

  button,
  img {
    user-select: none;
  }

  button {
    transition: all 0.5s ease;
    :hover {
      background-color: #ff8a84;
    }
  }
`;
