import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TeamMatches from './components/TeamMatches'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="bg-cont">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches/:id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
