import React, { Component } from 'react';

class EvenetHandler extends Component {

    constructor(props){
        super(props)
    
        this.state={
                 changeValue:""
        }
    }

    handelClicked=(e)=>{

        this.setState({
            changeValue:e.target.value
        })
     
    }

    render() {
        return (
            <div>
             <input type="text" onChange={this.handelClicked} />
             <p>{this.state.changeValue}</p>
            </div>
        );
    }
}

export default EvenetHandler;