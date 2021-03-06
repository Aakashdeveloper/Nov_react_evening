const url = 'http://localhost:8900';

export function latestNews(){
    const output = fetch(`${url}/articles?_end=3`,{method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_LATEST',
        payload:output
    }
}

export function articleNews(){
    const output = fetch(`${url}/articles?_start=3&_end=10`,{method:'GET'})
    .then((response) => response.json())

    return{
        type:'GET_ARTICLE',
        payload:output
    }
}