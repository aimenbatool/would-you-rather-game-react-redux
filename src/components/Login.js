import React from 'react';

const Login = () => {
    return (
        <div className="columns is-centered question">
            <div class="column is-4 has-background-white-ter">
                <div className="card question-panel">
                    <header className="header has-background-primary">
                        <p className="card-header-title has-text-light"> Login </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                        <div className="card-image">
                            <figure className="image 48x48px">
                            <img src="/images/man.png" className="is-rounded" alt="Login-icon"/>
                            </figure>
                        </div>
                            <div className="control has-text-centered">
                                <div className="select">
                                    <select>
                                    <option>Select user</option>
                                    <option> Aimen </option>
                                    <option> Abbas </option>
                                    </select>
                                </div>
                                <div className="login-btn">
                                    <button class="button is-info">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;