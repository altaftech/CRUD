import axios from 'axios';
import React from 'react';
class AddDataC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    onClickData(){
        var myformdata = new FormData()
        myformdata.append("todo_title",this.state.txt1)
        myformdata.append("todo_details",this.state.txt2)
        
        axios.post("https://akashsir.in/myapi/crud/todo-add-api.php",myformdata)
        .then(res =>{
          if(res.data.flag==="1"){
            alert(res.data.message)
          }else{
            alert("Issue")
          }
        })
        .catch(err=>alert(err))
    }
    onClickData1(){
       var myobj ={
        todo_title:this.state.txt1,
        todo_details : this.state.txt2
       }
       var myjson = JSON.stringify(myobj)
        
        axios.post("https://akashsir.in/myapi/crud/todo-add-json.php",myjson,{
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res =>{
          if(res.data.flag==="1"){
            alert(res.data.message)
          }else{
            alert("Issue")
          }
        })
        .catch(err=>alert(err))
    }
    render() {
        return (
            <>
            <h1>Add</h1>
            Title : <input type='text' onChange={(e)=>this.setState({txt1:e.target.value})}/>
            Details : <input type='text' onChange={(e)=>this.setState({txt2:e.target.value})}/>
            <br/>
            <input type='button' onClick={this.onClickData.bind(this)} value="Method 1"/>
            <input type='button' onClick={this.onClickData1.bind(this)} value="Method 2"/>

            </>

        );
    }
}

export default AddDataC;