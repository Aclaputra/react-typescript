import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import Navbar from './Pages/Navbar';
import User from './Pages/user/User';
import Adduser from './Pages/user/Adduser';
import Edit from './Pages/user/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users/:id" exact component={User} />
          <Route path="/add-user" exact component={Adduser} />
          <Route path="/edit-user/:id" exact component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
