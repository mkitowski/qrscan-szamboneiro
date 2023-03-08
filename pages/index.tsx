import { NextPage } from "next";
import React from "react";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import path from "path";
import fs from "fs";
import { useDisplayMode } from "../hook/useDisplayMode";
import { InstallGuide } from "../components/InstallGuide";
import {ScanPage} from "../components/ScanPage";

type List = {
    name: string;
    galleryUrl: string;
    thumbnailUrl: string;
}

const Gallery: NextPage = () => {
    const { isStandAlone, platform } = useDisplayMode();
    return (
        isStandAlone ?
    <ScanPage/>
         : <InstallGuide platform={platform}/>
    )
}

export default Gallery;

