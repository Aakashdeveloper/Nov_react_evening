import React from 'react';

const AlbumList = (props) => {
    
    const  showAlbums = ({albumdata}) => {
        if(albumdata){
            return albumdata.map((item,index) => {
                return(
                    <img src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
        }
    }
   

    return(
        <div className="album_list">
           {showAlbums(props)}
        </div>
    )

    
}

export default AlbumList;