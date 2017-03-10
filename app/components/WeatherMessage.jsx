var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
      <div>
        <h4 className="text-center">There is {temp}<sup>o</sup>C in {location}</h4>
      </div>
    )
};

module.exports = WeatherMessage;
