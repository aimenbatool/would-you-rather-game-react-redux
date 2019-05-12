import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import "react-tabs/style/react-tabs.css";

export default () => (
    <Tabs>
      <TabList>
        <Tab> Unanswered Questions </Tab>
        <Tab> Answered Questions </Tab>
      </TabList>
  
      <TabPanel>
      <div className="columns is-centered leadboard">
            <div className="column is-7 has-background-white-ter">
                <div className="card leadboard-panel">
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
                                        Eat mangoes
                                    </li>
                                    <li className="list-item"> 
                                        Eat bananas
                                    </li>
                                </div>
                                <div className="is-pulled-left">
                                    <Link className="button is-dark" to="/question/someid"> Answer Question </Link>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            
                <div className="card leadboard-panel">
                    <header className="header has-background-primary">
                        <p className="card-header-title has-text-light"> Abbas Siddiqi Asked </p>
                    </header>
                    <div className="card-content">
                        <div className="content columns">
                           <div className="column is-3">
                                <figure className="image is-96x96">
                                    <img className="is-rounded" src="/images/man.png" alt="dp"/>
                                </figure>
                           </div>
                           <div className="column">
                                <h6 className="has-text-left">Would you rather?</h6>
                                <div className="list">
                                    <li className="list-item"> 
                                        Learn React
                                    </li>
                                    <li className="list-item"> 
                                        Learn Angular
                                    </li>
                                </div>
                                <div className="is-pulled-left">
                                    <a className="button is-dark" href="/"> Answer Question </a>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </TabPanel>

      <TabPanel>
      <div className="columns is-centered leadboard">
            <div className="column is-7 has-background-white-ter">
                <div className="card leadboard-panel">
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
                                        Eat mangoes
                                    </li>
                                    <li className="list-item"> 
                                        Eat bananas
                                    </li>
                                </div>
                                <div className="is-pulled-left">
                                    <Link className="button is-dark" to="/result/someid"> View Results </Link>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            
                <div className="card leadboard-panel">
                    <header className="header has-background-primary">
                        <p className="card-header-title has-text-light"> Abbas Siddiqi Asked </p>
                    </header>
                    <div className="card-content">
                        <div className="content columns">
                           <div className="column is-3">
                                <figure className="image is-96x96">
                                    <img className="is-rounded" src="/images/man.png" alt="dp"/>
                                </figure>
                           </div>
                           <div className="column">
                                <h6 className="has-text-left">Would you rather?</h6>
                                <div className="list">
                                    <li className="list-item"> 
                                        Learn React
                                    </li>
                                    <li className="list-item"> 
                                        Learn Angular
                                    </li>
                                </div>
                                <div className="is-pulled-left">
                                    <a className="button is-dark" href="/"> View Results </a>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </TabPanel>
    </Tabs>
  );