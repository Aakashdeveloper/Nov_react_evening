import React,{Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './Home'
import Posts from './Posts';
import Profile from './Profile';
import Details from './PostDetails';
import Lifecycle from './lifecycle'

class Routing extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
                <header>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">NareshIT</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li> <Link to="/posts">Posts</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/lifecycle">Lifecycle</Link></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </header>
                <Route exact path="/" component={Home}></Route>
                <Route path="/posts" component={Posts}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/post/:name" component={Details}></Route>
                <Route path="/lifecycle" component={Lifecycle}></Route>
            </div>
            </BrowserRouter>  
        )
    }
}


export default Routing;