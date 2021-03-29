import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopPage from './pages/Top'
import Header from './components/Header'
import FunctionalPage from './pages/Functional'
import MemoedFunctionalPage from './pages/MemoedFunctional'
import HeavyPage from './pages/Heavy'
import MemoedHeavyPage from './pages/MemoedHeavy'
import ManyPropsRequiredPage from './pages/ManyPropsRequired'
import MemoedManyPropsRequiredPage from './pages/MemoedManyPropsRequired'
import ManyChildren from './pages/ManyChildren'
import MemoedManyChildren from './pages/MemoedManyChildren'
import DeepCompare from './pages/DeepCompare'
import MemoedDeepCompare from './pages/MemoedDeepCompare'
import UpdateEveryTime from './pages/UpdateEveryTime'
import MemoedUpdateEveryTime from './pages/MemoedEveryTimeUpdate'

const App: React.FC = () => {
  const [volume, setVolume] = useState(1)
  return (
    <div className="App" style={{ padding: '8px' }}>
      <BrowserRouter>
        <header style={{ marginBottom: '16px' }}>
          <Header volume={volume} setVolume={setVolume} />
        </header>
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route
            exact
            path="/functional"
            component={() => <FunctionalPage volume={volume} />}
          />
          <Route
            exact
            path="/memoed"
            component={() => <MemoedFunctionalPage volume={volume} />}
          />
          <Route
            exact
            path="/updateEveryTime"
            component={() => <UpdateEveryTime volume={volume} />}
          />
          <Route
            exact
            path="/memoedUpdateEveryTime"
            component={() => <MemoedUpdateEveryTime volume={volume} />}
          />
          <Route
            exact
            path="/heavy"
            component={() => <HeavyPage volume={volume} />}
          />
          <Route
            exact
            path="/memoedHeavy"
            component={() => <MemoedHeavyPage volume={volume} />}
          />
          <Route
            exact
            path="/manyPropsRequired"
            component={() => <ManyPropsRequiredPage volume={volume} />}
          />
          <Route
            exact
            path="/memoedManyPropsRequired"
            component={() => <MemoedManyPropsRequiredPage volume={volume} />}
          />
          <Route
            exact
            path="/manyChildren"
            component={() => <ManyChildren volume={volume} />}
          />
          <Route
            exact
            path="/memoedManyChildren"
            component={() => <MemoedManyChildren volume={volume} />}
          />
          <Route
            exact
            path="/deepCompare"
            component={() => <DeepCompare volume={volume} />}
          />
          <Route
            exact
            path="/memoedDeepCompare"
            component={() => <MemoedDeepCompare volume={volume} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
