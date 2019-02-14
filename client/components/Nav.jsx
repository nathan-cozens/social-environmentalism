import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Nav extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Menu>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/challenges">Challenges</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/profile/${this.props.userId}`}>Profile</Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/sign-up">sign up</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login">login</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
