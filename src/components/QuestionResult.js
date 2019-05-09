import React from 'react';

const QuestionResult = () => {
    return(
        <div className="columns is-centered question-result">
            <div class="column is-7 has-background-white-ter">
                <div className="card question-result-panel">
                    <header className="header has-background-primary">
                        <p className="card-header-title has-text-light"> Aimen Batool Asked </p>
                    </header>
                    <div className="card-content">
                        <div className="content columns">
                        <div className="column is-3">
                                <figure class="image is-96x96">
                                    <img class="is-rounded" src="/images/girl.png" alt="dp"/>
                                </figure>
                        </div>
                        <div className="column">
                                <h6 className="has-text-left">Would you rather?</h6>
                                <div className="list">
                                    <li className="list-item has-background-white-ter	"> 
                                        Would you rather Eat mangoes?
                                        <span className="selection-badge is-pulled-right">
                                            <i className="fa fa-check-circle"> </i>
                                            You Chose
                                        </span>
                                        <div>
                                            <progress class="progress is-small" value="15" max="100">15%</progress>
                                        </div>
                                        <div className="has-text-right">
                                            <span class="tag is-info"> 1 out of 2 votes</span>
                                        </div>
                                    </li>
                                    <li className="list-item"> 
                                        Would you rather Eat bananas?
                                        <div>
                                            <progress class="progress is-small" value="20" max="100">15%</progress>
                                        </div>
                                        <div className="has-text-right">
                                            <span class="tag is-info"> 1 out of 2 votes</span>
                                        </div>
                                    </li>
                                </div>
                                <div className="is-pulled-left">
                                    <button type="submit" className="button is-dark" href="/"> Submit </button>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionResult;