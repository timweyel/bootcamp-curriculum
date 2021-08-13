import { Switch, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import { Home } from './components/Home';
import { About } from './components/About';
import FriendsComponent from './components/Friends';
import Friend from './components/Friend';

function App() {
  return (
    <Drawer>
      <Switch>
        <Route path='/friends/:friendId' component={Friend}/>
        <Route path='/friends' component={FriendsComponent}/>
        <Route path='/about' component={About}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Drawer>
  )
}
export default App;