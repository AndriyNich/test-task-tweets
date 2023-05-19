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

export const Tweets = styled.p`
  margin: 284px 0 0 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;

  color: #ebd8ff;
`;

export const Followers = styled.p`
  margin: 16px 0 0 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  color: #ebd8ff;
`;

export const Button = styled.button`
  display: block;
  margin: 26px auto 0 auto;
  width: 196px;
  height: 50px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  text-transform: uppercase;

  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
`;
