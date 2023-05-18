const React = require("react");
const Nav = require("../components/Nav");


class Edit extends React.Component {
    render() {
        const fruit = this.props.logs;
        return(
        <Nav title="Edit Logs" link="/logs" text="Home" />
        <div>
        <form action={`/logs/${logs._id}?_method=PUT`} method="POST" >

             Title: <input type="text" name="title" defaultValue={logs.title} />
               Entry: <input type="text" name="entry" defaultValue={logs.entry} />
               Is Ship Broken:
             {
                logs.shipIsBroken?
                 <input type="checkbox" name="shipIsBroken" defaultChecked />
                 :
                 <input type="checkbox" name="shipIsBroken" />
             }
              <input type="submit" value="Submit Changes" />
              </form>
            </div>

        )
    }
}

module.exports = Edit