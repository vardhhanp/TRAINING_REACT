import React, { Components } from 'react'
import "./styles.css"
export default class ClassComponent extends Components {
  constructor(props){
    super(props)
    this.state={
        message: "Hi I am attending react class"
    }
  }
  changeMessage=()=>{
    this.setState({
        message:{"thnaks for joining"}
    })
  }
  render(){
    return(
        <div>
            <h1 className='heading'>{this.state.message}</h1>
            <button onClick={}

        </div>
    )
  }
