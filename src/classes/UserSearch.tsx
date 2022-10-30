import { Component, ReactNode } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  };

  onClick = () =>  {
    const foundUser = this.props.users.find(user => {
      return user.name === this.state.name;
    });
    this.setState({
      user: foundUser
    })
  }

  render() {
    const { user, name } = this.state;
    return (
      <div>
        UserSearch
        <div>
          <input
            style={{ marginRight: 10 }}
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <button onClick={this.onClick}>Find User</button>
        </div>
        <div>
          User Details
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>{user && `User Name: ${user.name}`}</span>
            <span>{user && `User Age: ${user.age}`}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default UserSearch;
