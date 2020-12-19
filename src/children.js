
import React, { Component } from 'react'
import {Datacontext} from "./details"
import Person from "./person"
import Edit from "./edit"
export default class Children extends Component {

    constructor(props){
        super(props)
        this.state={
            userdetails:[],
            editmode:false,
            tempdetails:{}

        }
    }

handledit=(val)=>{
   this.setState({editmode:true,tempdetails:val})
    

}

    render() {
        
        return (
            <div>
            
            {!this.state.editmode && this.context.userdetails.map(item=>{
                return <Person  personitem={item}  handledit={this.handledit}/>
                
                })}

                {this.state.editmode && <Edit editdetails={this.state.tempdetails}  />}
            

            </div>
        )
    }
}


Children.contextType=Datacontext

