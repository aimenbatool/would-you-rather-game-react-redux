import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';
import Leadboard from './Leadboard';
import NewQuestion from './NewQuestions';
import Question from './Question';
import QuestionResult from './QuestionResult';

function App() {
  return (
    <Router>
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <Navbar/>
            <Route path="/" exact component={Home} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/leadboard" component={Leadboard} />
            <Route path="/question/:id" component={Question} />
            <Route path="/result/:id" component={QuestionResult} />
            <Route path="/login" component={Login} />
          </div>
        </div>
    </section>
    </Router>
  );
}

export default App;
