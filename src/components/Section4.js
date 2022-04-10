import React from "react";
import styled from "styled-components";

//icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

//image
import image9 from "../image/image9.svg";

//swiper
import useSwiperRef from "../hooks/useSwiperRef";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation, Pagination]);

function Section4() {
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();
  return (
    <Container>
      <InnerContainer>
        <Header>
          <h1>Sound Too Good</h1>
          <Segment>
            <h1>To Be True?</h1>
            <Buttons>
              <Button>
                <Left ref={prevElRef}></Left>
              </Button>
              <Button>
                <Right ref={nextElRef}></Right>
              </Button>
            </Buttons>
          </Segment>
        </Header>
        <Main>
          <ImgContainer>
            <Img>
              <img src={image9} alt="image9" />
            </Img>
            <Overlay1></Overlay1>
          </ImgContainer>
          <Carousel>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={{
                prevEl,
                nextEl,
              }}
            >
              <SwiperSlide>
                <Slide>
                  <Overlay2></Overlay2>
                  <SlideText>
                    <h1>
                      We just wanted to thank you for this fantastic website! We
                      are so grateful for being able to advertise our Petite
                      cabin and receive feedback from people from all over the
                      U.S. and even further.
                    </h1>
                    <p>
                      <span>Adam Morph</span> — CEO Alfatech
                    </p>
                  </SlideText>
                </Slide>
              </SwiperSlide>
              <SwiperSlide>
                <Slide>
                  <Overlay2></Overlay2>
                  <SlideText>
                    <h1>
                      We appreciate the 24/7 customer services and professional
                      advices supported by the entire technical team. Hoping to
                      collaborate soon in the future and have a coffee.
                    </h1>
                    <p>
                      <span>Jog Merphant</span> — CEO Alchi Niche
                    </p>
                  </SlideText>
                </Slide>
              </SwiperSlide>
            </Swiper>
          </Carousel>
        </Main>
      </InnerContainer>
    </Container>
  );
}

export default Section4;

const Container = styled.div`
  margin: 100px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 70%;
`;

const Header = styled.div`
  margin-bottom: 40px;
  h1 {
    font-family: "NYExtraLarge";
    font-size: 50px;
  }
`;

const Segment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const Button = styled.div`
  background-color: #f7f7f7;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled(ArrowBackIcon)`
  cursor: pointer;
  color: #473534;

  :hover {
    color: #fd665e;
  }
`;

const Right = styled(ArrowForwardIcon)`
  cursor: pointer;
  color: #473534;

  :hover {
    color: #fd665e;
  }
`;

const Main = styled.div``;

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const Img = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Overlay1 = styled.div``;

const Carousel = styled.div``;

const Slide = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
`;

const Overlay2 = styled.div``;

const SlideText = styled.div`
  h1 {
    margin-bottom: 30px;
    font-family: "Medium";
    line-height: 1.7;
  }
  p,
  span {
    font-family: "NYExtraLarge";
  }
  span {
    font-weight: 800;
  }
`;
