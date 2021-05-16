import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ROUTES from '../utils/routes';

import { getQuestions } from '../store/actions';

import Button from '../components/Button/Button';

const StartPage = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(({ step }) => step);

  const handleClick = () => {
    dispatch(getQuestions(currentStep));
  };

  return (
    <Link to={ROUTES.GAME}>
      <Button onClick={handleClick}>Start</Button>
    </Link>
  );
};
export default StartPage;
