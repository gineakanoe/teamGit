import React, {useState} from 'react';
import WeatherChild from './WeatherChild/WeatherChild'

class WeatherApp extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            baseURL: 'https://api.openweathermap.org/data/2.5/weather',
            city: 'Indianapolis',
            apiKey: '37f707e1986a973647faed4122426481',
            main: {},
            weather: [],
            time: null
        }
    }

    componentDidMount() {
        this.fetchInterval = setInterval (() => {
            fetch(`${this.state.baseURL}?q=${this.state.city}&units=imperialappid=${this.state.apiKey}`)
            .then(response=>response.json())
            .then(json => this.setState({
                main: json.main,
                weather: json.weather,
            }))
            .catch(err => console.log(err))
        },1500)
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState.main.temp, this.state.main.temp);

        let localTime= new Date().toLocalTimeString();
        if( prevState.main.temp !== this.state.main.temp) {
            console.log('state has changed');
            this.setState({
                time:localTime
            })
        }
    }
    componentWillUnmount(){
        console.log('clearing interval');
        clearInterval(this.fetchInterval);
    }
    render(){
        return(
            <div className='main'>
                <div className='mainDiv' style={{textAlign:'center'}}>
                <WeatherChild city={this.state.city} main={this.state.main} weather={this.state.weather} time={this.state.time} />
                </div>
            </div>
        )
    }
}

export default WeatherApp