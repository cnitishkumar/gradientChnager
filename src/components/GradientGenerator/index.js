import {Component} from 'react'
import {
  AppContainer,
  AppHeading,
  Para,
  Ul,
  GradientContainer,
  Div,
  GradientInput,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].directionId,
    color1: '#8ae323',
    color2: '#014f7b',
    activeDirectionValue: gradientDirectionsList[0].value,
    gradientDetails: 'linear-gradient(to top, #8ae323 ,   #014f7b)',
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  chnageDirection = props => {
    const {directionId, value} = props

    this.setState({activeDirectionId: directionId, activeDirectionValue: value})
  }

  onClickGenerateBtn = () => {
    const {activeDirectionValue, color1, color2} = this.state

    this.setState({
      gradientDetails: `linear-gradient(to ${activeDirectionValue}, ${color1} , ${color2})`,
    })
  }

  render() {
    const {
      activeDirectionId,
      color1,
      color2,
      activeDirectonValue,
      gradientDetails,
    } = this.state
    console.log(gradientDetails)
    return (
      <AppContainer
        gradientDetails={gradientDetails}
        data-testid="gradientGenerator"
      >
        <AppHeading>Generate a CSS Color Gradient</AppHeading>
        <Para fontSize="x-large">Choose Direction</Para>
        <Ul>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              btnDetails={each}
              isActive={each.directionId === activeDirectionId}
              chnageDirection={this.chnageDirection}
            />
          ))}
        </Ul>
        <Para fontSize="x-large">Pick the Colors</Para>
        <GradientContainer>
          <Div>
            <Para>{color1}</Para>
            <GradientInput
              type="color"
              onChange={this.onChangeColor1}
              value={color1}
            />
          </Div>
          <Div>
            <Para>{color2}</Para>
            <GradientInput
              type="color"
              onChange={this.onChangeColor2}
              value={color2}
            />
          </Div>
        </GradientContainer>
        <GenerateButton type="button" onClick={this.onClickGenerateBtn}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
