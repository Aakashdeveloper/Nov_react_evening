import React, {Component} from 'react';
import Banner from './Banner';
import ArtistList from './Artists';

const url= "http://localhost:8700/artists";

class Home extends Component {
    constructor(){
        super()

        this.state={
            artist:''
        }
    }

    componentWilMount(){
        
    }
    
    render(){
        return(
            <div>
                <Banner></Banner>
                <ArtistList artistData={this.state.artist}></ArtistList>
            </div>
        )
    }

    componentDidMount(){
        fetch(url, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                artist:data
            })
        })
    }
}

export default Home;