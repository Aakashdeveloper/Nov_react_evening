import React,{Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from '../containers/Home'

class Routing extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing