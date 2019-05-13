import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';
import Leadboard from './Leadboard';
import NewQuestion from './NewQuestions';
import Question from './Question';
import QuestionResult from './QuestionResult';
import { handleInitialData } from './../actions/shared';
import { setAuthedUser } from './../actions/authedUser';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(setAuthedUser());
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    const HomeComponent =  authedUser === null ? Login : Home;
    return (
      <Router>
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              { authedUser && <Navbar/> }
              <Route path="/" exact component={HomeComponent} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leadboard" component={Leadboard} />
              <Route path="/question/:id" component={Question} />
              <Route path="/result/:id" component={QuestionResult} />
            </div>
          </div>
      </section>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(App);
