import React,{Component} from 'react';

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
            <div>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.details.cover}.jpg)`}}>
                            <h3>{this.state.details.name}</h3>
                            <div className="bio_text">
                                {this.state.details.bio}
                            </div>

                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
    

export default ArtistDetails;