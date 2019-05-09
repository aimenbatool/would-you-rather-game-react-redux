import React from 'react';

const Leadboard = () => {
    return(
        <div className="columns is-centered leadboard">
            <div class="column is-8 has-background-white-ter">
                <div className="card leadboard-panel">
                    <header className="header has-background-primary">
                        <p className="card-header-title has-text-light"> Aimen Batool </p>
                    </header>
                    <div className="card-content">
                        <div className="content columns">
                           <div className="column is-3">
                                <figure class="image is-96x96">
                                    <img class="is-rounded" src="/images/man.png" alt="dp"/>
                                </figure>
                           </div>
                           <div className="column is-5">
                                <div className="list leadboard-stats">
                                    <li className="list-item"> 
                                        <span> 4 </span>
                                        Questions Asked
                                    </li>
                                    <li className="list-item"> 
                                        <span> 2 </span>
                                            Questions Answered
                                        </li>
                                </div>
                           </div>
                           <div className="column">
                                <div className="card">
                                    <header className="header has-background-grey-lighter	">
                                        <p className="card-header-title is-centered"> Score </p>
                                    </header>
                                    <div className="card-content score-panel">
                                        <p> 6 </p>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            
                <div className="card leadboard-panel">
                    <header className="header has-background-primary">
                        <p className="card-header-title has-text-light"> Abbas Siddiqi </p>
                    </header>
                    <div className="card-content">
                        <div className="content columns">
                           <div className="column is-3">
                                <figure class="image is-96x96">
                                    <img class="is-rounded" src="/images/girl.png" alt="round"/>
                                </figure>
                           </div>
                           <div className="column is-5">
                                <div className="list leadboard-stats">
                                    <li className="list-item"> 
                                        <span> 1 </span>
                                        Questions Asked
                                    </li>
                                    <li className="list-item"> 
                                        <span> 2 </span>
                                            Questions Answered
                                        </li>
                                </div>
                           </div>
                           <div className="column">
                                <div className="card">
                                    <header className="header has-background-grey-lighter	">
                                        <p className="card-header-title is-centered"> Score </p>
                                    </header>
                                    <div className="card-content score-panel">
                                        <p> 3 </p>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leadboard;