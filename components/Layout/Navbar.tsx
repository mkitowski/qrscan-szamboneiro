import React, { FC, useEffect, useState } from "react";
import { Box, Button, IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { PageTitle } from "../PageTitle";
import { useRouter } from "next/router";
import Head from "next/head";

import { menu, } from "../../utils/getNames";




export const Navbar: FC = ({pageName}: {pageName?: string}) => {
    const route = useRouter();



    const name = menu.filter(el => el.href === route.route)[0]?.name || pageName;

    return (
        <>
            <Head>
                <title>Czytnik QR Kodów szambo</title>
            </Head>
            <Box sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                background: 'rgba(255,255,255,1)',
                color: '#3CAAFF',
                zIndex: '5',
            }}>
                {name ? <PageTitle
                    href='/'
                    id='main'
                >
                    {name}
                </PageTitle> : null}
            </Box>
        </>
    )

}
