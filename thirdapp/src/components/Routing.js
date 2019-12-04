import React,{Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import ArtistDetails from './ArtistDetails'

import Home from './Home';

class Routing extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/artist/:artistId" component={ArtistDetails}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing;