import styled from 'styled-components';
import imgSrc from './images/follow.jpg';

export const Card = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background-image: url(${imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  overflow: hidden;
`;

export const Avatar = styled.img`
  position: absolute;
  left: 159px;
  top: 187px;
  border-radius: 50%;
`;
