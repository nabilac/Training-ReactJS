import React, { Component } from 'react';

// Material UI
import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Link,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    Backdrop
} from '@material-ui/core';

// Components
import Button from './Button';


class ListApi extends Component {

    state = {
        isLoading: true,
        users: [],
        error: null,
        alamat: {},
        perusahaan: {},
        showAddress: false,
        showCompany: false
    };

    fetchUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    users: data,
                    isLoading: false,

                })
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchUsers();
    }
    
    handleAlamat = (param) => {
        this.setState((preState) => ({
            ...preState.alamat, alamat: {
                street: param.address.street,
                suite: param.address.suite,
                city: param.address.city,
                zipcode: param.address.zipcode
            }
        }));
        this.setState({
            showAddress: true
        })
    }
   
    render() {
        
        const { isLoading, users, error, showAddress, showCompany, alamat, perusahaan } = this.state;
        let reUser = users;
        if(this.props.itemUser.length){
    
                reUser = this.props.itemUser
        }
        
        console.log(reUser)
        return (
            <React.Fragment>
                {error ? <p>{error.message}</p> : null}
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nama</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Alamat</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {!isLoading ? (
                                reUser.map(user => {
                                    const { id, name, email } = user;
                                    return (
                                        <TableRow key={id}>
                                            <TableCell>  {name} </TableCell>
                                            <TableCell> {email} </TableCell>
                                            <TableCell>
                                                <Button
                                                    variant={'contained'}
                                                    color={'primary'}
                                                    title={'Address'}
                                                    onClick={() => this.handleAlamat(user)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            ) : (
                                    <h3>Loading...</h3>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

                <Dialog
                    open={showAddress}
                    onClose={() => this.setState({
                        showAddress: !showAddress
                    })}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <DialogTitle> Address </DialogTitle>
                    <DialogContent dividers>
                        <TextField
                            label="Street"
                            value={alamat.street}
                            readOnly
                        /> <br />
                        <TextField
                            label="Suite"
                            value={alamat.suite}
                            readOnly
                        /> <br />
                        <TextField
                            label="City"
                            value={alamat.city}
                            readOnly
                        /> <br />
                        <TextField
                            label="Zip Code"
                            value={alamat.zipcode}
                            readOnly
                        />
                    </DialogContent>
                </Dialog>

                <Dialog
                    open={showCompany}
                    onClose={() => this.setState({
                        showCompany: !showCompany
                    })}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <DialogTitle> Company Details </DialogTitle>
                    <DialogContent dividers>
                        <TextField
                            label="Name"
                            value={perusahaan.name}
                            readOnly
                        /> <br />
                        <TextField
                            label="Suite"
                            value={perusahaan.catchPhrase}
                            readOnly
                        /> <br />
                        <TextField
                            label="City"
                            value={perusahaan.bs}
                            readOnly
                        /> <br />
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        );
    }
}

export default ListApi;