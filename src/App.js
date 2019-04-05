import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"; // As Router permet de simplifier l'écriture
import Discover from "./components/Discover";
import Popular from "./components/Popular";
import MyList from "./components/MyList";
import "./bootstrap.min.css";
import "./App.css";
import pop2 from "./pop2.png"

class App extends React.Component {

  render() {
    return(
      <Router>
        <div className="global-heigh">
        <h1 className="logo-mooviz">Mooviz</h1>
          <div className="colored"></div>
          {/* <i class="fas fa-film logo"></i> */}
          <nav>
            <ul className="nav justify-content-center">
              <li className="nav-item"><Link className="nav-link active" to="/">Discover</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/popular/">Movie Battle</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/my-list">My list <i className="far fa-heart"></i></Link></li>
            </ul>
          </nav>
          <Route path="/" exact component={Discover}/>
          <Route path="/popular/" component={Popular}/>
          <Route path="/my-list/" component={MyList}/>
        </div>
        <img src={`${pop2}`} className="img-float2" alt="pop"/>
        <div className="colored-bottom"></div>
      </Router>
    );
  }
}

export default App;
