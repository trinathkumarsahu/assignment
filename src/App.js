import React, {Component} from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import LoginPage from "./views/LoginPage";
import PageNotFound from "./views/PageNotFound";
import {registerNav} from "./modules/Navigation";
import HomeContainer from "./views/HomeContainer";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Router ref={registerNav}>
                    <Switch>
                        <Route
                            key="login"
                            exact
                            path="/login"
                            component={LoginPage}
                        />
                        <Route
                            exact
                            path="/"
                            component={() => <Redirect to="/login"/>}
                        />
                        <Route
                            exact
                            Redirect to="/home"
                            component={HomeContainer}
                        />
                        <Route
                            exact
                            Redirect to="/PageNotFound"
                            component={PageNotFound}
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
