import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

const SponsorBanner = ({ sponsors }) => {
  const slide = true;
  return (
    <BannerContainer slide={slide}>
      {sponsors.map((sponsor, index) => {
        return <img key={index} src={sponsor.logo} alt="Sponsor Banner Item" />;
      })}
    </BannerContainer>
  );
};

SponsorBanner.propTypes = {
  sponsors: PropTypes.array,
    logo: PropTypes.string,
    map: PropTypes.shape({
      sponsor: PropTypes.shape({
        logo: PropTypes.string,
      }),
    }),
};

export default SponsorBanner;

const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: no-content;
  margin: 10px 0;

  ${props =>
    props.slide &&
    css`
      animation: ${slideLeftAnimation} 60s linear infinite;
    `}

  img {
    transform: translate3d(0, 0, 0);
    height: auto;
    width: 180px;
    max-height: 125px;
    margin-right: 20px;
    align-self: center;
  }
`;

const slideLeftAnimation = keyframes`  
  0% {
      transform: translateX(105%);   
  }
  
    100% {
      transform: translateX(-200%);   
  }
  `;

// const slideRightAnimation = keyframes`
//   0% {
//       transform: translateY(100%);
//   }
//
//     100% {
//       transform: translateY(-100%);
//   }
//   `;
