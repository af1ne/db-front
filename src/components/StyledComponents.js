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
  xs: '1rem',
  s: '1.5rem',
  m: '2rem',
  l: '3rem',
  xl: '4rem',
};

export const lineHeight = {
  xs: '2rem',
  s: '3rem',
  m: '4rem',
  l: '6rem',
  xl: '8rem',
};

const greenFont = "Aclonica";
const whiteFont = "Overlock";

export const Title1 = styled.h1`
  font-family: ${whiteFont};
  color: ${colors.white};
  text-align: right;
  font-size: ${fontSizes.s};

  @media (max-width: ${mobileThresholdPixels}) {
    font-size: ${fontSizes.xs};
    line-height: 1.5;
  }
`;

export const Title2 = styled.h2`
  font-family: ${greenFont};
  color: ${colors.green};
  text-align: right;
  font-size: ${fontSizes.xl};
  

  @media (max-width: ${mobileThresholdPixels}) {
    font-size: ${fontSizes.s};
    text-align: left;
  }
`;

export const Title3 = styled.h3`
  font-family: ${greenFont};
  color: ${colors.green};
  text-align: right;
  font-size: ${fontSizes.m};

  @media (max-width: ${mobileThresholdPixels}) {
    font-size: ${fontSizes.s};
    text-align: left;
  }
`;
export const Date = styled.p`
  font-family: ${whiteFont};
  color: ${props => props.white ? `${colors.white}` : `${colors.green}`};
  text-align: right;
  font-size: ${props => props.xs ? `${fontSizes.xs}` : `${fontSizes.s}`};
  text-transform: capitalize;

  @media (max-width: ${mobileThresholdPixels}) {
    font-size: ${fontSizes.xs};
    text-align: left;
    margin-bottom: 0;
  }
`;
export const Url = styled.p`
  font-family: ${greenFont};
  color: ${colors.green};
  text-align: right;
  font-size: ${fontSizes.xs};

  @media (max-width: ${mobileThresholdPixels}) {
    font-size: ${fontSizes.xs};
    text-align: left;
  }
`;

export const A = styled.a`
  font-size: ${fontSizes.xs};
  text-decoration: none;
  color: ${props => props.white ? `${colors.white}` : `${colors.green}`};
  transition: .3s ease-in-out;

  &:hover,
  &:active {
    color: ${colors.purple};
  } 
`;

export const P = styled.p`
  font-family: ${({ green }) => green ? `${greenFont}` : `${whiteFont}`};
  color: ${({ green }) => green ? `${colors.green}` : `${colors.white}`};
  font-size: ${fontSizes.s};
  line-height: ${props => props.xs ? `${lineHeight.xs}` : `${lineHeight.s}`}
  text-align: ${props => props.center ? 'center' : 'right'};

  @media (max-width: ${mobileThresholdPixels}) {
    font-size: ${fontSizes.xs};
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

export const ScrollingContainer = styled.div`
  overflow: scroll;
  width: inherit;
  height: inherit;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: ${colors.transparent}; 
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.greenTransparency}; 
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.green}; 
  }
  &::-webkit-scrollbar-corner {
    display: none;
  }
`;