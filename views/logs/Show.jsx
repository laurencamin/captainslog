const React = require("react")
const Nav = require("../components/Nav")

class Show extends React.Component {
  render() {
    const logs = this.props.logs
    return (
      <div>
        <Nav link="/Index" text="Home" />
        <h1> Show Page </h1>
          The {logs.title} is {logs.entry} <br />
          {logs.shipIsBroken? 'It is broken' : 'It is not broken.' }
      </div>
    )
  }
}

module.exports = Show