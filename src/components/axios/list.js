import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({
          persons
        });
      })
  }

  render() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <td>Id</td>
              <td>Nama</td>
              <td>Username</td>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map(person =>
              <tr>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.username}</td>
              </tr>
            )
            }
          </tbody>
        </table>
      </div>
    )
  }
}