import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import UsersContainer from '../../containers/UsersContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Switch>
                    <Route path="/users" component={UsersContainer}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default App;
