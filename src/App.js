import React from 'react';
import { Chart, Cards, CountryPicker } from './components';
import './App.css';
import { fetchData } from './api';
import coronaImage from './images/image.png'
import { StylesProvider } from '@material-ui/core';

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
        <img className = {StylesProvider.image} src = {coronaImage} alt="Covid-19"/>
        <Cards data ={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data = {this.state.data} country={this.state.country}/>
      </div>
    )
  }
}


export default App;
