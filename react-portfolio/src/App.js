import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Work from './components/MyWork';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <header>
        <h1>
          NRC
        </h1>
        <Router>
          <NavBar />
          <Route exact path="#about-me" component={About} />
        </Router>
      </header>
      <main>
        <Enter />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
