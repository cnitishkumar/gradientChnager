// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-image: ${props => props.gradientDetails};
`

export const AppHeading = styled.h1`
  font-family: 'Roboto';
  font-size: xx-large;
  text-align: center;
  color: #ffffff79;
`

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.fontSize ? `${props.fontSize}` : 'medium')};
  text-align: center;
  font-weight: 500;
  color: #ededed;
`

export const Ul = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const GradientContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Div = styled.div``

export const GradientInput = styled.input`
  height: 40px;
  width: 100px;
  border-width: 0px;
  outline: none;
  padding: 0px;
  margin: 5px;
  background-color: transparent;
`
export const GenerateButton = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: medium;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  border-width: 0px;
`
