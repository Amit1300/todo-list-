import React from 'react'

export default class Edit extends React.Component {

    constructor(props){
        super(props)
        this.State={
            name:this.props.editdetails.name,
            username:this.props.editdetails.username,
            email:this.props.editdetails.email
        }
    }


    handlechange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        
        return (
            <div>
            
            <label>Name</label>
            <input type="text" name='name' onChange={this.handlechange}  value={this.state.name} />
            
            <label>userName</label>
            <input type="text" name='username' onChange={this.handlechange}  value={this.state.username} />

            <label>email</label>
            <input type="text" name='email' onChange={this.handlechange}  value={this.state.email} />
            <button >submit</button>

                
            </div>
        )
    }
}
