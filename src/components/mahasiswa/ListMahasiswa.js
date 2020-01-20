import React, { Component } from 'react';
import MhsContext from './Context/mhsContext';

//Material-ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class ListMahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataMhs: [],
            nim: ''
        }

    }

    static contextType = MhsContext

    componentDidMount() {
        fetch(`http://192.168.180.72:83/mjt-assessment/rest-server/api/mahasiswa/`)
            .then(response => response.json())
            .then(item => {
                this.setState({ dataMhs: item.data })
            })
    }

    deleteData = (e) => {
        const nim = this.state.nim
        e.preventDefault();
        axios.delete(`http://192.168.180.72:83/mjt-assessment/rest-server/api/mahasiswa/${nim}`)
    }

    render() {
        const { dataMhs } = this.state
        const { mahasiswas } = this.context
        let result = mahasiswas.length ? mahasiswas : dataMhs
        return (
            <>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>NIM</TableCell>
                                <TableCell>Nama</TableCell>
                                <TableCell>Kelas</TableCell>
                                <TableCell>Prodi</TableCell>
                                <TableCell>Angkatan</TableCell>
                                <TableCell>Konsentrasi</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                result.map((mhs) =>
                                    <TableRow>
                                        <TableCell>{mhs.nim}</TableCell>
                                        <TableCell>{mhs.nama}</TableCell>
                                        <TableCell>{mhs.kelas}</TableCell>
                                        <TableCell>{mhs.prodi}</TableCell>
                                        <TableCell>{mhs.angkatan}</TableCell>
                                        <TableCell>{mhs.konsentrasi}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={this.deleteData}>
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }
}

export default ListMahasiswa;