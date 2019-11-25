import React,{Component} from 'react'

class Home extends Component {
    constructor(){
        super()

        this.state={
            title:'HomePage'
        }
    }

    render(){
        return(
            <h1>{this.state.title}</h1>
        )
    }
}

export default Home;