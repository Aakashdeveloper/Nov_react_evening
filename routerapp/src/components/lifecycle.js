//Get default state
//set initial state
//before get created
//render jsx
//after get created

import React,{Component}  from 'react';

class Lifecycle extends Component {

    // 1. Get Default State
    constructor(props){
        console.log('Get Default State')
        super(props)

        // 2. set initial state
        this.state={
            title:'LifeCycle'
        }
    }
    //5. after get created
    componentDidMount(){
        console.log('componentDidMount')
    }

    //3. before get created
    componentWillMount(){
        console.log('componentWillMount')
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        if(nextState.title === this.state.title){
            return false;
        }else{
            return true;
        }
    }


    //4. render jsx
    render(){
        console.log('render jsx')
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div onClick={()=>{this.setState({title:'Something Else'})}}>
                    Click me  
                </div>
            </div>
        )
    }
}

export default Lifecycle;


/*
1,2,2,3
*/
