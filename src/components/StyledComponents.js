import styled from 'styled-components';

export const mobileThreshold = 800;
export const mobileThresholdPixels = `${mobileThreshold}px`;
export const smallMobileThresholdPixels = `${mobileThreshold / 2}px`;
export const smallDesktopThresholdPixels = '1300px';

export const colors = {
  white: '#FFFFFF',
  green: '#688F4E',
  purple: '#754E8F',
  whiteTransparency: 'rgba(255, 255, 255, 0.30)',
  blackTransparency: 'rgba(0, 0, 0, 0.40)',
  greenTransparency: 'rgba(104, 143, 78, 0.5)',
  purpleTranparency: 'rgba(117, 78, 143, 0.5)',
  transparent: 'rgba(255, 255, 255, 0)',
};

export const fontSizes = {
  xs: '1em',
  s: '1.5em',
  m: '2em',
  l: '3em',
  xl: '4em',
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
export const GlobalContainer = styled.div`
display: flex;
flex-direction: row;
height: 100vh;

@media (max-width: ${mobileThresholdPixels}) {
  display: flex;
  flex-direction: column;

}
`;

export const GreenContainer = styled.div`
display: flex;
flex-direction: column-reverse;
justify-content: space-between;
padding-top: 10vh;
padding-bottom: 5vh;
padding-right: 3em;
padding-left: 3em;
width: 50vw;

@media (max-width: ${mobileThresholdPixels}) {
  width: 100vw;
  padding-top: 3vh;
  padding-bottom: 0;
  padding-left: 1em;
  padding-right: 1em;
}
`;

export const A = styled.a`
  font-size: ${fontSizes.xs};
  text-decoration: none;
  color: ${colors.green};
  transition: .3s ease-in-out;

  &:hover,
  &:active {
    color: ${colors.purple};
  }

  
`;
