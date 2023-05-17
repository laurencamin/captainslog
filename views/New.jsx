const React = require("react");

class New extends React.Component {
    render() {
      return(
        <div>
          <Nav link="/logs" text="Home" />
          <h1>New</h1>
          <form action="/logs" method="POST">
            Title: <input type="text" name="title" />
            Entry: <input type="textarea" name="entry" />
            Is Ship Broken: 
            <input 
              type="checkbox" 
              name="shipIsBroken" 
            /> 
            <input type="submit" value="Submit" />       
          </form>
        </div>
      )
    }
  }
  
  module.exports = New