import { Route, Switch } from 'react-router-dom';
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import UsersIndex from './containers/users/users-index';
import UsersCreate from './containers/users/users-create';
import Home from './containers/home/home';
import UserDetails from './containers/users/user-details';

function App() {
    return (
        <div className="App">
            <div className="sticky-top">
                <Header />
            </div>
            <div className="container">
                <main role="main" className="pb-3">
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/users/:id" component={UserDetails} />
                        <Route path="/users" component={UsersIndex} />
                        <Route path="/users-create" component={UsersCreate} />
                    </Switch>
                    <Footer />

                </main>
            </div>
        </div>
    );
}

export default App;