import React from 'react';
import { Chart, Cards, CountryPicker } from './components';
import './App.css';
import { fetchData } from './api';

class App extends React.Component{

  state ={
    data:{}
  }

  async componentDidMount(){
    const data = await fetchData();

    this.setState({ data: fetchData });

    console.log(data);
  }

  render(){

    const { data } = this.state;
    
    return(
      <div className="container">
        <Cards data ={data.Cards} />
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}


export default App;
