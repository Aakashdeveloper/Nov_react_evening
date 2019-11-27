import React,{Component} from 'react';
import ReactDom from 'react-dom'
import Header from './component/Header';
import JSON from './db.json';
import NewsList from './component/NewsList';

class App extends Component {
    constructor(){
        super()
        
        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(userText){

    }


    render(){
        console.log(this.state.news)
        return(
            <div>
                <Header userChoicee={(data) => {this.filterNews(data)}}/>
                <NewsList newsdata={this.state.news}/>
            </div>
        )
    }
}



/*
pareent to child use props
child to parent one callback functiiom
*/
ReactDom.render(<App/>,document.getElementById('root') )
