import React,{Component} from 'react';
import ReactDom from 'react-dom'
import Header from './component/Header';
import JSON from './db.json';
import NewsList from './component/NewsList';

class App extends Component {
    constructor(){
        super()
        
        this.state={
            news:JSON
        }
    }


    render(){
        console.log(this.state.news)
        return(
            <div>
                <Header/>
                <NewsList newsdata={this.state.news}/>
            </div>
        )
    }
}


ReactDom.render(<App/>,document.getElementById('root') )
