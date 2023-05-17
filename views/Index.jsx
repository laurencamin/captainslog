const React = require("react");
const Nav = require("../components/Nav");

class Index extends React.Component {
  render() {
    const { logs } = this.props
    return(
        <div>
        <h1>Logs Index Page</h1>
        <Nav link="logs/new" text="Create a Ship!" />
        <ul>
            {logs.map((logs, i) => {
                    return (
                        <li key={i}>
                            The {" "}
                            <a href={`/logs/${logs._id}`}>
                                {logs.title}
                            </a>{" "}
                            is {logs.entry} <br></br>
                            {logs.shipIsBroken
                                ? `It is broken`
                                : `It is not broken`}
                            <br />
                            <a href={`/logs/${logs._id}/edit`}>Edit This Ship</a>
                            <form action={`/logs/${logs._id}?_method=DELETE`}
                            method="POST">
                               <input type="submit" value="DELETE" />
                            </form>
                        </li>
                    );
                })}
          </ul>
    </div>
    )
   }
  }

module.exports = Index