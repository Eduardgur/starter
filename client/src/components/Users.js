import React, { Component } from 'react';

class Users extends Component {
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('/test')
        .then(res => res.json())
        .then(users => this.setState({users}))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <ul>
                    <h2>Users</h2>
                    {this.state.users.map(user => 
                        <li key={user.id}> {user.name} </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Users;