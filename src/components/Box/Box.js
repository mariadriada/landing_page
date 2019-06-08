import React, { Component } from 'react'

import './styles.scss'

class Box extends Component{
    render(){
        return(
            <div className={`box ${this.props.color}`}>
                {this.props.children}
            </div>
        )
    }
}

export default Box