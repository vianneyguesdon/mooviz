import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"; // As Router permet de simplifier l'écriture
import Discover from "./components/Discover";
import Popular from "./components/Popular";
import MyList from "./components/MyList";
import "./bootstrap.min.css";
import "./App.css";

class App extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <nav>
            <ul className="nav justify-content-center">
              <li className="nav-item"><Link className="nav-link active" to="/">Discover</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/popular/">Popular</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/my-list">My list</Link></li>
            </ul>
          </nav>
          <Route path="/" exact component={Discover}/>
          <Route path="/popular/" component={Popular}/>
          <Route path="/my-list/" component={MyList}/>
        </div>
      </Router>
    );
  }
}

export default App;
