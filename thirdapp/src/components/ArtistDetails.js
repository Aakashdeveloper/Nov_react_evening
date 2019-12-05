import React,{Component} from 'react';
import Header from './Header';
import AlbumList from './albums';

const url= "http://localhost:8700/artists";

class ArtistDetails extends Component {
    constructor(){
        super()

        this.state={
            details:''
        }
    
    }

    componentDidMount(){

        fetch(`${url}/${this.props.match.params.artistId}`,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                details:data
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.details.cover}.jpg')`}}>
                        </span>
                        <h3>{this.state.details.name}</h3>
                        <div className="bio_text">
                            {this.state.details.bio}
                        </div>

                    </div>
                </div>
                <AlbumList albumdata={this.state.details.albums}/>
            </React.Fragment>
        )
    }
}
    

export default ArtistDetails;