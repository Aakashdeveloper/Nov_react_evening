import React,{Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'React App',
            keywords:'user input'
        }
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({keywords:event.target.value?event.target.value:"User Input"})
    }

    render(){
        return(
            <div>
                <header >
                    <div className="logo"
                    onClick={() => {console.log('clicked')}}
                    >
                        {this.state.title}
                    </div>
                    <center>
                        <input onChange={this.inputChange.bind(this)}/>
                        <p>{this.state.keywords}</p>
                    </center>
                    <hr/>
                </header>

            </div>
        )
    }
}
    

export default Header;