import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

const SponsorBanner = ({ sponsors, header, headerStyle, isSliding }) => {
  return (
    <BannerContainer slide={isSliding}>
      <h2 style={{ ...headerStyle }}>{header}</h2>

      <div className="rotating-content">
        {sponsors.map((sponsor, index) => {
          return (
            <img
              onClick={() => window.open(sponsor.link)}
              key={index}
              src={sponsor.logo}
              alt="Sponsor Banner Item"
            />
          );
        })}
      </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  h2 {
    margin: 0 0 25px 0;
  }

  .rotating-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: -moz-scrollbars-horizontal;
    margin: 10px 0;

    ${props =>
      props.slide &&
      css`
        animation: ${slideLeftAnimation} 60s linear infinite;
      `}

    ${props =>
      !props.slide &&
      css`
        animation: none;
        flex-wrap: wrap;
        overflow: auto;

        img {
          margin-bottom: 40px;
          margin-right: 0;
        }
      `}

    img {
      transform: translate3d(0, 0, 0);
      height: auto;
      width: 180px;
      margin-right: 40px;
      align-self: center;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-device-height: 850px) {
    h2 {
      margin: 0 0 25px 0;
    }
  }
`;

const slideLeftAnimation = keyframes`  
  0% {
      transform: translateX(10%);   
  }
  
    100% {
      transform: translateX(-10%);   
  }
`;
