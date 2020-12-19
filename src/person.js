import React, { Component } from 'react'
import "./person.css"
export default class Person extends Component {

    constructor(props){
        super(props)
        
    }


    render() {
         const {personitem,handledit}=this.props
       
        return (
            <div>
            <h4>userdetail list</h4>
            <h5>Name :{personitem.name}</h5>
            <h5>email:{personitem.email}</h5>
            <h5>username :{personitem.username}</h5>
            <button onClick={()=>handledit(personitem)}>edit</button>
            
                
            </div>
        )
    }
}
