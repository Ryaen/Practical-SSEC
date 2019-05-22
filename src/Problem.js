import React, {Component} from 'react';
import axios from 'axios';


class ProblemArea extends Component {

    constructor(){
        super();
        this.state={
            problem: []
        }
        
    }
    
    componentDidMount(){
        axios.get("https://extractible-meet.000webhostapp.com/App/getdata.php?id=1",{}).then((res)=>{
        //on success
        console.log('data',res.data);
        this.setState({
        problem: res.data[0]
        });
        }).catch((error)=>{
        
        //on error
        console.log(error);
        alert(error + "There is an error in API call.");
        
        });

    }

    render(){

    return <section className="ProblemArea" >
        
       <div ><br /><br /> {this.state.problem.questions} </div>
        <br/>

        Sample Input : {this.state.problem.sample_input} <br/>
         Sample Output : {this.state.problem.sample_output} 
        
        </section>;
    }

}

export default ProblemArea;