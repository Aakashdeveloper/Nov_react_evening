import React,{Component} from 'react';
import { connect} from 'react-redux';
import {latestNews,articleNews} from '../actions';
import PropTypes from 'prop-types';

import ArticleNews from '../component/Home/ArticleNews';
import LatestNews from '../component/Home/LatestNews';

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
    }

    render(){
        return(
            <div>
               <LatestNews latestdata={this.props.artilces.latest}/>
               <ArticleNews articledata={this.props.artilces.article}/>

            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        artilces:state.articles
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}


export default connect(mapStateToProps)(Home);