import { NotificationSection, Title } from "./Notification.styled";
import PropTypes from 'prop-types';


const Notification = ({message}) => {
 return  <NotificationSection>
   <Title>{message}</Title>
 </NotificationSection>
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}