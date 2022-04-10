import React from "react";
import styled from "styled-components";

//icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

//image
import image2 from "../image/image2.svg";
import image3 from "../image/image3.svg";
import image4 from "../image/image4.svg";

//swiper
import useSwiperRef from "../hooks/useSwiperRef";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation, Pagination, A11y]);

function Section2() {
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  return (
    <Container>
      <InnerContainer>
        <Header>
          <Overlay></Overlay>
          <Title>
            <h1>Build professional</h1>
            <h1>valuable room for you</h1>
            <Button>
              <Left ref={prevElRef}></Left>
              <Right ref={nextElRef}></Right>
            </Button>
          </Title>
        </Header>
        <Carousel>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation={{
              prevEl,
              nextEl,
            }}
          >
            <SwiperSlide>
              <Slide>
                <img src={image2} alt="" />
              </Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide>
                <img src={image3} alt="" />
              </Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide>
                <img src={image4} alt="" />
              </Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide>
                <img
                  src="https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=220&w=200"
                  alt=""
                />
              </Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide>
                <img
                  src="https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=230&w=200"
                  alt=""
                />
              </Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide>
                <img
                  src="https://images.unsplash.com/photo-1558697698-9300a84a6a99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt=""
                />
              </Slide>
            </SwiperSlide>
          </Swiper>
        </Carousel>
      </InnerContainer>
    </Container>
  );
}

export default Section2;

const Container = styled.div`
  margin: 100px 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 70%;
`;

const Header = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;

  h1 {
    font-family: "NYExtraLarge";
    font-size: 40px;
  }

  @media screen and (max-width: 1053px) {
    grid-template-columns: 1fr;
  }
`;
const Overlay = styled.div``;

const Title = styled.div`
  position: relative;
`;

const Button = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled(ArrowBackIcon)`
  cursor: pointer;
  color: #473534;

  :hover {
    background-color: #f7f7f7;
  }
`;

const Right = styled(ArrowForwardIcon)`
  cursor: pointer;
  color: #fd665e;

  :hover {
    background-color: #f7f7f7;
  }
`;

const Carousel = styled.div`
  .swiper-wrapper {
    padding-inline-start: 0;
    padding-inline-end: 0;
  }
`;

const Slide = styled.div`
  height: 50vh;
  width: 100%;
`;
