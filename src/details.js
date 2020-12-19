
import React, { Component } from 'react'



const Datacontext=React.createContext()
export default class Details extends Component {

    constructor(props){
        super(props)
        this.state={
            userdetails:[]
        }
    }

 componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data=>{this.setState({userdetails:data})})
   
    

 }
    handlechange=(val)=>{
        this.setState({userdetails:val})
    }

    render() {
        return (
            <div>
            <Datacontext.Provider value={{userdetails:this.state.userdetails,handlechange:this.handlechange}} >
                {this.props.children}
            </Datacontext.Provider>


                
            </div>
        )
    }
}

export {Datacontext};
