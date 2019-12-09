import React ,{Component} from 'react';
import { connect} from 'react-redux';
import * as actions from '../actions';

class App extends Component {

    componentDidMount(){
        this.props.moviesList()
    }

    render(){
        return(
            <div>
                hiii
            </div>
        )
    }

}


export default connect(App);