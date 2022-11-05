import React from "react"
import PropTypes from "prop-types"

import styled, { css } from "styled-components"

import Slider from "react-slick"

import FeatherIcon from "../feather-icon"

const CarouselContainer = styled.div`
  ${(props) =>
    !props.fullWidth &&
    css`
      max-width: 1200px;
      margin: 64px auto;
      padding: 0 48px;
    `}
`

const ArrowContainer = styled.div`
  width: auto;
  color: black;
  transition: 0.3s ease;
  z-index: 10;
  &:hover {
    color: #01875f;
  }
  &::before {
    content: "";
  }
`

const CustomSlider = styled(Slider)`
  display: block;
  .slick-dots li.slick-active button:before {
    color: #01875f;
    font-size: 16px;
    opacity: 1;
  }
  .slick-dots li button:before {
    color: gray;
    font-size: 16px;
    opacity: 1;
  }
`

const Carousel = ({ children, fullWidth, ...rest }) => {
  const settings = {
    centerMode: true,
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <CarouselContainer fullWidth={fullWidth}>
      <CustomSlider
        {...settings}
        nextArrow={
          <ArrowContainer>
            <FeatherIcon color={"black"} size={48} name="chevron-right" />
          </ArrowContainer>
        }
        prevArrow={
          <ArrowContainer>
            <FeatherIcon color={"black"} size={48} name="chevron-left" />
          </ArrowContainer>
        }
      >
        {children}
      </CustomSlider>
    </CarouselContainer>
  )
}

Carousel.propTypes = {
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
}

export default Carousel
