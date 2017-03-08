var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
      <div>
        <p>There is {temp}<sup>o</sup>C in {location}</p>
      </div>
    )
};

module.exports = WeatherMessage;
