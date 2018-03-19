import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <nav className="entry-point">
                <Link to="/users">Entry Point</Link>
            </nav>
        );
    }
}

export default Home;