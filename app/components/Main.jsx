var React = require('react');
var NavComponent = require('NavComponent');

var Main = (props) =>{
  return(
    <div>
      <NavComponent />
      <div className="row">
        <div className="medium-6 large-4 columms small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
