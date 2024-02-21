// Style your elements here
import styled from 'styled-components'

export const Li = styled.li`
  margin: 5px;
  list-style: none;
  @media screen (max-width: 576px) {
    display: flex;
    flex-grow: 1;
  }
`

export const Button = styled.button`
  height: 40px;
  width: 120px;
  font-family: 'Roboto';
  font-size: small;
  font-weight: 500;
  color: #334155;
  border-radius: 7px;
  cursor: pointer;
  border-width: 0px;
  outline: none;
  background-color: #ffffff;
  opacity: ${props => (props.isActive ? 1 : 0.5)};

  @media screen (max-width: 576px) {
    display: flex;
    flex-grow: 1;
  }
`
