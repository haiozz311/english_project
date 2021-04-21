import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import UserRoute from './components/UserRoute/UserRoute';
import Home from './components/Section/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Header /> */}
        {/* <Section />  */}
        <UserRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
