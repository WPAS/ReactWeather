var React = require('react');

var About = (props) => {
    return(
      <div>
        <h1 className='text-center page-title'>About</h1>
        <p>This is a simple React application from
           <em>'The Complete React Web App Developer Course'</em> by Andrew Mead.
        </p>
        <p>Here are some of the tools used in the app:</p>
        <ul>
          <li><a href="https://facebook.github.io/react">React.js</a></li>
          <li><a href="https://github.com/ReactTraining/react-router">React Router</a></li>
          <li><a href="http://openweathermap.org">Open Weather Map</a></li>
          <li><a href="http://foundation.zurb.com/">Foundation</a></li>
        </ul>
      </div>
    )
};

module.exports = About;
