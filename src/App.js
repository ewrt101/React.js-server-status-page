import { Route, Switch } from 'react-router-dom';

import LaunchPage from './pages/LaunchPage';
import SystemStatsPage from './pages/SystemStatsPage';
import AboutPage from './pages/AboutPage';

import MainNavigation from './components/layout/MainNavigation';


function App() {
  return (
    <div>
      <MainNavigation />

      <Switch>
        <Route path='/' exact>
          <SystemStatsPage />
        </Route>
        <Route path='/launch'>
          <LaunchPage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
