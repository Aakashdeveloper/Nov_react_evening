import React,{Component} from 'react';
import { connect} from 'react-redux';
import {latestNews} from '../actions';
import PropTypes from 'prop-types'

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
    }

    render(){
        return(
            <div>
                <h1>Main Page</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
}

Home.protoTypes={
    dispatch:PropTypes.func
}


export default connect(mapStateToProps)(Home);