import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage/GamePage';
import ScorePage from './pages/ScorePage';

import ROUTES from './utils/routes';

const App = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.START} component={StartPage} />
      <Route path={ROUTES.GAME} component={GamePage} />
      <Route path={ROUTES.SCORE} component={ScorePage} />
    </Switch>
  </Router>
);

export default App;
