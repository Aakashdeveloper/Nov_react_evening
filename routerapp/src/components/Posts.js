import React,{Component} from 'react';
import { Link} from 'react-router-dom'

class Posts extends Component{
    render(){
        return(
            <div>
                <div className="panel panel-danger">
                    <div className="panel-heading">
                    Posts Page
                    </div>
                    <div className="panel-body">
                        <div className="jumbotron">
                            <h2>Posts Page</h2>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            </p>
                        </div>
                        <h2>JavaScript</h2>
                        <Link to="/post/javascript" className="btn btn-info">Details</Link>
                        <h2>React</h2>
                        <Link to="/post/react" className="btn btn-info">Details</Link>
                        <h2>Node</h2>
                        <Link to="/post/node" className="btn btn-info">Details</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts;