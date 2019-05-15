import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerQuestion from './AnswerQuestion';
import QuestionResult from './QuestionResult';

class Question extends Component {
    render() {
        const { match, questions, authedUser, users } = this.props;
        const { id } = match.params;
        if( questions && questions[id]) {
            const question = questions[id];
            const answeredQuestion = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);
            
            return(
                answeredQuestion ? 
                    <QuestionResult question={question} users={users} authedUser={authedUser}/>
                    :
                    <AnswerQuestion question={question} users={users} authedUser={authedUser}/>
            );
        } else {
            return (
                <div> Invalid Id </div>
            )
        }
    }
}

const mapStateToProps = ({ questions, authedUser, users }) => {
    return {
        questions,
        authedUser,
        users,
    };
}

export default connect(mapStateToProps)(Question);