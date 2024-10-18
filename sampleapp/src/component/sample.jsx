import { Component } from "react";



export default class Sample_class extends Component {
    constructor(){
        super()
        this.state={name:'hi'}
    }
    render(){
        return(
            <h2>class Component{this.state.name}{this.props.color}</h2>
        )
    }
}