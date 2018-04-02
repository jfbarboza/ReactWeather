var React = require('react');
var {Link} = require('react-router');

var About = (props)=>{
    return(
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a demo of an React App done by Jorge Barboza, you can find the code at <a href="https://github.com/jfbarboza/ReactWeather/" target="_blank">Github</a>. This is an academical demonstration on app done during a React Development course</p>
        <p>Technologies use to develop this demo:</p>
        <dl>
          <dt>React</dt>
          <dd><a href="https://facebook.github.io/react" target="_blank">React</a> was the javascript framework use to speed up the development process.</dd><br />
          <dt>Foundation</dt>
          <dd><a href="https://foundation.zurb.com/" target="_blank">Foundation</a> was the styling framework of choice to get a minimalistic yet functional result.</dd><br />
          <dt>Webpack</dt>
          <dd><a href="https://webpack.js.org/" target="_blank">Webpack</a> takes care of bundling all our files and works as a task runner to make the development process faster.</dd><br />
          <dt>Open Weather Map</dt>
          <dd><a href="http://openweathermap.org" target="_blank">Open Weather Map</a> API was use to get the appropriate temperature data.</dd><br />
          <dt>Git</dt>
          <dd><a href="https://git-scm.com/" target="_blank">Git</a> is the de-facto version control system in the development industry.</dd>
        </dl>
      </div>
  )
}

module.exports = About;
