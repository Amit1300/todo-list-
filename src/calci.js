import React from "react";
import './calci.css'


class Calci extends React.Component{
    constructor(props){
        super(props)
        this.state={
            bill:"",
            service:" ",
            total:'',
            customer:[],
            name:'',
            totaltips:[],
            sum:0,
            l:0


        }
    }

    getvalue=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        
    }
    
add=(e)=>{
        console.log(e)
        let bill =Number(this.state.bill)
        let service=Number(this.state.service)
        

        if(bill==""){
            alert(" please write appropiate value");
        }

        if(this.state.bill >0 ){
            var tip=service*bill
            console.log(tip)
            
           
        this.setState({customer:[...this.state.customer,{name:this.state.name,total:tip,totaltips:this.state.totaltips.push(tip)}]}) 
         console.log(this.state.totaltips)
         this.setState({name:"",bill:"",service:''})
         
         
    
     }

}


    final=()=>{
        
        let sum=0
        this.state.totaltips.forEach(item=>{
            sum=sum+item
            
        })
      
      this.setState({sum:sum,l:this.state.totaltips.length})
    }

    render(){
        
        return(
        
        <div>
            <div className={'div'}>
                <div className={ 'tipcal'}>
                    <div >React tip calculator</div>
                </div>
            <hr></hr>
            <label>ENTER  YOUR BILL AMOUNT</label><br></br>
            <input type="text" class={'long'} name="bill" value={this.state.bill} onChange={this.getvalue} /><br></br>
            
           <span>How was service</span> <select id='service'  onClick={(event)=>{this.setState({service:event.target.value})}} >
                <option value='0' >choose an option</option>
                <option value='0.2'>Excellent-20%</option>
                <option value='0.1'> good -10%</option>
                <option value='0.05'>ok-5%</option>
            </select>

            <input type="text" name="name" value={this.state.name} onChange={this.getvalue} />
            
            <button onClick={()=>{this.add(this.state.name)}}> Add customer</button><br></br>
            <hr></hr>
            <div style={{textAlign:"center"}}>
            <h3>customer list</h3>
            {this.state.customer.map(item=><p>{item.name} is paying  {item.total} tip</p>)}
            </div>
            <hr></hr>
            <button className={'cal'} onClick={this.final}>calculate tip & calculate</button><br></br>
            <hr></hr>
            <hr></hr>
            <div>
                <div class={'half'}>
                <h4>Total customer</h4>
                <hr></hr>
                {this.state.l}
                </div>


                <div class={'half'}>
                <h4>Total tips</h4>
                <hr></hr>
                {this.state.sum}
                </div>

                <button onClick={()=>{this.setState({l:0,sum:0,customer:[],totaltips:[]})}} className={'cal1'}>Reset</button>
        
             </div>
             <footer>
                 @2020 TIP-CALCULATOR
             </footer>
         </div>    
     </div>
        )
    }
}

export default Calci;
