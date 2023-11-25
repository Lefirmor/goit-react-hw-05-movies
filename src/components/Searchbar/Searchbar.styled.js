import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 48px;
  border: 1px solid #c4c4c4;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  cursor: pointer;
  

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 200px;
  height: 44px;
  font: inherit;
  font-size: 20px;
  border: 1px solid #c4c4c4;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
