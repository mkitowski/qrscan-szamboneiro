import React, {FC} from "react";
import {userData, UserData} from "../assets/data";
import {Box, Typography} from "@mui/material";
import {Phone} from "@mui/icons-material";
import Link from "next/link";

export const UderDataTable: FC<{data: '472649' }> = ({data}) => {
    if(!userData[data]) {
        return <Typography variant={"h5"}>
            sorry ziom ale nie widze tego rekordu nigdzie
        </Typography>
    }

    const {name, city, contact} = userData[data];

        return (
            <Box>
                Nazwa:<Typography variant={"h6"}> {name}</Typography>
                Miasto:<Typography variant={"h6"}> {city}</Typography>
                Kontakt:<Typography variant={"h6"}> {contact} <Link href={`tel:${contact}`}><Phone height={'30px'}/></Link></Typography>
        </Box>)

}

