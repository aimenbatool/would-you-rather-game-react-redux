import React from 'react';

const Question = () => {
    return(
        <div className="columns is-centered question">
            <div className="column is-7 has-background-white-ter">
                <div className="card question-panel">
                    <header className="header has-background-primary">
                        <p className="card-header-title has-text-light"> Aimen Batool Asked </p>
                    </header>
                    <div className="card-content">
                        <div className="content columns">
                            <div className="column is-3">
                                    <figure className="image is-96x96">
                                        <img className="is-rounded" src="/images/girl.png" alt="dp"/>
                                    </figure>
                            </div>
                            <div className="column">
                                    <h6 className="has-text-left">Would you rather?</h6>
                                    <div className="list">
                                        <li className="list-item"> 
                                            <label className="radio">
                                                <input type="radio" name="answer" />
                                            </label>
                                            Eat mangoes
                                        </li>
                                        <li className="list-item"> 
                                            <label className="radio">
                                                <input type="radio" name="answer" />
                                            </label>
                                            Eat bananas
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

export default Question;