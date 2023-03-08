import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect, useState} from "react";
import { Router } from 'next/router';
import {Box, CircularProgress} from "@mui/material";
import { Layout } from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return <Layout><Component {...pageProps} />{loading ? <Box sx={{
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  }}><CircularProgress color='success'/></Box> : null }</Layout>
}

export default MyApp
