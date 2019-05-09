import React from 'react';
// import FontAwesomeIcon from '@fortawesome/fontawesome-free';

const NewQuestion = () => {
    return(
        <div className="columns is-centered new-question">
            <div className="column is-6">
                <div className="card">
                    <header className="card-header has-background-primary">
                        <p class="card-header-title has-text-light"> 
                            Create New Question 
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="form">
                            <div className="field">
                                <label className="label">Would you rather?</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Enter first option" />
                                </div>
                                <div> OR </div>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Enter second option" />
                                </div>
                                <div className="control">
                                    <button className="button is-dark" type="submit">
                                        <span><i className="fa fa-thumbs-up"></i> Submit</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewQuestion;
