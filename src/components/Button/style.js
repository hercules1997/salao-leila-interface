import styled from 'styled-components'

export const ComponentButton = styled.button`
  background-color: #704b34;
  height: 35px;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #9e775a;
  }

  &:active {
    opacity: 0.6;
  }
`;
