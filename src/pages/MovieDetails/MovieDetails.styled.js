import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsSection = styled.div`
  padding-bottom: 20px;
  display: flex;
  gap: 15px;
  border-bottom: 1px solid #c4c4c4;
`;

export const MovieImg = styled.img`
  max-width: 30vw;
`;

export const Title = styled.h1`
  font-size: 22px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
`;

export const BackLink = styled(Link)`
  padding-bottom: 8px;
  display: inline-block;
  /* cursor: pointer; */
`;
