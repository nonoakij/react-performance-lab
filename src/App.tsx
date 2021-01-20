import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { VolumeProvider } from './providers/Volume';
import TopPage from './pages/Top';
import Header from './components/Header';
import manyPropsRequiredPage from './pages/ManyPropsRequired';
import functionalPage from './pages/Functional';
import memoedFunctionalPage from './pages/MemoedFunctional';
import heavyPage from './pages/Heavy';
import memoedHeavyPage from './pages/MemoedHeavy';
import memoedManyPropsRequiredPage from './pages/MemoedManyPropsRequired';

const App: React.FC = () => (
  <VolumeProvider>
    <div className="App" style={{ padding: '8px' }}>
      <BrowserRouter>
        <header style={{ marginBottom: '16px' }}>
          <Header />
        </header>
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route exact path="/functional" component={functionalPage} />
          <Route exact path="/heavy" component={heavyPage} />
          <Route exact path="/manyPropsRequired" component={manyPropsRequiredPage} />
          <Route exact path="/memoed" component={memoedFunctionalPage} />
          <Route exact path="/memoedHeavy" component={memoedHeavyPage} />
          <Route exact path="/memoedManyPropsRequired" component={memoedManyPropsRequiredPage} />
        </Switch>
      </BrowserRouter>
    </div>
  </VolumeProvider>
);

export default App;
