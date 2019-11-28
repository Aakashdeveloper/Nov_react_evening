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
        // console.log("in filter",userText)
        const output = this.state.news.filter((data) => {
            return (data.title.toLowerCase().indexOf(userText.toLowerCase()) > -1 ||
                    data.feed.toLowerCase().indexOf(userText.toLowerCase()) > -1)
        })
        this.setState({filtered:output})

    }


    render(){
        // console.log(this.state.news)
        return(
            <div>
                <Header userChoice={(data) => {this.filterNews(data)}}/>
                <NewsList newsdata={this.state.filtered}/>
            </div>
        )
    }
}
/*
 var a = [0,1,2,3]
 a.filter((data) => {return data*1})
pareent to child use props
child to parent one callback function
*/
ReactDom.render(<App/>,document.getElementById('root') )
