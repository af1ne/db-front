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
  greenTransparency: 'rgba(104, 143, 78, 0.5)',
  purpleTranparency: 'rgba(117, 78, 143, 0.5)',
  transparent: 'rgba(255, 255, 255, 0)',
};

export const fontSizes = {
  xs: '0.9em',
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
  font-size: ${fontSizes.l};


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