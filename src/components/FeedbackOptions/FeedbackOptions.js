import { FeedbackButton } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   return (
      <>
        {options.map((option, key) => (
          <FeedbackButton type="button" key={key} name={option} onClick={onLeaveFeedback}>{option}</FeedbackButton>
        ))}
      </>
      )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
options: PropTypes.array,
onLeaveFeedback: PropTypes.func
}