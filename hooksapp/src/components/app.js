import React, {useState,useEffect} from 'react';
import ArtistList from './artist';

const url = "http://localhost:8700/artists";
function App(){
    const [title] = useState('React Hooks Page');
    const [counter, setCounter] = useState(0)
    const [artist, setArtist] = useState(0)

    useEffect(()=>{
        fetch(url)
            .then((res) =>  res.json())
            .then((data) => {
                setArtist(data)
            })
    })
    return(
        <div>
            <div className="jumbotron">
                <h1>{title}</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            <div className="btn btn-danger"
            onClick={()=>{setCounter(counter+1)}}>
                Click
            </div>
            <h2>{counter}</h2>
            <ArtistList artistData={artist}/>
        </div>
    )
}

export default App;