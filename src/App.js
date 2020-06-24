import React from 'react';
import { Chart, Cards, CountryPicker } from './components';
import './App.css';
import { fetchdata } from './api';

class App extends React.Component{

  async componentDidMount(){
    const data = await fetchdata();

    console.log(data);
  }
  render(){
    return(
      <div className="container">
        <Cards/>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}


export default App;
