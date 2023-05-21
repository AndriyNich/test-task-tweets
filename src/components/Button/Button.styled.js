import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  justify-content: center;

  padding: 16px 0;
`;

export const LoadMore = styled.button`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  border: 0;
  text-decoration: none;

  font-family: Montserrat;
  font-size: 18px;
  line-height: 1;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  height: 50px;

  background-color: #5736a3;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  cursor: pointer;

  transition: background-color 250ms linear, color 250ms linear;

  &:hover,
  &:focus {
    background-color: #ebd8ff;
    color: #373737;
  }
`;
