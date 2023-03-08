import React, {FC, useState} from "react";
import {QrReader} from "react-qr-reader";
import {Box, Button} from "@mui/material";
import {UderDataTable} from "./UderDataTable";

export const ScanPage: FC = () => {
    const [selected] = useState<ConstrainDOMString>("environment");
    const [startScan, setStartScan] = useState(false);
    const [loadingScan, setLoadingScan] = useState(false);
    const [data, setData] = useState("");

    const handleScan = async (scanData: string) => {
        setLoadingScan(true);
        console.log(`loaded data data`, scanData);
        if (scanData && scanData !== "") {
            console.log(`loaded >>>`, scanData);
            setData(scanData);
            setStartScan(false);
            setLoadingScan(false);
        }
    };



    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '350px',
            margin: '0 auto'
        }}>

            <Button
                onClick={() => {
                    setStartScan(!startScan);
                }}
                variant='contained'
            >
                {startScan ? "Stop Scan" : "Start Scan"}
            </Button>
            {startScan ? (
                <>
                    <Box maxWidth='300px'>
                    <QrReader
                        constraints={{
                        facingMode: selected
                        }}
                        onResult={(r, e) => {
                            if (!!r) {
                                handleScan(r?.getText())
                            }
                        }}
                        scanDelay={1000}
                    />
                    </Box>
                </>
            ) : null}
            {loadingScan ? <p>Loading</p> : null}
            {data !== "" ? <UderDataTable data={data as '472649'}/> : null}
        </Box>
    );
}
