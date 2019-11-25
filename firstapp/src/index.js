import React from 'react';
import ReactDom from 'react-dom'
import Header from './component/Header';

const App = () => {
    return(
        <div>
            <Header/>
        </div>
    )
}

ReactDom.render(<App/>,document.getElementById('root') )
