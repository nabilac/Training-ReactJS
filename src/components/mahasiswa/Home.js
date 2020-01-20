import React, { useState } from 'react';

import ListMahasiswa from './ListMahasiswa';
import ListMahasiswa2 from './ListMahasiswa2';
import { MhsProvider } from './Context/mhsContext';

//Material-ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = (props) => {
    const [mahasiswas, setMahasiswas] = useState([])
    const onSearch = (data) => (
        setMahasiswas(data)
    )
    return (
        <>
            <Grid>
                <MhsProvider value={{ mahasiswas, onSearch }}>
                    <Typography variant="h4">Daftar Mahasiswa</Typography>
                    <ListMahasiswa2 />
                </MhsProvider>
            </Grid>
        </>
    )
}

export default Home;