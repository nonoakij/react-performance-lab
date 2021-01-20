import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopPage from './pages/Top';
import Header from './components/Header';
import ManyPropsRequiredPage from './pages/ManyPropsRequired';
import FunctionalPage from './pages/Functional';
import MemoedFunctionalPage from './pages/MemoedFunctional';
import HeavyPage from './pages/Heavy';
import MemoedHeavyPage from './pages/MemoedHeavy';
import MemoedManyPropsRequiredPage from './pages/MemoedManyPropsRequired';

const App: React.FC = () => {
  const [volume, setVolume] = useState(1);
  return (
    <div className="App" style={{ padding: '8px' }}>
      <BrowserRouter>
        <header style={{ marginBottom: '16px' }}>
          <Header volume={volume} setVolume={setVolume} />
        </header>
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route exact path="/functional" component={() => <FunctionalPage volume={volume} />} />
          <Route exact path="/heavy" component={() => <HeavyPage volume={volume} />} />
          <Route exact path="/manyPropsRequired" component={() => <ManyPropsRequiredPage volume={volume} />} />
          <Route exact path="/memoed" component={() => <MemoedFunctionalPage volume={volume} />} />
          <Route exact path="/memoedHeavy" component={() => <MemoedHeavyPage volume={volume} />} />
          <Route exact path="/memoedManyPropsRequired" component={() => <MemoedManyPropsRequiredPage volume={volume} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
