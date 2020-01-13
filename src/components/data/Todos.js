
// import React, { Component } from 'react';

// class Todos extends Component {
//     state = {
//         isLoading: true,
//         todos: [],
//         error: null
//     }

//     fetchUsers() {
//         // Where we're fetching data from
//         fetch(`https://jsonplaceholder.typicode.com/todos`)
//             // We get the API response and receive data in JSON format...
//             .then(response => response.json())
//             // ...then we update the users state
//             .then(data =>
//                 this.setState({
//                     todos: data,
//                     isLoading: false,
//                 })
//             )
//             // Catch any errors we hit and update the app
//             .catch(error => this.setState({ error, isLoading: false }));
//     }

//     componentDidMount() {
//         this.fetchUsers();
//     }


//     render() {

//         const { isLoading, todos, error } = this.state;
//         return (
//             <React.Fragment>
//                 <h1>Random User</h1>
//                 {error ? <p>{error.message}</p> : null}
//                 {!isLoading ? (
//                     todos.map(todo => {
//                         const { id, title } = todo;
//                         return (
//                             <div>
//                                 <table border='1'>
//                                 <p>{title}</p>
//                                 </table>
//                             </div>
//                         );
//                     })
//                     // If there is a delay in data, let's let the user know it's loading
//                 ) : (
//                         <h3>Loading...</h3>
//                     )}


//             </React.Fragment>


//         );
//     }
// }

// export default Todos;

import React from 'react';

class BookList extends React.Component {
    state = {
        books: []
    }
    
    componentDidMount() {
        fetch('https://some-api.com/harry-potter')
        .then((response) => response.json())
        .then(booksList => {
            this.setState({ books: booksList });
        });
    }
    
    render() {
        return (
            <ul>
                {this.state.books.map((book) => (
                    <li key={book.id}>{book.name}</li>
                ))}
            </ul>
        )
    }
}

export default BookList;