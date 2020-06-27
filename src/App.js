import React from 'react';
import { Chart, Cards, CountryPicker } from './components';
import './App.css';
import { fetchData } from './api';

class App extends React.Component{

  state = {
    data:{},
    country:''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({ data: fetchedData });

    
  }

  handleCountryChange = async (country) =>{
    const fetchedData =  await fetchData(country);
    this.setState({data:fetchedData, country: country=='global'? '':country});
  }

  render(){

    

    return(
      <div className="container">
        <Cards data ={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data = {this.state.data} country={this.state.country}/>
      </div>
    )
  }
}


export default App;
