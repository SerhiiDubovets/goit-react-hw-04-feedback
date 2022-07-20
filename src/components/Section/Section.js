import { FeedbackSection, Title, BoxButton } from "./Section.styled"
import PropTypes from 'prop-types';


const Section = ({title, children}) => {
   return <FeedbackSection>
            <Title>{title}</Title>
            <BoxButton>{children}</BoxButton>
          </FeedbackSection>
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}