// Write your code here
import {Li, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {btnDetails, isActive, chnageDirection} = props
  const {directionId, displayText, value} = btnDetails

  const onClickDirectionBtn = () => {
    chnageDirection({directionId, value})
  }
  return (
    <Li>
      <Button type="button" isActive={isActive} onClick={onClickDirectionBtn}>
        {displayText}
      </Button>
    </Li>
  )
}

export default GradientDirectionItem
