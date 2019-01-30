import React,{Component} from 'react';
import { get } from 'https';


const url = '/leaks';


class Leaks extends Component {

state = {
    data: null
}


componentDidMount(){
    this.getData();

}
getData() {
    fetch('http://localhost:3030/leaks')
    .then(res => res.json())
    .then(res => this.setState({ data: res }));
}




    render () {
    console.log(this.state.data)
        return(
            <div>

            
            </div>
        )
    }
}

export default Leaks; 