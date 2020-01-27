import React, { useState } from 'react';

import ListMahasiswa from './ListMahasiswa';
import AddMahasiswa from './AddMahasiswa';
import { MhsProvider } from './Context/mhsContext';

//Material-ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = (props) => {
    const [mahasiswas, setMahasiswas] = useState([])
    const onAdd = (data) => (
        setMahasiswas(data)
    )
    return (
        <>
            <Grid>
                <MhsProvider value={{ mahasiswas, onAdd }}>
                    <Typography variant="h4">Daftar Mahasiswa</Typography>
                    <AddMahasiswa />
                    <ListMahasiswa/>
                </MhsProvider>
            </Grid>
        </>
    )
}

export default Home;