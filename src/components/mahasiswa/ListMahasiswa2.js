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

import Modal from 'react-responsive-modal';

import axios from 'axios';

class ListMahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //dataMhs: [],
            nim: '',
            nama: '',
            kelas: '',
            prodi: '',
            angkatan: '',
            konsentrasi: '',
            items: [],
            open: false
        }

    }

    static contextType = MhsContext

    componentDidMount() {
        axios.get(`http://localhost/mjt-assessment/rest-server/api/mahasiswa/`)
            .then(res => {
                const items = res.data.data;
                this.setState({
                    items
                });
            })
    }

    addData = () => {
        const params = new URLSearchParams();
        params.append('nim', this.state.nim)
        params.append('nama', this.state.nama)
        params.append('kelas', this.state.kelas)
        params.append('prodi', this.state.prodi)
        params.append('angkatan', this.state.angkatan)
        params.append('konsentrasi', this.state.konsentrasi)
        axios({
            method: 'post',
            url: 'http://localhost/mjt-assessment/rest-server/api/mahasiswa/',
            data: params
        })

        console.log(params)
    }

    updateData = () => {
        const params = new URLSearchParams();
        params.append('nim', this.state.nim)
        params.append('nama', this.state.nama)
        params.append('kelas', this.state.kelas)
        params.append('prodi', this.state.prodi)
        params.append('angkatan', this.state.angkatan)
        params.append('konsentrasi', this.state.konsentrasi)
        axios({
            method: 'put',
            url: 'http://localhost/mjt-assessment/rest-server/api/mahasiswa/',
            data: params
        })
    }

    deleteData(nim) {
        const { items } = this.state;

        const params = new URLSearchParams();
        params.append('nim', nim);
        axios({
            method: 'delete',
            url: 'http://localhost/mjt-assessment/rest-server/api/mahasiswa/',
            data: params
        })
            .then(
                (result) => {
                    this.setState({
                        response: result,
                        items: items.filter(mhs => mhs.nim !== nim)
                    });
                }
            )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEdit = (param) => {
        this.setState(
            (preState) => ({
                ...preState.data, data: {
                    nama: param.data.nama
                }
            })
        );
        this.setState(
            { open: true }
        )
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { items, open } = this.state
        const { mahasiswas } = this.context
        let result = mahasiswas.length ? mahasiswas : items
        return (
            <>
                <form>
                    <div>
                        <label>NIM : </label>
                        <input type="text" name="nim" value={this.state.nim} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Name : </label>
                        <input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Kelas : </label>
                        <input type="text" name="kelas" value={this.state.kelas} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Prodi : </label>
                        <input type="text" name="prodi" value={this.state.prodi} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Angkatan : </label>
                        <input type="text" name="angkatan" value={this.state.angkatan} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Konsentrasi : </label>
                        <input type="text" name="konsentrasi" value={this.state.konsentrasi} onChange={this.handleChange} />
                    </div>
                    <br />
                    <button onClick={this.addData}>Save</button>
                </form>
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
                                <TableCell>Action Edit</TableCell>
                                <TableCell>Action Delete</TableCell>
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
                                            <Button variant="contained" color="primary" onClick={() => this.handleEdit(mhs.nim)}>
                                                Edit
                                            </Button>
                                            <Modal open={open} onClose={this.onCloseModal} center>
                                                <div>
                                                    <div>
                                                        <h5>Edit</h5>
                                                    </div>
                                                    <div>
                                                        <label>NIM : </label>
                                                        <input type="text" name="nama" value={this.state.nama}/>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={() => this.deleteData(mhs.nim)}>
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