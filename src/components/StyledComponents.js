import styled from 'styled-components';

export const mobileThreshold = 800;
export const mobileThresholdPixels = `${mobileThreshold}px`;
export const smallMobileThresholdPixels = `${mobileThreshold / 2}px`;
export const smallDesktopThresholdPixels = '1300px';

export const colors = {
  white: '#FFFFFF',
  green: '#688F4E',
  whiteTransparent: 'rgba(255, 255, 255, 0.10)',
};

export const fontSizes = {
  xs: '1em',
  s: '2em',
  m: '3em',
  l: '4em',
  xl: '6em',
};

export const Title1 = styled.h1`
  font-family: 'Overlock';
  color: ${colors.white};
  text-align: right;
  font-size: ${fontSizes.s};

  @media (max-width: ${mobileThresholdPixels}) {
    font-size: ${fontSizes.xs};
    line-height: 1.5;
  }
`;

export const Title2 = styled.h2`
  font-family: 'Aclonica';
  color: ${colors.green};
  text-align: right;
  font-size: ${fontSizes.xl};


  @media (max-width: ${mobileThresholdPixels}) {
    font-size: ${fontSizes.s};
    text-align: left;
  }
`;