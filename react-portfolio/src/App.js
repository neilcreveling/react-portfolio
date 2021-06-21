import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Work from './components/Work';
import Home from './components/Home';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <body>
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
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
    </body>
  );
}

export default App;
