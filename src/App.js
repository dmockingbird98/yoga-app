import Main from "./app/main";
import "./assets/scss/style.scss";
import {Redirect, Route,  BrowserRouter as Router, Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Main}/>
          <Route path="/home/requests" component={Main}/>
          <Route path="/home/service" component={Main}/>
          <Route path="/home/payment" component={Main}/>
          <Redirect exact from="/" to="/home"/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
