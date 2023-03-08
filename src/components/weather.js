import React from 'react';
import './styles.css';
import { Button } from 'semantic-ui-react';
import moment from 'moment';

const refresh = () => {
  window.location.reload();
}

const CardExampleCard = ({weatherData}) => (
  <div className='main'>
    <div className='top'>
      <p className='header'>{weatherData.name}</p>
      <Button className='button' inverted color='blue' circular icon='refresh' onClick={refresh} />
    </div>
    <div className='flex'>
      <p className='day'>{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
      <p className='description'>Description: {weatherData.weather[0].description}</p>
    </div>
    <div className='flex'>
      <p className='temp'>Temperature: {weatherData.main.temp} &deg;F</p>
      <p className='temp'>Feels like: {weatherData.main.feels_like} &deg;F</p>
      <p className='temp'>Wind: {weatherData.wind.speed}mph {weatherData.wind.deg}</p>
    </div>
    <div className='flex'>
      <p className='sunrise-sunset'>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-AZ')}</p>
      <p className='sunrise-sunset'>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-AZ')}</p>
    </div>
  </div>
)

export default CardExampleCard;