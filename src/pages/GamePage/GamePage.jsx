import { useSelector } from 'react-redux';

import GamePageWrapper from './views/GamePageWrapper';

const GamePage = () => {
  const { questionList, step } = useSelector((state) => state);

  const { problem, answers } = questionList[step];

  return (
    <GamePageWrapper>
      <span>{problem}</span>
      <ul>
        {answers.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{item.item}</li>
        ))}
      </ul>
    </GamePageWrapper>
  );
};
export default GamePage;
