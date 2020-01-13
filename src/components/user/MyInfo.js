import React, { useState } from 'react';

const MyInfo = (props) => {
    //let nama = 'abc'
    //const [nama, setNama] = useState('');
    return (
        //penggabungan string
        //`${nama} defghijklmnopqrstuvwxyz`
        <>
            <ul>
                <li>
                    {props.nama}
                </li>
                <li>
                    {props.alamat}
                </li>
                <li>
                    {props.nohp}
                </li>
            </ul>
        </>
    )
}

export default MyInfo