import React from 'react';
import { Link } from 'react-router-dom';

function ArtistList (props) {

    const listRender = ({artistData}) =>{
        if(artistData){
            return artistData.map((data,index) => {
                const style = {
                    background:`url('/images/covers/${data.cover}.jpg')`
                }
                return(
                   
                  
                        <div>{data.name}</div>
                   
                )
            })
        }
    }

    return(
        <div className="artist_list">
            <h4>List Of Artists</h4>
            {listRender(props)}
        </div>
    )
}

export default ArtistList;