// import React, { Component } from 'react';
// import '../.././App.css';
// import ReactTable from "react-table";
// import 'react-table/react-table.css';

// class Reacttable extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { keyword: '', data: [] }
//     }

//     fetchData = () => {
//         const url = `https://api.github.com/search/repositories?q=${this.state.keyword}`;
//         fetch(url)
//             .then(response => response.json())
//             .then(responseData => {
//                 this.setState({ data: responseData.items });
//             });
//     }
//     handleChange = (e) => {
//         this.setState({ keyword: e.target.value });
//     }

//     render() {
//         const columns = [{
//             Header: 'Name', // Header of the column
//             accessor: 'full_name' // Value accessor
//         }, {
//             Header: 'URL',
//             accessor: 'html_url',
//         }, {
//             Header: 'Owner',
//             accessor: 'owner.login',
//         }]
//         return (
//             <div className="App">
//                 <input type="text" onChange={this.handleChange} />
//                 <button onClick={this.fetchData}
//                     value={this.state.keyword} >Submit</button>
//                 <ReactTable
//                     data={this.state.data}
//                     columns={columns}
//                     filterable={true}
//                     defaultPageSize={10}
//                 />
//             </div>
//         );
//     }
// }
// export default Reacttable;

import React, { Component } from 'react';
import '../.././App.css';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class Reacttable extends Component {
    constructor(props) {
        super(props);
        this.state = { keyword: '', data: [] }
    }

    fetchData = () => {
        const url = `https://jsonplaceholder.typicode.com/users?q=${this.state.keyword}`;
        fetch(url)
            .then(response => response.json())
            .then(responseData => {
                this.setState({ data: responseData.items });
            });
    }
    handleChange = (e) => {
        this.setState({ keyword: e.target.value });
    }

    render() {
        const columns = [{
            Header: 'Name', 
            accessor: 'name'
        }, {
            Header: 'Email',
            accessor: 'email',
        }]
        return (
            <div className="App">
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.fetchData}
                    value={this.state.keyword} >Submit</button>
                <ReactTable
                    data={this.state.data}
                    columns={columns}
                    filterable={true}
                    defaultPageSize={10}
                />
            </div>
        );
    }
}
export default Reacttable;