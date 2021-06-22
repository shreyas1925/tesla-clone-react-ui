import React from "react";
import styled from "styled-components";
// import "../index.css";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade top>
        <TextItem>
          <h1>{title}</h1>
          <p>{description}</p>
        </TextItem>
      </Fade>

      <ButtonWithArrow>
        <Fade top>
          <ButtonGroup>
            <LeftBtn>{leftBtnText}</LeftBtn>

            {rightBtnText && <RightBtn>{rightBtnText}</RightBtn>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </ButtonWithArrow>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`

  width: 100vw;
  height: 100vh;
  // background-color: blue;
  background-image: url("/images/model-s.jpg");
  background-image:${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  //after changing the direction 
  it works for vetical line




`;

const TextItem = styled.div`
  //   display: flex;
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftBtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  width: 256px;
  height: 40px;
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.8;
  text-transform: uppercase;
  cursor: pointer;
  margin: 8px;
`;

const RightBtn = styled(LeftBtn)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const ButtonWithArrow = styled.div``;
