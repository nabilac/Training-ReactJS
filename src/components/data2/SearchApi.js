import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

// Components
import Input from './Input';
import Button from './Button';

class SeacrhApi extends Component {

    state = {
        search: ''
    };

    fetchUsers(searchById) {
        if (searchById == '') {
            fetch(`https://jsonplaceholder.typicode.com/users`)
                .then(response => response.json())
                .then(data =>(
                    this.props.handleApi(data)
                    )
                )
                .catch(error => this.setState({ error, isLoading: false }));
        } else {
            console.log(searchById)
            fetch(`https://jsonplaceholder.typicode.com/users/${searchById}`)
                .then(response => response.json())
                .then(data =>{
                        let result = [data]
                        this.props.handleApi(result)
                    }
                )
                .catch(error => this.setState({ error, isLoading: false }));
        }
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleCari = () => {
    
        this.fetchUsers(this.state.search);
    }

    render() {
        const { search } = this.state;
        return (
            // <React.Fragment>
            //     <Grid container xs>
            //         <Grid item md={6} lg={2} >
            //             <Input
            //                 title={'Pencarian'}
            //                 handleChange={this.handleChange}
            //                 value={search}
            //             />
            //         </Grid>
            //         <Grid md={6} lg={1} >
            //             <Button
            //                 variant={'outlined'}
            //                 color={'secondary'}
            //                 onClick={this.handleCari}
            //                 title={'Cari'}
            //             />
            //         </Grid>
            //     </Grid>
            // </React.Fragment>
            <React.Fragment>
                <h1>Data User</h1>
                <input type="text" onChange={this.handleChange} value={search} />
                <button
                    onClick={this.handleCari}
                >
                    Submit
                </button>
            </React.Fragment>
        );
    }
}

export default SeacrhApi;