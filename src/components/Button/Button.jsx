import PropTypes from 'prop-types';
import StyledButton from './views/StyledButton';

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.string,
};

Button.defaultProps = {
  children: '',
};

export default Button;
