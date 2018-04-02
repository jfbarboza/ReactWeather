var React = require('react');
var NavComponent = require('NavComponent');

var Main = (props) =>{
  return(
    <div>
      <NavComponent />
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;
