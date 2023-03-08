import { FC, useCallback, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { AddToHomeScreen, ArrowDownward, ArrowOutward, Engineering, IosShare, MoreVert, } from "@mui/icons-material";


const Android: FC = () => {
    const [deferredPrompt, setDefer] = useState<any>();

    const beforeinstallprompt = useCallback((e: any) => {
        console.log(e);
        e.preventDefault();
        setDefer(e)
    }, [])

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', beforeinstallprompt);
        return () => {
            window.removeEventListener('beforeinstallprompt', beforeinstallprompt)
        }
    });

    const installHandler = useCallback(async () => {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(outcome);
        setDefer(null);
    }, [deferredPrompt]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px'
            }}
        >
            <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                puknij w te 3 kropeczki <MoreVert/> o tutej <ArrowOutward/> w pasku
            </Typography>
            <Typography>
                wybierz :
            </Typography>
                <Typography variant="h6" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} ><AddToHomeScreen/> Dodaj do ekranu głównego
                </Typography>
            <Typography>
                i oglądaj foty :)
            </Typography>
            <Typography
                align={"center"}
                sx={{
                    position: 'fixed',
                    width: '100%',
                    bottom: '90px',
                }}
            >
                albo
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'fixed',
                    width: '100%',
                    bottom: '40px',
                }}
            >
                <ArrowDownward/> Kliknij tutej, a bedziesz miał apkę z fotami chóralnymi <ArrowDownward/>
            </Box>
        </Box>
    )
}


export const InstallGuide: FC<{ platform: string }> = ({ platform }) => {


    return (
        <Box>
            {platform === 'android' ?
            <Android/> :
                <Typography align="center"><br/>
                    <Engineering/> <br/>
                    To jest strona PWA aby w pełni z niej kożystać dodaj ją do ekranu głównego, w odpowiedni sposób dla Twojej przegladarki ;) <br/><br/>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'}}>Albo z 3 kropek u góry <MoreVert/></Box> <Typography variant='caption'>(Android inn przeglądarka niż chrome)</Typography> <br/>
                    <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        justifyContent: 'center'}}>
                        Albo z share na dole <IosShare/></Box>
                    <Typography variant='caption'>(Iphone, safari) - jest to jedyny sposób dla IOS</Typography>
                    <br/><br/>
                    We will provide more details about installation process on yuor platform later... <br/><br/>
                    <Engineering/>
                </Typography>}
        </Box>)
}
