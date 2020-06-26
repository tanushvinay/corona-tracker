import React from 'react';
import { Chart, Cards, CountryPicker } from './components';
import './App.css';
import { fetchData } from './api';

class App extends React.Component{

  state = {
    data:{}
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({ data: fetchedData });

    //console.log(data);
  }

  render(){

    

    return(
      <div className="container">
        <Cards data ={this.state.data} />
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}


export default App;
